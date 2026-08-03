import Link from "next/link"
import dynamic from "next/dynamic"
import { guides } from "@/constant/guides"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { Breadcrumbs } from "@/components/landing/Breadcrumbs"
import { UseCaseHeroSection } from "@/components/landing/UseCaseHeroSection"
import { RelatedLinks } from "@/components/landing/RelatedLinks"
import { JsonLd } from "@/components/landing/JsonLd"
import { buildPageMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo"

const CtaSection = dynamic(() =>
  import("@/components/landing/CtaSection").then((mod) => mod.CtaSection),
)
const SiteFooter = dynamic(() =>
  import("@/components/landing/SiteFooter").then((mod) => mod.SiteFooter),
)

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/guides" },
]

export const metadata = buildPageMetadata({
  title: "Personal Finance Guides | MoneySpent",
  description:
    "Practical guides on expense tracking, monthly budgets, zero-based budgeting, envelope budgeting, categories, and subscriptions—built around MoneySpent.",
  path: "/guides",
  keywords: [
    "personal finance guides",
    "expense tracking guide",
    "budgeting guides",
    "MoneySpent",
  ],
})

export default function GuidesHubPage() {
  return (
    <main className="lp-root min-h-svh">
      <JsonLd
        data={webPageJsonLd({
          name: "Personal Finance Guides",
          description:
            "Guides on expense tracking, budgeting methods, categories, and subscriptions.",
          path: "/guides",
        })}
      />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <SiteHeader />
      <Breadcrumbs items={crumbs} />
      <UseCaseHeroSection
        eyebrow="Resource center"
        title="Personal finance guides that stay practical."
        subHeadline="Clear explainers on tracking expenses, building budgets, and spotting recurring costs—so MoneySpent fits into a habit, not a guilt spiral."
      />

      <section className="border-b border-lp-line py-16 lg:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="mx-auto max-w-[640px] text-center">
            <p className="lp-section-label mx-auto">
              <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
              How to use these guides
            </p>
            <h2 className="lp-display mt-4 text-[32px] font-semibold tracking-[-0.03em] text-lp-ink sm:text-[40px]">
              Start with habits, not hype
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
              Personal finance content often jumps straight to investing jargon. These guides start
              earlier—with the daily and weekly habits that make every later money decision easier.
            </p>
            <ul className="mx-auto mt-8 inline-block space-y-2.5 text-left">
              {[
                "Expense tracking systems that survive busy weeks",
                "Monthly, zero-based, and envelope budgeting methods",
                "Category lists and subscription audits that reveal silent costs",
                "Beginner personal finance basics without overwhelm",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-lp-ink-soft sm:text-lg"
                >
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-lp-em" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="mx-auto max-w-[640px] text-center">
            <p className="lp-section-label mx-auto">
              <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
              All guides
            </p>
            <h2 className="lp-display mt-4 text-[32px] font-semibold tracking-[-0.03em] text-lp-ink sm:text-[40px]">
              Practical reads for clearer money
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-[720px] space-y-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.path}
                className="block rounded-2xl border border-lp-line bg-lp-card px-5 py-5 text-left transition-colors hover:border-lp-em/35 sm:px-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-lp-em">
                  {guide.eyebrow}
                </p>
                <h3 className="lp-display mt-2 text-xl font-semibold tracking-[-0.02em] text-lp-ink sm:text-2xl">
                  {guide.h1}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-lp-ink-soft sm:text-[15px]">
                  {guide.intro}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/blog", label: "Blog" },
          { href: "/features", label: "Features" },
          { href: "/expense-tracker", label: "Expense tracker" },
          { href: "/budget-tracker", label: "Budget tracker" },
          { href: "/for", label: "Use cases" },
          { href: "/faq", label: "FAQ" },
        ]}
      />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
