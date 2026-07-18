import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { UseCaseHeroSection } from "@/components/landing/UseCaseHeroSection"
import { UseCaseContentSection } from "@/components/landing/UseCaseContentSection"
import { RelatedLinks } from "@/components/landing/RelatedLinks"

const FaqSection = dynamic(() =>
  import("@/components/landing/FaqSection").then((mod) => mod.FaqSection),
)
const CtaSection = dynamic(() =>
  import("@/components/landing/CtaSection").then((mod) => mod.CtaSection),
)
const SiteFooter = dynamic(() =>
  import("@/components/landing/SiteFooter").then((mod) => mod.SiteFooter),
)

type SeoContentPageProps = {
  eyebrow?: string
  h1: string
  intro: string
  sections: { title: string; body: string }[]
  faq: { question: string; answer: string }[]
  related: { href: string; label: string }[]
  softwareDescription: string
}

export function SeoContentPage({
  eyebrow,
  h1,
  intro,
  sections,
  faq,
  related,
  softwareDescription,
}: SeoContentPageProps) {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MoneySpent",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web, iOS, Android",
    description: softwareDescription,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  return (
    <main className="lp-root min-h-svh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <UseCaseHeroSection title={h1} subHeadline={intro} eyebrow={eyebrow} />
      <UseCaseContentSection contentBlocks={sections} />
      <FaqSection customFaq={faq} />
      <RelatedLinks links={related} />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
