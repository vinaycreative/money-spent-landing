import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { HeroSection } from "@/components/landing/HeroSection"
import { ProofStrip } from "@/components/landing/ProofStrip"
import { faq } from "@/constant/faq"

// Below the fold components
const SentenceSection = dynamic(() =>
  import("@/components/landing/SentenceSection").then((mod) => mod.SentenceSection),
)
const FeaturesSection = dynamic(() =>
  import("@/components/landing/FeaturesSection").then((mod) => mod.FeaturesSection),
)
const ScreenGallery = dynamic(() =>
  import("@/components/landing/ScreenGallery").then((mod) => mod.ScreenGallery),
)
const StatsSection = dynamic(() =>
  import("@/components/landing/StatsSection").then((mod) => mod.StatsSection),
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

export const metadata: Metadata = {
  title: "MoneySpent | Simple Personal Finance & Expense Tracker",
  description:
    "MoneySpent is a simple personal finance tracker for expenses, budgets, accounts, and spending insights. Track money clearly without spreadsheet friction.",
  alternates: { canonical: "/" },
  keywords: [
    "MoneySpent",
    "money spent tracker",
    "expense tracker app",
    "personal finance tracker",
    "budget tracker",
    "spending analytics",
    "account balance tracker",
  ],
  openGraph: {
    title: "MoneySpent | Simple Personal Finance & Expense Tracker",
    description:
      "Track expenses, budgets, accounts, and spending trends in one clean personal finance app.",
    url: "/",
    siteName: "MoneySpent",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "MoneySpent Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneySpent | Simple Personal Finance & Expense Tracker",
    description:
      "A clean personal finance app for expense tracking, budgets, accounts, and spending insights.",
    images: ["/og.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MoneySpent",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "MoneySpent is a personal finance tracker used by over 2,000+ users to track expenses, budgets, account balances, and spending insights completely free.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  featureList: [
    "Expense tracking",
    "Budget tracking",
    "Account balance tracking",
    "Spending analytics",
    "Personal finance dashboard",
  ],
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

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MoneySpent",
  url: "https://moneyspent.app",
  logo: "https://moneyspent.app/logo.svg",
  description: "A simple, private personal finance and expense tracker.",
}

export default function Home() {
  return (
    <main className="lp-root min-h-svh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <SiteHeader />
      <HeroSection />
      <ProofStrip />
      <SentenceSection />
      <FeaturesSection />
      <ScreenGallery />
      {/* <StatsSection /> */}
      <FreeSection />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
