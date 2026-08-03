import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { Breadcrumbs } from "@/components/landing/Breadcrumbs"
import { UseCaseHeroSection } from "@/components/landing/UseCaseHeroSection"
import {
  UseCaseContentSection,
  type ContentBlock,
} from "@/components/landing/UseCaseContentSection"
import { RelatedLinks } from "@/components/landing/RelatedLinks"
import { JsonLd } from "@/components/landing/JsonLd"
import {
  breadcrumbJsonLd,
  faqJsonLd,
  softwareApplicationJsonLd,
  webPageJsonLd,
  type BreadcrumbItem,
  type FaqItem,
} from "@/lib/seo"

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
  sections: ContentBlock[]
  faq: FaqItem[]
  related: { href: string; label: string }[]
  softwareDescription: string
  breadcrumbs?: BreadcrumbItem[]
  path: string
}

export function SeoContentPage({
  eyebrow,
  h1,
  intro,
  sections,
  faq,
  related,
  softwareDescription,
  breadcrumbs,
  path,
}: SeoContentPageProps) {
  const crumbs: BreadcrumbItem[] = breadcrumbs ?? [
    { name: "Home", path: "/" },
    { name: h1, path },
  ]

  return (
    <main className="lp-root min-h-svh">
      <JsonLd data={softwareApplicationJsonLd(softwareDescription)} />
      <JsonLd data={faqJsonLd(faq)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={webPageJsonLd({
          name: h1,
          description: softwareDescription,
          path,
        })}
      />
      <SiteHeader />
      <Breadcrumbs items={crumbs} />
      <UseCaseHeroSection title={h1} subHeadline={intro} eyebrow={eyebrow} />
      <UseCaseContentSection contentBlocks={sections} />
      <FaqSection customFaq={faq} />
      <RelatedLinks links={related} />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
