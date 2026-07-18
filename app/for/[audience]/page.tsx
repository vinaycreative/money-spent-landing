import { notFound } from "next/navigation"
import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { useCases } from "@/constant/use-cases"

import { SiteHeader } from "@/components/landing/SiteHeader"
import { UseCaseHeroSection } from "@/components/landing/UseCaseHeroSection"
import { UseCaseContentSection } from "@/components/landing/UseCaseContentSection"
import { RelatedLinks } from "@/components/landing/RelatedLinks"

const SentenceSection = dynamic(() =>
  import("@/components/landing/SentenceSection").then((mod) => mod.SentenceSection),
)
const FaqSection = dynamic(() =>
  import("@/components/landing/FaqSection").then((mod) => mod.FaqSection),
)
const CtaSection = dynamic(() =>
  import("@/components/landing/CtaSection").then((mod) => mod.CtaSection),
)
const SiteFooter = dynamic(() =>
  import("@/components/landing/SiteFooter").then((mod) => mod.SiteFooter),
)

export async function generateStaticParams() {
  return useCases.map((useCase) => ({
    audience: useCase.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ audience: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const useCase = useCases.find((uc) => uc.slug === resolvedParams.audience)

  if (!useCase) return {}

  return {
    title: useCase.title,
    description: useCase.description,
    alternates: { canonical: `/for/${useCase.slug}` },
    openGraph: {
      title: useCase.title,
      description: useCase.description,
      url: `/for/${useCase.slug}`,
    },
  }
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ audience: string }>
}) {
  const resolvedParams = await params
  const useCase = useCases.find((uc) => uc.slug === resolvedParams.audience)

  if (!useCase) {
    notFound()
  }

  const related = [
    { href: "/expense-tracker", label: "Expense tracker" },
    { href: "/budget-tracker", label: "Budget tracker" },
    ...useCases
      .filter((uc) => uc.slug !== useCase.slug)
      .map((uc) => ({ href: `/for/${uc.slug}`, label: `For ${uc.slug}` })),
    { href: "/faq", label: "FAQ" },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MoneySpent",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web, iOS, Android",
    description: useCase.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: useCase.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  return (
    <main className="lp-root min-h-svh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <UseCaseHeroSection
        title={useCase.heroTitle}
        subHeadline={useCase.heroSub}
        eyebrow={`For ${useCase.slug}`}
      />
      <UseCaseContentSection contentBlocks={useCase.contentBlocks} />
      <SentenceSection sentenceWords={useCase.sentenceWords} />
      <FaqSection customFaq={useCase.faq} />
      <RelatedLinks links={related} />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
