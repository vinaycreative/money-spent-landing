import dynamic from "next/dynamic"
import { faq } from "@/constant/faq"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { Breadcrumbs } from "@/components/landing/Breadcrumbs"
import { UseCaseHeroSection } from "@/components/landing/UseCaseHeroSection"
import { RelatedLinks } from "@/components/landing/RelatedLinks"
import { JsonLd } from "@/components/landing/JsonLd"
import { breadcrumbJsonLd, buildPageMetadata, faqJsonLd } from "@/lib/seo"

const FaqSection = dynamic(() =>
  import("@/components/landing/FaqSection").then((mod) => mod.FaqSection),
)
const CtaSection = dynamic(() =>
  import("@/components/landing/CtaSection").then((mod) => mod.CtaSection),
)
const SiteFooter = dynamic(() =>
  import("@/components/landing/SiteFooter").then((mod) => mod.SiteFooter),
)

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
]

export const metadata = buildPageMetadata({
  title: "FAQ — Expense Tracker Questions Answered",
  description:
    "Answers about MoneySpent: expense tracking, budgets, accounts, privacy, pricing, and getting started with a free personal finance tracker.",
  path: "/faq",
  keywords: ["MoneySpent FAQ", "expense tracker FAQ", "budget tracker questions"],
})

export default function FaqPage() {
  return (
    <main className="lp-root min-h-svh">
      <JsonLd data={faqJsonLd(faq)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <SiteHeader />
      <Breadcrumbs items={crumbs} />
      <UseCaseHeroSection
        eyebrow="FAQ"
        title="MoneySpent questions, answered"
        subHeadline="Everything people ask about tracking expenses, budgets, accounts, privacy, and getting started—without the fluff."
      />
      <FaqSection customFaq={faq} />
      <RelatedLinks
        links={[
          { href: "/features", label: "Features" },
          { href: "/expense-tracker", label: "Expense tracker" },
          { href: "/budget-tracker", label: "Budget tracker" },
          { href: "/pricing", label: "Pricing" },
          { href: "/guides", label: "Guides" },
          { href: "/for/freelancers", label: "For freelancers" },
          { href: "/for/students", label: "For students" },
          { href: "/about", label: "About" },
        ]}
      />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
