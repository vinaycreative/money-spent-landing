import type { Metadata } from "next"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { HeroSection } from "@/components/landing/HeroSection"
import { ProofStrip } from "@/components/landing/ProofStrip"
import { SentenceSection } from "@/components/landing/SentenceSection"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { ScreenGallery } from "@/components/landing/ScreenGallery"
import { StatsSection } from "@/components/landing/StatsSection"
import { CtaSection } from "@/components/landing/CtaSection"
import { SiteFooter } from "@/components/landing/SiteFooter"

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
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MoneySpent | Simple Personal Finance & Expense Tracker",
    description:
      "A clean personal finance app for expense tracking, budgets, accounts, and spending insights.",
  },
}

const faq = [
  {
    question: "What is MoneySpent used for?",
    answer:
      "MoneySpent is used to track daily expenses, income, account balances, budgets, and spending insights in one personal finance dashboard.",
  },
  {
    question: "Is MoneySpent free?",
    answer:
      "Yes. MoneySpent has a $0 free forever plan for personal money tracking, including expense entries, accounts, categories, and analytics.",
  },
  {
    question: "How fast can I add an expense?",
    answer:
      "You can add an expense in a few taps: choose Add Expense, enter the amount, select an account and category, add a note if needed, and save.",
  },
  {
    question: "Does MoneySpent track accounts and balances?",
    answer:
      "Yes. MoneySpent can track cash, bank accounts, wallets, and cards together, then update balances when expenses or income are saved.",
  },
  {
    question: "Does MoneySpent show spending analytics?",
    answer:
      "Yes. MoneySpent shows spending totals, income, savings, top categories, category percentages, and transaction history for the selected period.",
  },
  {
    question: "Who should use MoneySpent?",
    answer:
      "MoneySpent is for people who want a simple personal expense tracker without maintaining a spreadsheet or complicated accounting software.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MoneySpent",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "A personal finance tracker for expenses, budgets, accounts, balances, and spending insights.",
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
      <SiteHeader />
      <HeroSection />
      <ProofStrip />
      <SentenceSection />
      <FeaturesSection />
      <ScreenGallery />
      <StatsSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
