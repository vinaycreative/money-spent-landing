export type IntentPage = {
  slug: string
  path: string
  title: string
  description: string
  eyebrow: string
  h1: string
  intro: string
  sections: { title: string; body: string }[]
  faq: { question: string; answer: string }[]
  related: { href: string; label: string }[]
}

export const intentPages: IntentPage[] = [
  {
    slug: "expense-tracker",
    path: "/expense-tracker",
    title: "Free Expense Tracker App | MoneySpent",
    description:
      "MoneySpent is a free expense tracker for daily spending, categories, accounts, and clear insights. Track expenses in seconds—no ads, no credit card.",
    eyebrow: "Expense tracker",
    h1: "A simple expense tracker for everyday money.",
    intro:
      "MoneySpent helps you log expenses quickly, organize them by category and account, and understand where your money goes—without spreadsheet friction or subscription pressure.",
    sections: [
      {
        title: "What is an expense tracker?",
        body: "An expense tracker is an app that records what you spend, when you spent it, and what it was for. The goal is simple: replace forgotten notes and messy bank-statement scrolling with a clear spending history you can actually use.",
      },
      {
        title: "Track daily expenses in seconds",
        body: "Most people abandon expense apps because logging takes too long. MoneySpent uses sentence-style entry so amount, category, merchant, and account can be captured in a few taps. That makes daily expense tracking realistic—not another chore.",
      },
      {
        title: "See categories, accounts, and trends",
        body: "Logging alone is not enough. MoneySpent shows category totals, account balances, and spending patterns so you can answer questions like “How much did food cost this month?” without building a pivot table.",
      },
      {
        title: "Free, private, and built for real life",
        body: "Start without a credit card. Track cash, bank, wallet, and cards together. Keep your records portable. MoneySpent is designed for personal clarity—not ads, upsells, or complicated accounting features most people never need.",
      },
      {
        title: "Who MoneySpent is for",
        body: "If you want a free expense tracker for personal use—students, freelancers, couples, or anyone tired of spreadsheets—MoneySpent focuses on the habit that matters: logging spends clearly and reviewing them often.",
      },
    ],
    faq: [
      {
        question: "Is MoneySpent a free expense tracker?",
        answer:
          "Yes. MoneySpent includes a free personal expense tracking experience with no credit card required to start.",
      },
      {
        question: "Can I track expenses by category?",
        answer:
          "Yes. Organize spends into categories like food, travel, bills, shopping, and more, then review totals and trends.",
      },
      {
        question: "Does MoneySpent support multiple accounts?",
        answer:
          "Yes. Track cash, bank accounts, wallets, and cards together, with balances updating as you add transactions.",
      },
      {
        question: "Is MoneySpent better than tracking expenses in a spreadsheet?",
        answer:
          "For many people, yes. It is faster for daily logging and already structured for categories, accounts, and spending insights.",
      },
      {
        question: "Can I use MoneySpent as a daily expense tracker on mobile?",
        answer:
          "Yes. MoneySpent works as a web app/PWA, so you can use it from your phone and add it to your home screen.",
      },
      {
        question: "Does MoneySpent connect to my bank automatically?",
        answer:
          "MoneySpent is a manual expense tracker. You add transactions yourself, which keeps setup simple and private.",
      },
    ],
    related: [
      { href: "/budget-tracker", label: "Budget tracker" },
      { href: "/for/students", label: "For students" },
      { href: "/for/freelancers", label: "For freelancers" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    slug: "budget-tracker",
    path: "/budget-tracker",
    title: "Free Budget Tracker App | MoneySpent",
    description:
      "Track budgets with MoneySpent by logging expenses, reviewing categories, and seeing where money goes. Free personal budget tracking without spreadsheet chaos.",
    eyebrow: "Budget tracker",
    h1: "A clear budget tracker for real spending habits.",
    intro:
      "Budgets fail when tracking is hard. MoneySpent makes it easy to log spends, watch category totals, and adjust before the month gets away from you.",
    sections: [
      {
        title: "What is a budget tracker?",
        body: "A budget tracker helps you compare planned spending with actual spending. Instead of hoping your bank balance “feels” fine, you can see where money went by category and decide what to change next week.",
      },
      {
        title: "Start with honest daily logging",
        body: "A budget only works if expenses are recorded. MoneySpent focuses on fast logging first—because accurate category totals depend on a habit you can keep, not a perfect plan you abandon.",
      },
      {
        title: "Use categories as your budget map",
        body: "Food, rent, travel, subscriptions, shopping: MoneySpent organizes transactions so you can review each area. That makes it easier to set practical limits and notice overspending early.",
      },
      {
        title: "Track accounts without losing the big picture",
        body: "Households and individuals often spend from multiple places. Track cash, UPI wallets, cards, and bank accounts together so your budget view matches real life—not one account in isolation.",
      },
      {
        title: "Why MoneySpent for budgeting",
        body: "You get a free, private personal finance workspace that stays simple. No ads. No credit card to start. Just clearer spending records that support better budgeting decisions.",
      },
    ],
    faq: [
      {
        question: "Can MoneySpent help me stick to a monthly budget?",
        answer:
          "Yes. By tracking expenses and category totals, you can see overspending early and adjust before month end.",
      },
      {
        question: "Is MoneySpent a free budget tracker?",
        answer:
          "MoneySpent offers free personal tracking so you can manage spending and budgeting habits without a subscription wall.",
      },
      {
        question: "Do I need complicated envelopes or rules to budget here?",
        answer:
          "No. MoneySpent keeps things simple: log spends, review categories, and use that clarity to make better money decisions.",
      },
      {
        question: "Can couples use MoneySpent as a household budget tracker?",
        answer:
          "Yes. Many couples track shared categories like rent and groceries while keeping personal accounts organized in the same app.",
      },
      {
        question: "Is MoneySpent useful for budgeting in India?",
        answer:
          "Yes. It works well for rupee-based personal tracking across cash, UPI, and cards.",
      },
      {
        question: "How is a budget tracker different from an expense tracker?",
        answer:
          "Expense tracking records what happened. Budgeting uses those records to guide what should happen next. MoneySpent supports both by making logging and category review easy.",
      },
    ],
    related: [
      { href: "/expense-tracker", label: "Expense tracker" },
      { href: "/for/couples", label: "For couples" },
      { href: "/for/students", label: "For students" },
      { href: "/faq", label: "FAQ" },
    ],
  },
]

export function getIntentPage(slug: string) {
  return intentPages.find((page) => page.slug === slug)
}
