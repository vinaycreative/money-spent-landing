import Link from "next/link"
import dynamic from "next/dynamic"
import { Check } from "lucide-react"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { Breadcrumbs } from "@/components/landing/Breadcrumbs"
import { UseCaseHeroSection } from "@/components/landing/UseCaseHeroSection"
import { RelatedLinks } from "@/components/landing/RelatedLinks"
import { JsonLd } from "@/components/landing/JsonLd"
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  softwareApplicationJsonLd,
  webPageJsonLd,
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

const planFeatures = [
  "Unlimited manual transactions",
  "Multiple accounts and cards",
  "Smart category management",
  "Spending insights and trends",
  "Private personal tracking",
  "No ads, no tracking spam",
]

const pricingFaq = [
  {
    question: "Is MoneySpent really free?",
    answer:
      "Yes. MoneySpent is free forever for personal use. You can start tracking expenses without a credit card.",
  },
  {
    question: "Are there premium plans?",
    answer:
      "Personal tracking is free. The product focus is clear daily money tracking without subscription pressure for everyday personal use.",
  },
  {
    question: "Do I need a credit card to sign up?",
    answer: "No. You can start without entering payment details.",
  },
  {
    question: "Is there a free trial limit?",
    answer:
      "There is no trial countdown for personal tracking. Free means you can use the core personal experience without an artificial deadline.",
  },
]

const pricingDescription =
  "MoneySpent pricing is simple: free forever for personal use. Unlimited manual transactions, accounts, categories, and spending insights—no credit card required."

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
]

export const metadata = buildPageMetadata({
  title: "Pricing | Free Personal Expense Tracker — MoneySpent",
  description: pricingDescription,
  path: "/pricing",
  keywords: [
    "MoneySpent pricing",
    "free expense tracker",
    "free budget tracker",
    "personal finance app pricing",
  ],
})

export default function PricingPage() {
  return (
    <main className="lp-root min-h-svh">
      <JsonLd data={softwareApplicationJsonLd(pricingDescription)} />
      <JsonLd data={faqJsonLd(pricingFaq)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={webPageJsonLd({
          name: "MoneySpent Pricing",
          description:
            "MoneySpent is free forever for personal use with unlimited manual transactions and spending insights.",
          path: "/pricing",
        })}
      />
      <SiteHeader />
      <Breadcrumbs items={crumbs} />
      <UseCaseHeroSection
        eyebrow="Pricing"
        title="Premium tracking, completely free."
        subHeadline="MoneySpent is free forever for personal use. No credit card. No ads. Just a clean expense and budget tracker you can start in minutes."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="mx-auto max-w-[560px] rounded-[28px] border border-lp-line bg-lp-card p-8 shadow-[var(--lp-shadow-sm)] sm:p-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-lp-em">
              Personal
            </p>
            <div className="mt-3 flex items-end gap-2">
              <span className="lp-display text-5xl font-semibold tracking-[-0.04em] text-lp-ink">
                ₹0
              </span>
              <span className="pb-2 text-sm text-lp-ink-mute">/ month</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-lp-ink-soft">
              Free forever for personal expense tracking, budgets, accounts, and insights.
            </p>
            <ul className="mt-8 space-y-3">
              {planFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-lp-ink-soft">
                  <Check className="mt-0.5 size-4 shrink-0 text-lp-em" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="https://my.moneyspent.app/onboarding"
              className="lp-btn-primary mt-8 inline-flex min-h-12 items-center rounded-full bg-lp-ink px-7 text-sm font-semibold text-lp-bg"
            >
              Start free →
            </Link>
            <p className="mt-4 text-[12px] text-lp-ink-mute">
              Prefer a machine-readable summary? See{" "}
              <Link href="/pricing.txt" className="underline-offset-2 hover:underline">
                pricing.txt
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FaqSection customFaq={pricingFaq} />
      <RelatedLinks
        links={[
          { href: "/features", label: "Features" },
          { href: "/about", label: "About" },
          { href: "/expense-tracker", label: "Expense tracker" },
          { href: "/faq", label: "FAQ" },
          { href: "/compare/spreadsheet", label: "vs Spreadsheets" },
        ]}
      />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
