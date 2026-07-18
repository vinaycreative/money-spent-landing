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
    description:
      "Free expense tracker for freelancers in India. Log business costs, track client income, and see real profit without spreadsheets.",
    heroTitle: "Track every freelance rupee smarter.",
    heroSub:
      "Log business expenses in seconds, separate personal spend, and know what you actually earned after costs.",
    sentenceWords: [
      { text: "₹5,000", after: " on ", color: "var(--lp-em)", bg: "var(--lp-em-soft)" },
      { text: "Software", after: " at ", color: "var(--lp-amber)", bg: "var(--lp-amber-soft)" },
      { text: "Adobe", after: " paid with ", color: "var(--lp-rose)", bg: "var(--lp-rose-soft)" },
      { text: "Business Card", after: ".", color: "var(--lp-indigo)", bg: "var(--lp-indigo-soft)" },
    ],
    contentBlocks: [
      {
        title: "Separate personal and business spending",
        body: "Mixing UPI snacks with client software subscriptions makes tax season painful. In MoneySpent, create dedicated accounts for your business bank, PayPal, or credit card, then log expenses against the right one. You get a clear view of business overhead versus personal cash flow—without a spreadsheet.",
      },
      {
        title: "Log project costs in one sentence",
        body: "Freelancers do not have time for six-field forms. MoneySpent’s sentence logging lets you capture amount, category, merchant, and account in a few taps. That means tools, coworking, travel, and client meals stay organized while you stay focused on billable work.",
      },
      {
        title: "See income, expenses, and leftover profit",
        body: "Track invoice payments as income and project costs as expenses in the same place. Category insights show where money goes—software, travel, contractors—so you can price projects with real numbers instead of guesses.",
      },
      {
        title: "Built for India freelancers",
        body: "Work in rupees, track UPI and card spends, and keep records portable with export when you need them for accounting. MoneySpent stays free for personal use, with no ads interrupting your workflow.",
      },
    ],
    faq: [
      {
        question: "Can freelancers track both income and expenses in MoneySpent?",
        answer:
          "Yes. Log client payments as income and business costs as expenses so you can see profit more clearly over time.",
      },
      {
        question: "Can I separate business and personal accounts?",
        answer:
          "Yes. Create multiple accounts—cash, bank, wallet, or card—and assign each transaction to the right one.",
      },
      {
        question: "Is MoneySpent useful for GST or tax prep?",
        answer:
          "MoneySpent is not tax software, but organized expense and income history makes it easier to review spending before you talk to an accountant or file returns.",
      },
      {
        question: "Does MoneySpent work for Indian freelancers using UPI?",
        answer:
          "Yes. You can track rupee amounts and log spends paid by UPI, cash, or cards across the accounts you set up.",
      },
      {
        question: "Is MoneySpent free for freelancers?",
        answer:
          "MoneySpent includes a free personal tracking experience with no credit card required to start.",
      },
      {
        question: "How is MoneySpent faster than a spreadsheet for freelancers?",
        answer:
          "Instead of updating rows and formulas, you add a transaction in a few taps and balances update automatically by account and category.",
      },
    ],
  },
  {
    slug: "students",
    title: "Expense Tracker for Students | MoneySpent",
    description:
      "Free student expense tracker for daily spending, pocket money, and campus budgets. Simple, private, and no credit card needed.",
    heroTitle: "Track your student budget smarter.",
    heroSub:
      "Log coffee, food, and travel in seconds so your pocket money lasts the month—not just the first week.",
    sentenceWords: [
      { text: "₹150", after: " on ", color: "var(--lp-em)", bg: "var(--lp-em-soft)" },
      { text: "Coffee", after: " at ", color: "var(--lp-amber)", bg: "var(--lp-amber-soft)" },
      { text: "Campus Cafe", after: " paid with ", color: "var(--lp-rose)", bg: "var(--lp-rose-soft)" },
      { text: "Cash", after: ".", color: "var(--lp-indigo)", bg: "var(--lp-indigo-soft)" },
    ],
    contentBlocks: [
      {
        title: "Catch small spends before they add up",
        body: "Student budgets die from snacks, auto rides, printing, and late-night food—not one big purchase. MoneySpent is built for quick daily logging so those ₹50–₹200 spends do not disappear from memory by month end.",
      },
      {
        title: "See where pocket money actually goes",
        body: "Category insights show food, travel, subscriptions, and fun spending side by side. That clarity helps you decide what to cut next week without guilt-tripping yourself with a complicated finance app.",
      },
      {
        title: "Free, private, and no ads",
        body: "You should not need a subscription to understand your own money. MoneySpent is free for personal use, does not bury features behind paywalls, and keeps tracking private instead of selling your habits.",
      },
      {
        title: "Works on your phone as a PWA",
        body: "Add MoneySpent to your home screen and log expenses between classes. No app-store friction—just open, tap, save, and get back to your day.",
      },
    ],
    faq: [
      {
        question: "Is MoneySpent free for students?",
        answer:
          "Yes. Personal tracking is free, with no ads and no credit card required to start.",
      },
      {
        question: "Can students track pocket money and UPI spends?",
        answer:
          "Yes. Log cash and UPI transactions by category so you can see how weekly allowance is used.",
      },
      {
        question: "Do I need banking login to use MoneySpent?",
        answer:
          "No. MoneySpent is a manual tracker—you add expenses yourself, which keeps setup simple and private.",
      },
      {
        question: "Can MoneySpent help with a monthly student budget?",
        answer:
          "Yes. Tracking daily spends and category totals helps you stay within a monthly limit for food, travel, and entertainment.",
      },
      {
        question: "Is MoneySpent better than Notes for tracking expenses?",
        answer:
          "For most students, yes. Notes are easy to start but hard to total. MoneySpent keeps amounts, categories, and history organized automatically.",
      },
      {
        question: "Can I use MoneySpent offline on campus?",
        answer:
          "MoneySpent is a web app/PWA designed for quick phone use. Connectivity needs can vary, but day-to-day tracking is built to feel fast and lightweight.",
      },
    ],
  },
  {
    slug: "couples",
    title: "Expense Tracker for Couples | MoneySpent",
    description:
      "Simple expense tracker for couples. Track shared bills, groceries, rent, and household budgets in one clean place.",
    heroTitle: "Track shared expenses without the awkward spreadsheet.",
    heroSub:
      "Log rent, groceries, and dinners clearly so both of you know what the household spent—and what is left.",
    sentenceWords: [
      { text: "₹2,500", after: " on ", color: "var(--lp-em)", bg: "var(--lp-em-soft)" },
      { text: "Groceries", after: " at ", color: "var(--lp-amber)", bg: "var(--lp-amber-soft)" },
      { text: "Supermarket", after: " paid with ", color: "var(--lp-rose)", bg: "var(--lp-rose-soft)" },
      { text: "Joint Account", after: ".", color: "var(--lp-indigo)", bg: "var(--lp-indigo-soft)" },
    ],
    contentBlocks: [
      {
        title: "One place for household money questions",
        body: "“How much did we spend on food this month?” should not require digging through two bank apps. MoneySpent keeps shared categories and totals readable so couples can review spending calmly instead of arguing from incomplete memory.",
      },
      {
        title: "Track joint and individual accounts together",
        body: "Set up a joint account for rent and groceries, plus individual cards for personal spends. Balances update as you log transactions, so shared and personal money stay clear without forcing everything into one pile.",
      },
      {
        title: "Build a simple household budget habit",
        body: "Use category insights for groceries, utilities, dining out, and subscriptions. When both people can see the same numbers, planning weekends, trips, or savings goals becomes a shared decision—not a surprise.",
      },
      {
        title: "Private by design for real life",
        body: "Household finances are sensitive. MoneySpent focuses on clear personal tracking without ads or noisy upsells, so your money conversations stay between you—not a feed of finance spam.",
      },
    ],
    faq: [
      {
        question: "Can couples track a joint account in MoneySpent?",
        answer:
          "Yes. Create a joint cash or bank account and log shared expenses against it alongside personal accounts.",
      },
      {
        question: "Can we track rent, groceries, and utilities separately?",
        answer:
          "Yes. Organize transactions into categories so household bills and everyday spending stay easy to review.",
      },
      {
        question: "Do both partners need separate MoneySpent logins?",
        answer:
          "MoneySpent is designed as a personal tracker. Many couples use one shared workspace for household records, or keep separate tracking for personal spends—choose what fits your trust and privacy preferences.",
      },
      {
        question: "Is MoneySpent good for splitting expenses?",
        answer:
          "MoneySpent helps you record who paid and from which account. It is not a full bill-splitting social app, but clear logs make fair splits easier later.",
      },
      {
        question: "Is MoneySpent free for couples managing a household?",
        answer:
          "Yes. Personal tracking is free to start, with no credit card required.",
      },
      {
        question: "Can we export spending history?",
        answer:
          "MoneySpent supports keeping records portable with import/export tools so your history is not locked into the app.",
      },
    ],
  },
]
