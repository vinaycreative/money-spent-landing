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
      { href: "/spending-tracker", label: "Spending tracker" },
      { href: "/guides/how-to-track-expenses", label: "How to track expenses" },
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
      { href: "/guides/monthly-budget", label: "Monthly budget guide" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    slug: "spending-tracker",
    path: "/spending-tracker",
    title: "Free Spending Tracker App | MoneySpent",
    description:
      "Track daily spending by category and account with MoneySpent. A free spending tracker for clearer habits—no ads, no credit card required.",
    eyebrow: "Spending tracker",
    h1: "A spending tracker that makes daily money visible.",
    intro:
      "If you have ever wondered where the month went, you need spending visibility—not another complicated finance dashboard. MoneySpent helps you log spends fast and review patterns clearly.",
    sections: [
      {
        title: "What is a spending tracker?",
        body: "A spending tracker records everyday purchases so you can see totals by day, category, and account. It turns scattered payments into a readable story of your money habits.",
      },
      {
        title: "Daily spending clarity beats monthly regret",
        body: "Waiting until month end hides problems. With MoneySpent, today’s spends stay in view, so you can adjust food delivery, transport, or shopping before the damage compounds.",
      },
      {
        title: "Categories reveal the real pattern",
        body: "Raw transaction lists are noisy. Category insights show whether food, subscriptions, or shopping is driving the trend—so decisions become specific.",
      },
      {
        title: "Track every account you actually use",
        body: "Cash, UPI, cards, and bank accounts often fund the same lifestyle. MoneySpent keeps them together so your spending picture matches reality.",
      },
      {
        title: "Free personal spending tracker",
        body: "Start without a credit card. MoneySpent is free for personal use, private by design, and built for the daily habit that improves budgets.",
      },
    ],
    faq: [
      {
        question: "Is MoneySpent a free spending tracker?",
        answer:
          "Yes. Personal spending tracking is free, with no credit card required to start.",
      },
      {
        question: "How is a spending tracker different from a budget tracker?",
        answer:
          "A spending tracker records what happened. A budget uses those records to guide what should happen next. MoneySpent supports both.",
      },
      {
        question: "Can I track spending on mobile?",
        answer:
          "Yes. MoneySpent works as a web app/PWA so you can log spends from your phone.",
      },
      {
        question: "Does MoneySpent show spending by category?",
        answer: "Yes. Category insights help you see where money goes over time.",
      },
      {
        question: "Do I need to connect my bank?",
        answer:
          "No. MoneySpent is a manual spending tracker designed for simple, private logging.",
      },
      {
        question: "Who should use a spending tracker?",
        answer:
          "Anyone who wants clearer daily money habits—students, freelancers, couples, families, and professionals tired of spreadsheet catch-up.",
      },
    ],
    related: [
      { href: "/expense-tracker", label: "Expense tracker" },
      { href: "/budget-tracker", label: "Budget tracker" },
      { href: "/guides/how-to-track-expenses", label: "How to track expenses" },
      { href: "/for/students", label: "For students" },
    ],
  },
]

export function getIntentPage(slug: string) {
  return intentPages.find((page) => page.slug === slug)
}
