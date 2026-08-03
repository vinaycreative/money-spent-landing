import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { HeroSection } from "@/components/landing/HeroSection"
import { ProofStrip } from "@/components/landing/ProofStrip"
import { JsonLd } from "@/components/landing/JsonLd"
import { faq } from "@/constant/faq"
import { buildPageMetadata } from "@/lib/seo"
import {
  faqJsonLd,
  organizationJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/seo"

const SentenceSection = dynamic(() =>
  import("@/components/landing/SentenceSection").then((mod) => mod.SentenceSection),
)
const FeaturesSection = dynamic(() =>
  import("@/components/landing/FeaturesSection").then((mod) => mod.FeaturesSection),
)
const ScreenGallery = dynamic(() =>
  import("@/components/landing/ScreenGallery").then((mod) => mod.ScreenGallery),
)
const PrivacySection = dynamic(() =>
  import("@/components/landing/PrivacySection").then((mod) => mod.PrivacySection),
)
const FreeSection = dynamic(() =>
  import("@/components/landing/FreeSection").then((mod) => mod.FreeSection),
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
const RelatedLinks = dynamic(() =>
  import("@/components/landing/RelatedLinks").then((mod) => mod.RelatedLinks),
)

const homeDescription =
  "MoneySpent is a free personal finance tracker for expenses, budgets, accounts, and spending insights. Log daily spends in seconds—no ads, no credit card."

export const metadata = buildPageMetadata({
  title: "MoneySpent | Free Personal Finance & Expense Tracker",
  description: homeDescription,
  path: "/",
  keywords: [
    "MoneySpent",
    "expense tracker app",
    "free expense tracker",
    "personal finance tracker",
    "budget tracker",
    "spending tracker",
    "account balance tracker",
  ],
})

export default function Home() {
  return (
    <main className="lp-root min-h-svh">
      <JsonLd data={softwareApplicationJsonLd(homeDescription)} />
      <JsonLd data={faqJsonLd(faq)} />
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <SiteHeader />
      <HeroSection />
      <ProofStrip />
      <SentenceSection />
      <FeaturesSection />
      <ScreenGallery />
      <PrivacySection />
      <FreeSection />
      <FaqSection />
      <RelatedLinks
        title="Explore MoneySpent"
        links={[
          { href: "/how-it-works", label: "How it works" },
          { href: "/features", label: "All features" },
          { href: "/features/daily-logging", label: "Daily logging" },
          { href: "/expense-tracker", label: "Expense tracker" },
          { href: "/pricing", label: "Pricing" },
          { href: "/for", label: "Use cases" },
          { href: "/guides", label: "Guides" },
          { href: "/blog", label: "Blog" },
          { href: "/faq", label: "FAQ" },
        ]}
      />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
