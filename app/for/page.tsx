import Link from "next/link"
import dynamic from "next/dynamic"
import { useCases } from "@/constant/use-cases"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { Breadcrumbs } from "@/components/landing/Breadcrumbs"
import { UseCaseHeroSection } from "@/components/landing/UseCaseHeroSection"
import { RelatedLinks } from "@/components/landing/RelatedLinks"
import { JsonLd } from "@/components/landing/JsonLd"
import { breadcrumbJsonLd, buildPageMetadata, webPageJsonLd } from "@/lib/seo"

const CtaSection = dynamic(() =>
  import("@/components/landing/CtaSection").then((mod) => mod.CtaSection),
)
const SiteFooter = dynamic(() =>
  import("@/components/landing/SiteFooter").then((mod) => mod.SiteFooter),
)

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Use cases", path: "/for" },
]

export const metadata = buildPageMetadata({
  title: "Expense Tracker Use Cases | MoneySpent",
  description:
    "Explore MoneySpent for freelancers, students, couples, families, creators, travelers, remote workers, teachers, developers, and small businesses.",
  path: "/for",
  keywords: [
    "expense tracker for freelancers",
    "expense tracker for students",
    "expense tracker for couples",
    "MoneySpent use cases",
  ],
})

export default function ForHubPage() {
  return (
    <main className="lp-root min-h-svh">
      <JsonLd
        data={webPageJsonLd({
          name: "MoneySpent Use Cases",
          description:
            "Audience-specific expense tracker pages for freelancers, students, couples, families, and more.",
          path: "/for",
        })}
      />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <SiteHeader />
      <Breadcrumbs items={crumbs} />
      <UseCaseHeroSection
        eyebrow="Use cases"
        title="An expense tracker for how you actually live."
        subHeadline="Same product, different money realities. Pick the page that matches your day-to-day spending."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="mx-auto grid max-w-[920px] gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <Link
                key={useCase.slug}
                href={`/for/${useCase.slug}`}
                className="rounded-2xl border border-lp-line bg-lp-card px-5 py-5 text-left transition-colors hover:border-lp-em/35"
              >
                <h2 className="lp-display text-xl font-semibold tracking-[-0.02em] text-lp-ink">
                  For {useCase.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-lp-ink-soft">{useCase.heroSub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/features", label: "Features" },
          { href: "/expense-tracker", label: "Expense tracker" },
          { href: "/budget-tracker", label: "Budget tracker" },
          { href: "/guides", label: "Guides" },
          { href: "/pricing", label: "Pricing" },
        ]}
      />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
