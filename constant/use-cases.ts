import { faq as defaultFaq } from "./faq"
import type { SentenceWord } from "@/components/AnimatedSentence"

export interface UseCase {
  slug: string
  title: string
  description: string
  heroTitle: string
  heroSub: string
  sentenceWords: SentenceWord[]
  contentBlocks: { title: string; body: string }[]
  faq: { question: string; answer: string }[]
}

export const useCases: UseCase[] = [
  {
    slug: "freelancers",
    title: "Expense Tracker for Freelancers | MoneySpent",
    description: "MoneySpent helps freelancers log business expenses, track invoice payments, and know exactly what you've earned.",
    heroTitle: "Track every freelance project smarter.",
    heroSub: "Log business expenses in seconds, stay on budget, and know exactly where your freelance income goes. MoneySpent is simple, private, and free.",
    sentenceWords: [
      { text: "₹5000", after: " on ", color: "var(--lp-em)", bg: "var(--lp-em-soft)" },
      { text: "💻 Software", after: " at ", color: "var(--lp-amber)", bg: "var(--lp-amber-soft)" },
      { text: "Adobe", after: " paid with ", color: "var(--lp-rose)", bg: "var(--lp-rose-soft)" },
      { text: "Business Card", after: ".", color: "var(--lp-indigo)", bg: "var(--lp-indigo-soft)" },
    ],
    contentBlocks: [
      {
        title: "Separate Personal & Business Spending",
        body: "As a freelancer, mixing personal and business expenses is the fastest way to a headache during tax season. MoneySpent allows you to set up dedicated accounts for your business checking, PayPal, or specific credit cards. You can instantly see your business overhead versus your personal cash flow without complicated spreadsheets."
      },
      {
        title: "Track Client Work & Expenses Fast",
        body: "Time is money. You don't want to spend 20 minutes clicking through drop-downs just to log a $15 software subscription. MoneySpent's one-sentence logging means you type '15 on software at Adobe' and you're done. Your expenses are categorized and tracked against your budget instantly."
      }
    ],
    faq: [
      {
        question: "Can I use MoneySpent to track freelance income?",
        answer: "Yes, you can track both your freelance income and your business expenses to see your actual profit."
      },
      ...defaultFaq
    ]
  },
  {
    slug: "students",
    title: "Expense Tracker for Students | MoneySpent",
    description: "A simple, free personal finance tracker for college students. Track your daily expenses and stay on budget.",
    heroTitle: "Track your student budget smarter.",
    heroSub: "Log daily expenses in seconds, stay on your student budget, and know where your pocket money goes. MoneySpent is simple, private, and completely free.",
    sentenceWords: [
      { text: "₹150", after: " on ", color: "var(--lp-em)", bg: "var(--lp-em-soft)" },
      { text: "☕ Coffee", after: " at ", color: "var(--lp-amber)", bg: "var(--lp-amber-soft)" },
      { text: "Campus Cafe", after: " paid with ", color: "var(--lp-rose)", bg: "var(--lp-rose-soft)" },
      { text: "Cash", after: ".", color: "var(--lp-indigo)", bg: "var(--lp-indigo-soft)" },
    ],
    contentBlocks: [
      {
        title: "Stretch Your Pocket Money",
        body: "College life means tight budgets and lots of small, daily transactions—coffee, snacks, printing fees, and nights out. If you wait until the end of the month to check your bank app, it's already too late. MoneySpent helps you log those small expenses instantly before you forget them, helping you stretch your budget until the end of the semester."
      },
      {
        title: "Free. No Hidden Fees.",
        body: "Most finance apps want you to pay a monthly subscription just to see your own data. MoneySpent is 100% free for personal use. We don't sell your data, we don't show you ads, and we don't hold your own statistics hostage behind a paywall."
      }
    ],
    faq: [
      {
        question: "Is MoneySpent free for students?",
        answer: "Yes! MoneySpent includes a completely free personal tracking experience with no ads and no credit card required."
      },
      ...defaultFaq
    ]
  },
  {
    slug: "couples",
    title: "Expense Tracker for Couples | MoneySpent",
    description: "A simple personal finance tracker for couples. Track shared expenses, budgets, and spending insights.",
    heroTitle: "Track shared expenses smarter.",
    heroSub: "Log shared spending in seconds, manage household budgets together, and know exactly where your money goes.",
    sentenceWords: [
      { text: "₹2500", after: " on ", color: "var(--lp-em)", bg: "var(--lp-em-soft)" },
      { text: "🛒 Groceries", after: " at ", color: "var(--lp-amber)", bg: "var(--lp-amber-soft)" },
      { text: "Supermarket", after: " paid with ", color: "var(--lp-rose)", bg: "var(--lp-rose-soft)" },
      { text: "Joint Account", after: ".", color: "var(--lp-indigo)", bg: "var(--lp-indigo-soft)" },
    ],
    contentBlocks: [
      {
        title: "Manage the Household Budget",
        body: "When you're sharing rent, groceries, and utility bills, you need a clear overview of the household finances. MoneySpent lets you set up custom budgets for different household categories, so you both know exactly how much is left for dining out or entertainment this month."
      },
      {
        title: "Track Joint and Individual Accounts",
        body: "You can create unlimited accounts within MoneySpent. Set up one for your joint checking, and others for your individual credit cards. This gives you the flexibility to track shared expenses while keeping your personal spending organized in the same simple dashboard."
      }
    ],
    faq: [
      {
        question: "Can we track shared accounts?",
        answer: "Yes. You can track multiple cash, bank, or card accounts, making it easy to see shared balances."
      },
      ...defaultFaq
    ]
  }
]
