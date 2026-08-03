import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { Breadcrumbs } from "@/components/landing/Breadcrumbs"
import { UseCaseHeroSection } from "@/components/landing/UseCaseHeroSection"
import { SentenceSection } from "@/components/landing/SentenceSection"
import {
  UseCaseContentSection,
  type ContentBlock,
} from "@/components/landing/UseCaseContentSection"
import { RelatedLinks } from "@/components/landing/RelatedLinks"
import { JsonLd } from "@/components/landing/JsonLd"
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
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

const description =
  "See how MoneySpent works: add spends like writing a note. One sentence, a few taps, and your expense is saved—without a form for every coffee."

const crumbs = [
  { name: "Home", path: "/" },
  { name: "How it works", path: "/how-it-works" },
]

const contentBlocks: ContentBlock[] = [
  {
    title: "The problem: a form for every coffee",
    body: "Typical expense apps ask for amount, category, payment method, merchant, note, and date before you can save. That is six fields for a ₹40 chai—and the reason most people quit after a few days.\n\nIf logging feels like admin work, it will never become a habit. MoneySpent starts from the opposite idea: capture a spend the way you would jot a note.",
    callout:
      "Speed is not a nice-to-have. If saving a spend takes longer than the purchase, people stop tracking.",
  },
  {
    title: "The MoneySpent way: one sentence. Done.",
    body: "Instead of a long form, you fill a short sentence. Tap a blank, pick a value, move on. Each tap reveals the right tool—then you save once.",
    bullets: [
      "Amount — what you spent",
      "Category — food, travel, bills, shopping, and more",
      "Merchant — so you remember where it went",
      "Account — cash, UPI, bank, or card",
    ],
  },
  {
    title: "How logging works in a few taps",
    body: "You do not need a perfect system on day one. You need an entry flow you will still use after lunch on a busy weekday.",
    steps: [
      {
        title: "Open and start the sentence",
        body: "Tap to add a spend. The sentence layout shows what is left to fill—no hunting through a multi-step wizard.",
      },
      {
        title: "Fill blanks as you go",
        body: "Pick amount, category, merchant, and account. Each blank opens the right picker so you stay in flow.",
      },
      {
        title: "Save once — about 4 taps to amount + save",
        body: "The rest can auto-complete from your last entry, so repeat purchases stay even faster. One sentence, done.",
      },
    ],
    callout:
      "Four taps to amount and save is the point. The habit sticks because the friction is low enough for real life.",
  },
  {
    title: "What happens after you save",
    body: "Logging is only useful if it feeds something you can review. Every sentence entry updates your day, categories, and account balances—so you are not reconstructing the month from bank SMS later.",
    bullets: [
      "Today’s total stays honest as you go",
      "Category insights build from real spends, not guesses",
      "Multiple accounts stay clear (cash vs UPI vs card)",
      "History stays searchable when you need to look something up",
    ],
  },
  {
    title: "Who this flow is built for",
    body: "Sentence-style logging helps anyone who currently tracks money in Notes, WhatsApp chats, or memory—and keeps failing. It is especially useful when spends are small, frequent, and easy to forget.",
    bullets: [
      "Students with many small UPI payments",
      "Freelancers mixing work tools and personal costs",
      "Couples who want a shared household trail without spreadsheet fights",
      "Anyone tired of six-field forms for every coffee",
    ],
  },
]

const howItWorksFaq = [
  {
    question: "How is MoneySpent different from other expense apps?",
    answer:
      "Most apps use a long form for every transaction. MoneySpent uses sentence-style logging so amount, category, merchant, and account can be captured in a few taps—more like writing a note than filling admin fields.",
  },
  {
    question: "How many taps does it take to log a spend?",
    answer:
      "Everyday expenses are designed around roughly four taps to amount and save. The rest can auto-complete from your last entry so repeat spends stay even faster.",
  },
  {
    question: "Do I need to connect my bank?",
    answer:
      "No. MoneySpent is a manual tracker. You add spends yourself, which keeps setup simple and private.",
  },
  {
    question: "Can I still see categories and balances after quick logging?",
    answer:
      "Yes. Fast entry still captures the structure you need—category, merchant, and account—so insights and balances update as you go.",
  },
]

export const metadata = buildPageMetadata({
  title: "How It Works | Add Spends Like Writing a Note — MoneySpent",
  description,
  path: "/how-it-works",
  keywords: [
    "how MoneySpent works",
    "quick expense logging",
    "sentence expense tracker",
    "add spend like a note",
    "fast expense entry",
  ],
})

export default function HowItWorksPage() {
  return (
    <main className="lp-root min-h-svh">
      <JsonLd
        data={webPageJsonLd({
          name: "How MoneySpent works",
          description,
          path: "/how-it-works",
        })}
      />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(howItWorksFaq)} />
      <SiteHeader />
      <Breadcrumbs items={crumbs} />
      <UseCaseHeroSection
        eyebrow="How it works"
        title="Expense tracking that feels like a note."
        subHeadline="Most apps bury you in forms. MoneySpent turns logging into one short sentence—so you actually keep going."
      />
      <SentenceSection />
      <UseCaseContentSection contentBlocks={contentBlocks} />
      <FaqSection customFaq={howItWorksFaq} />
      <RelatedLinks
        title="Keep exploring"
        links={[
          { href: "/features/daily-logging", label: "Daily logging" },
          { href: "/features", label: "All features" },
          { href: "/pricing", label: "Pricing" },
          { href: "/guides/how-to-track-expenses", label: "How to track expenses" },
          { href: "/blog", label: "Blog" },
        ]}
      />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
