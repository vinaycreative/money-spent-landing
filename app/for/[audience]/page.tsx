import { notFound } from "next/navigation"
import dynamic from "next/dynamic"
import { useCases } from "@/constant/use-cases"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { Breadcrumbs } from "@/components/landing/Breadcrumbs"
import { UseCaseHeroSection } from "@/components/landing/UseCaseHeroSection"
import { UseCaseContentSection } from "@/components/landing/UseCaseContentSection"
import { RelatedLinks } from "@/components/landing/RelatedLinks"
import { JsonLd } from "@/components/landing/JsonLd"
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo"

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
}) {
  const resolvedParams = await params
  const useCase = useCases.find((uc) => uc.slug === resolvedParams.audience)

  if (!useCase) return {}

  return buildPageMetadata({
    title: useCase.title,
    description: useCase.description,
    path: `/for/${useCase.slug}`,
    keywords: [
      `expense tracker for ${useCase.name.toLowerCase()}`,
      "MoneySpent",
      "free expense tracker",
      "personal finance tracker",
    ],
  })
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

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Use cases", path: "/for" },
    { name: useCase.name, path: `/for/${useCase.slug}` },
  ]

  const related = [
    { href: "/for", label: "All use cases" },
    { href: "/features", label: "Features" },
    { href: "/expense-tracker", label: "Expense tracker" },
    { href: "/budget-tracker", label: "Budget tracker" },
    ...useCases
      .filter((uc) => uc.slug !== useCase.slug)
      .slice(0, 4)
      .map((uc) => ({ href: `/for/${uc.slug}`, label: `For ${uc.name}` })),
    { href: "/guides", label: "Guides" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <main className="lp-root min-h-svh">
      <JsonLd data={softwareApplicationJsonLd(useCase.description)} />
      <JsonLd data={faqJsonLd(useCase.faq)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <SiteHeader />
      <Breadcrumbs items={crumbs} />
      <UseCaseHeroSection
        title={useCase.heroTitle}
        subHeadline={useCase.heroSub}
        eyebrow={`For ${useCase.name}`}
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
