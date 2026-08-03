import Link from "next/link"
import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { Breadcrumbs } from "@/components/landing/Breadcrumbs"
import { UseCaseHeroSection } from "@/components/landing/UseCaseHeroSection"
import { RelatedLinks } from "@/components/landing/RelatedLinks"
import { JsonLd } from "@/components/landing/JsonLd"
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  organizationJsonLd,
  webPageJsonLd,
} from "@/lib/seo"

const CtaSection = dynamic(() =>
  import("@/components/landing/CtaSection").then((mod) => mod.CtaSection),
)
const SiteFooter = dynamic(() =>
  import("@/components/landing/SiteFooter").then((mod) => mod.SiteFooter),
)

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]

export const metadata = buildPageMetadata({
  title: "About MoneySpent | Simple Personal Finance Tracker",
  description:
    "MoneySpent is a simple, private personal finance and expense tracker built for daily clarity—not ads, subscriptions, or spreadsheet friction.",
  path: "/about",
  keywords: ["about MoneySpent", "personal finance tracker", "expense tracker app"],
})

const blocks = [
  {
    title: "Why MoneySpent exists",
    body: "Most people do not fail at budgeting because they lack discipline. They fail because logging money is annoying. MoneySpent exists to make expense tracking fast enough for real life—so clarity becomes a habit instead of a weekend chore.",
  },
  {
    title: "What we believe",
    body: "Personal finance tools should be calm, private, and useful on day one. You should not need a credit card to understand your own spending. You should not be interrupted by ads while checking your balance. And you should be able to export your records whenever you want.",
  },
  {
    title: "Who it is for",
    body: "MoneySpent is for students, freelancers, couples, families, remote workers, creators, and anyone tired of reconstructing the month from bank SMS. If you want a simple expense tracker with budgets, accounts, and spending insights, you are in the right place.",
  },
  {
    title: "Built by Vinay Bhadre",
    body: "MoneySpent is founded and built by Vinay Bhadre (vinaycreative) with a product focus on clarity, speed, and trust. The landing experience and product direction prioritize practical daily use over finance-industry complexity.",
  },
]

export default function AboutPage() {
  return (
    <main className="lp-root min-h-svh">
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd({
          name: "About MoneySpent",
          description:
            "Learn what MoneySpent is, who it is for, and why it focuses on simple private expense tracking.",
          path: "/about",
        })}
      />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <SiteHeader />
      <Breadcrumbs items={crumbs} />
      <UseCaseHeroSection
        eyebrow="About"
        title="A quieter way to understand your money."
        subHeadline="MoneySpent is a free personal finance tracker for expenses, budgets, accounts, and spending insights—designed to stay out of your way."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="mx-auto max-w-[640px] space-y-12 text-center sm:text-left">
            {blocks.map((block) => (
              <div key={block.title}>
                <h2 className="lp-display text-2xl font-semibold tracking-[-0.03em] text-lp-ink sm:text-3xl">
                  {block.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-lp-ink-soft sm:text-lg">
                  {block.body}
                </p>
              </div>
            ))}
            <p className="text-base leading-relaxed text-lp-ink-soft sm:text-lg">
              Read more about{" "}
              <Link
                href="/author/vinay-bhadre"
                className="font-medium text-lp-ink underline-offset-2 hover:underline"
              >
                Vinay Bhadre
              </Link>
              , or explore the{" "}
              <Link
                href="/features"
                className="font-medium text-lp-ink underline-offset-2 hover:underline"
              >
                features
              </Link>
              ,{" "}
              <Link
                href="/blog"
                className="font-medium text-lp-ink underline-offset-2 hover:underline"
              >
                blog
              </Link>
              ,{" "}
              <Link
                href="/pricing"
                className="font-medium text-lp-ink underline-offset-2 hover:underline"
              >
                pricing
              </Link>
              , or{" "}
              <Link
                href="/faq"
                className="font-medium text-lp-ink underline-offset-2 hover:underline"
              >
                FAQ
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/author/vinay-bhadre", label: "Vinay Bhadre" },
          { href: "/blog", label: "Blog" },
          { href: "/features", label: "Features" },
          { href: "/pricing", label: "Pricing" },
          { href: "/guides", label: "Guides" },
        ]}
      />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
