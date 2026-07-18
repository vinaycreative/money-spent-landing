import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { faq } from "@/constant/faq"
import { SiteHeader } from "@/components/landing/SiteHeader"
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

export const metadata: Metadata = {
  title: "FAQ | MoneySpent Expense Tracker",
  description:
    "Answers about MoneySpent: expense tracking, budgets, accounts, privacy, pricing, and getting started with a free personal finance tracker.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | MoneySpent Expense Tracker",
    description:
      "Common questions about MoneySpent expense tracking, budgets, accounts, and privacy.",
    url: "/faq",
  },
}

export default function FaqPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <section className="border-b border-lp-line pb-10 pt-28 lg:pb-12 lg:pt-36">
        <div className="mx-auto max-w-[720px] px-5 sm:px-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-lp-em">FAQ</p>
          <h1 className="lp-display mt-3 text-[36px] font-semibold tracking-[-0.03em] text-lp-ink sm:text-[48px]">
            MoneySpent questions, answered
          </h1>
          <p className="mt-4 max-w-[540px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
            Everything people ask about tracking expenses, budgets, accounts, privacy, and getting
            started—without the fluff.
          </p>
        </div>
      </section>
      <FaqSection customFaq={faq} />
      <RelatedLinks
        links={[
          { href: "/expense-tracker", label: "Expense tracker" },
          { href: "/budget-tracker", label: "Budget tracker" },
          { href: "/for/freelancers", label: "For freelancers" },
          { href: "/for/students", label: "For students" },
          { href: "/for/couples", label: "For couples" },
        ]}
      />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
