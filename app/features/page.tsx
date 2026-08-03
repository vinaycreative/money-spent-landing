import Link from "next/link"
import dynamic from "next/dynamic"
import { features } from "@/constant/features"
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
  { name: "Features", path: "/features" },
]

export const metadata = buildPageMetadata({
  title: "MoneySpent Features | Expense Tracking Tools That Stick",
  description:
    "Explore MoneySpent features: fast daily logging, today view, category insights, searchable history, multi-account balances, and privacy controls—free for personal use.",
  path: "/features",
  keywords: [
    "MoneySpent features",
    "expense tracker features",
    "daily expense logging",
    "category insights",
    "multi account expense tracker",
  ],
})

export default function FeaturesHubPage() {
  return (
    <main className="lp-root min-h-svh">
      <JsonLd
        data={webPageJsonLd({
          name: "MoneySpent Features",
          description:
            "Daily logging, today view, category insights, searchable history, accounts, and privacy controls.",
          path: "/features",
        })}
      />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <SiteHeader />
      <Breadcrumbs items={crumbs} />
      <UseCaseHeroSection
        eyebrow="Product features"
        title="Built for daily money clarity—not finance theater."
        subHeadline="Six focused features that make expense tracking fast enough to keep: log spends, see today, understand categories, search history, track accounts, and stay in control."
      />

      <section className="border-b border-lp-line py-16 lg:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="mx-auto max-w-[640px] text-center">
            <p className="lp-section-label mx-auto">
              <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
              Why these features
            </p>
            <h2 className="lp-display mt-4 text-[32px] font-semibold tracking-[-0.03em] text-lp-ink sm:text-[40px]">
              Fewer tools. Better habits.
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
              Most personal finance apps compete by stacking dashboards and upsells. MoneySpent is
              intentionally narrower: help you log money quickly, understand where it went, and keep
              your data private.
            </p>
            <ul className="mx-auto mt-8 inline-block space-y-2.5 text-left">
              {[
                "Speed first — logging has to survive busy days",
                "Daily feedback — awareness before month-end regret",
                "Category clarity — decisions need totals, not vibes",
                "Account reality — cash, UPI, and cards in one picture",
                "Ownership — hide balances, export data, no ad theater",
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
              Explore
            </p>
            <h2 className="lp-display mt-4 text-[32px] font-semibold tracking-[-0.03em] text-lp-ink sm:text-[40px]">
              Every feature, explained
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
              Open any feature for workflows, examples, and FAQs—or start free and learn by logging
              your first expense.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[920px] gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <Link
                key={feature.slug}
                href={feature.path}
                className="rounded-2xl border border-lp-line bg-lp-card px-5 py-5 text-left transition-colors hover:border-lp-em/35 sm:px-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-lp-em">
                  {feature.navLabel}
                </p>
                <h3 className="lp-display mt-2 text-xl font-semibold tracking-[-0.02em] text-lp-ink">
                  {feature.h1}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-lp-ink-soft">{feature.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/expense-tracker", label: "Expense tracker" },
          { href: "/budget-tracker", label: "Budget tracker" },
          { href: "/pricing", label: "Pricing" },
          { href: "/guides", label: "Guides" },
          { href: "/faq", label: "FAQ" },
        ]}
      />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
