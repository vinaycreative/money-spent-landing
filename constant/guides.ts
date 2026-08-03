export type GuidePage = {
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

export const guides: GuidePage[] = [
  {
    slug: "how-to-track-expenses",
    path: "/guides/how-to-track-expenses",
    title: "How to Track Expenses (Simple Daily System) | MoneySpent",
    description:
      "Learn how to track expenses daily with a simple system: log spends fast, use categories, review weekly, and stay consistent without spreadsheet burnout.",
    eyebrow: "Expense tracking guide",
    h1: "How to track expenses without quitting in a week.",
    intro:
      "Expense tracking works when the system is light enough for busy days. This guide shows a practical daily method you can keep—and how MoneySpent supports each step.",
    sections: [
      {
        title: "What does it mean to track expenses?",
        body: "Tracking expenses means recording what you spend, when you spend it, and what it was for. The goal is not perfect accounting. The goal is a trustworthy history you can review before money decisions get hard.",
      },
      {
        title: "Step 1: Capture spends the same day",
        body: "Most people fail because they wait until weekend catch-up. Log each expense within minutes if you can. A short daily habit beats a long monthly reconstruction from bank SMS and memory.",
      },
      {
        title: "Step 2: Use a small set of categories",
        body: "Start with food, transport, bills, shopping, subscriptions, and health. Too many categories create friction. You can refine later once the habit sticks.",
      },
      {
        title: "Step 3: Track accounts, not just totals",
        body: "Cash, UPI, debit, and credit often fund the same lifestyle. Logging the account helps you understand both spending and balances, not just a single “spent today” number.",
      },
      {
        title: "Step 4: Review once a week",
        body: "Every week, ask three questions: What categories grew? What was unexpected? What should change next week? Weekly reviews catch drift early—before month-end panic.",
      },
      {
        title: "How MoneySpent makes the habit easier",
        body: "MoneySpent is built for fast daily logging, category insights, and multi-account tracking. You get a free personal expense tracker that stays simple enough to use every day.",
      },
    ],
    faq: [
      {
        question: "How often should I track expenses?",
        answer:
          "Daily is best. Same-day logging takes less than a minute and prevents forgotten spends from distorting your budget.",
      },
      {
        question: "What is the easiest way to start expense tracking?",
        answer:
          "Pick five to eight categories, log every spend for one week, then review totals. Keep the system smaller than your ambition.",
      },
      {
        question: "Should I track small expenses like coffee?",
        answer:
          "Yes, if they happen often. Small recurring spends are usually what breaks monthly budgets.",
      },
      {
        question: "Is a spreadsheet enough to track expenses?",
        answer:
          "Spreadsheets can work, but daily mobile logging is harder. Purpose-built trackers reduce friction and automate category totals.",
      },
      {
        question: "Can MoneySpent help me track expenses for free?",
        answer:
          "Yes. MoneySpent includes free personal expense tracking with no credit card required to start.",
      },
      {
        question: "Do I need to connect my bank to track expenses?",
        answer:
          "No. Manual tracking is valid and often more private. MoneySpent is designed for manual logging.",
      },
    ],
    related: [
      { href: "/expense-tracker", label: "Expense tracker" },
      { href: "/budget-tracker", label: "Budget tracker" },
      { href: "/guides/monthly-budget", label: "Monthly budget guide" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    slug: "monthly-budget",
    path: "/guides/monthly-budget",
    title: "How to Make a Monthly Budget That Works | MoneySpent",
    description:
      "A practical monthly budget guide: set category limits, track real spending, review mid-month, and adjust without guilt. Free tools from MoneySpent.",
    eyebrow: "Budgeting guide",
    h1: "How to make a monthly budget you can actually follow.",
    intro:
      "A monthly budget fails when it is based on hope instead of tracked spending. Use this simple process to plan, measure, and adjust with real numbers.",
    sections: [
      {
        title: "What is a monthly budget?",
        body: "A monthly budget is a plan for how income will cover expenses, savings, and flexible spending in a given month. It works when your plan is compared against actual spending—not left as a wish list.",
      },
      {
        title: "Start from last month’s reality",
        body: "Before setting limits, look at recent spending by category. If food ran ₹12,000 last month, a ₹6,000 target will fail. Set ambitious but believable limits based on evidence.",
      },
      {
        title: "Split needs, wants, and commitments",
        body: "Group rent, utilities, and debt payments as commitments. Keep food and transport as needs with flexibility. Treat dining out, shopping, and entertainment as adjustable wants.",
      },
      {
        title: "Track through the month, not only at the end",
        body: "Mid-month reviews are where budgets are saved. If dining out is already at 80% by day 12, you can course-correct while there is still time.",
      },
      {
        title: "Use MoneySpent as your budget feedback loop",
        body: "Log expenses daily, review category totals, and adjust next week’s behavior. MoneySpent is a free budget tracker companion for people who want clarity without spreadsheet maintenance.",
      },
    ],
    faq: [
      {
        question: "How do I start a monthly budget from scratch?",
        answer:
          "List income, list fixed bills, estimate flexible categories from recent spending, then track actuals daily and adjust weekly.",
      },
      {
        question: "What percentage should I budget for needs vs wants?",
        answer:
          "Rules like 50/30/20 can help as a starting point, but your rent and city costs matter more. Use your real numbers first.",
      },
      {
        question: "Why do monthly budgets fail?",
        answer:
          "Usually because tracking is inconsistent, targets are unrealistic, or reviews happen too late in the month.",
      },
      {
        question: "Can MoneySpent replace a full budgeting spreadsheet?",
        answer:
          "For many people, yes for daily tracking and category review. You can still keep a simple plan alongside it if you like.",
      },
      {
        question: "Is MoneySpent a free monthly budget tracker?",
        answer:
          "MoneySpent offers free personal tracking that supports budgeting through expense logs and category insights.",
      },
      {
        question: "How often should I review my monthly budget?",
        answer:
          "Weekly is ideal. A 10-minute review prevents small overspending from becoming a month-end surprise.",
      },
    ],
    related: [
      { href: "/budget-tracker", label: "Budget tracker" },
      { href: "/guides/zero-based-budget", label: "Zero-based budget" },
      { href: "/guides/envelope-budget", label: "Envelope budget" },
      { href: "/for/families", label: "For families" },
    ],
  },
  {
    slug: "zero-based-budget",
    path: "/guides/zero-based-budget",
    title: "Zero-Based Budget Explained (With Simple Steps) | MoneySpent",
    description:
      "Learn zero-based budgeting: give every rupee a job, track actual spending, and adjust categories monthly. A clear beginner guide with MoneySpent.",
    eyebrow: "Budget method",
    h1: "Zero-based budgeting, explained simply.",
    intro:
      "In a zero-based budget, income minus planned expenses and savings equals zero. Every rupee gets a job—before the month spends it for you.",
    sections: [
      {
        title: "What is a zero-based budget?",
        body: "Zero-based budgeting means you allocate your full income across bills, needs, wants, debt payments, and savings until nothing is unassigned. “Zero” does not mean broke. It means intentional.",
      },
      {
        title: "Why people use zero-based budgeting",
        body: "It reduces leftover-money drift. Instead of wondering where surplus went, you decide in advance whether extra income goes to savings, debt, or planned spending.",
      },
      {
        title: "How to build a zero-based budget in 5 steps",
        body: "1) Write down expected income. 2) List fixed bills. 3) Assign money to flexible categories. 4) Assign the remainder to savings or debt. 5) Track actual spending and reallocate when life changes.",
      },
      {
        title: "The tracking requirement most guides skip",
        body: "A zero-based plan collapses without expense tracking. If categories are not updated with real spends, the plan becomes fiction by week two.",
      },
      {
        title: "Using MoneySpent with a zero-based plan",
        body: "Keep your allocation plan simple, then use MoneySpent to log expenses and review category totals. Fast daily tracking is what makes zero-based budgeting sustainable.",
      },
    ],
    faq: [
      {
        question: "Does zero-based budgeting mean I spend everything?",
        answer:
          "No. Savings and debt payments are valid “jobs” for money. Zero means fully assigned, not fully spent on lifestyle.",
      },
      {
        question: "Is zero-based budgeting good for irregular income?",
        answer:
          "It can be, if you budget from a conservative income estimate and reallocate when extra payments arrive.",
      },
      {
        question: "How is zero-based different from 50/30/20?",
        answer:
          "50/30/20 uses percentage buckets. Zero-based assigns every unit of income to specific categories until none is unassigned.",
      },
      {
        question: "Can beginners use zero-based budgeting?",
        answer:
          "Yes, if they keep categories few and review weekly. Complexity is optional; intention is the point.",
      },
      {
        question: "Can MoneySpent do zero-based budgeting automatically?",
        answer:
          "MoneySpent helps you track spending and category totals. You can run a zero-based plan alongside those records.",
      },
      {
        question: "What tools do I need for zero-based budgeting?",
        answer:
          "A simple plan plus consistent expense tracking. Many people use MoneySpent for the tracking layer.",
      },
    ],
    related: [
      { href: "/guides/monthly-budget", label: "Monthly budget" },
      { href: "/guides/envelope-budget", label: "Envelope budget" },
      { href: "/budget-tracker", label: "Budget tracker" },
      { href: "/expense-tracker", label: "Expense tracker" },
    ],
  },
  {
    slug: "envelope-budget",
    path: "/guides/envelope-budget",
    title: "Envelope Budgeting System Explained | MoneySpent",
    description:
      "Learn the envelope budgeting method: assign spending limits by category, track real expenses, and stop overspending. Practical guide with MoneySpent.",
    eyebrow: "Budget method",
    h1: "Envelope budgeting for modern spending.",
    intro:
      "Envelope budgeting gives each category a fixed spending limit. When the envelope is empty, you stop—or deliberately move money from another envelope.",
    sections: [
      {
        title: "What is the envelope budget system?",
        body: "Traditionally, people put cash into labeled envelopes for groceries, transport, and fun. Digitally, the same idea uses category limits. The psychology stays useful: constrained categories reduce mindless overspending.",
      },
      {
        title: "How to set envelope amounts",
        body: "Use last month’s spending as a baseline. Set envelopes for flexible categories first—food, shopping, entertainment—then protect fixed bills and savings outside those envelopes.",
      },
      {
        title: "What to do when an envelope runs out",
        body: "You have three honest options: stop spending in that category, move money from another envelope, or pause and revise next month’s plan. Hidden credit-card float breaks the system.",
      },
      {
        title: "Digital envelopes still need daily logging",
        body: "If expenses are not recorded, envelope balances are imaginary. The method only works with a tracker you will actually open after every spend.",
      },
      {
        title: "Pair envelopes with MoneySpent",
        body: "Decide your category envelopes, then log expenses in MoneySpent. Category insights show whether you are still inside each envelope before month end.",
      },
    ],
    faq: [
      {
        question: "Do I need physical cash envelopes?",
        answer:
          "No. Digital category limits work the same way if you track spending consistently.",
      },
      {
        question: "Is envelope budgeting good for couples?",
        answer:
          "Yes. Shared categories like groceries and dining out become clearer when both people can see remaining room.",
      },
      {
        question: "What categories should have envelopes?",
        answer:
          "Start with flexible ones: food, transport, shopping, entertainment, and personal spending. Keep rent and utilities as fixed commitments.",
      },
      {
        question: "Can MoneySpent create envelopes automatically?",
        answer:
          "MoneySpent helps you track category spending so you can manage envelope-style limits with real data.",
      },
      {
        question: "How is envelope budgeting different from zero-based budgeting?",
        answer:
          "They often overlap. Zero-based focuses on assigning all income; envelopes focus on category spending limits. Many people combine both.",
      },
      {
        question: "Is envelope budgeting beginner-friendly?",
        answer:
          "Yes, especially with a small number of categories and weekly check-ins.",
      },
    ],
    related: [
      { href: "/guides/zero-based-budget", label: "Zero-based budget" },
      { href: "/guides/monthly-budget", label: "Monthly budget" },
      { href: "/for/couples", label: "For couples" },
      { href: "/budget-tracker", label: "Budget tracker" },
    ],
  },
  {
    slug: "expense-categories",
    path: "/guides/expense-categories",
    title: "Expense Categories List for Personal Budgets | MoneySpent",
    description:
      "A practical expense categories list for personal finance: food, bills, transport, subscriptions, and more—plus how to keep categories simple in MoneySpent.",
    eyebrow: "Categories guide",
    h1: "Expense categories that stay useful.",
    intro:
      "Good expense categories make reviews faster. Too many categories make tracking feel like paperwork. Use this practical list as a starting point.",
    sections: [
      {
        title: "Why expense categories matter",
        body: "Categories turn a transaction list into decisions. “I spent ₹42,000” is vague. “Food ₹14,000, transport ₹6,000, shopping ₹9,000” tells you what to change.",
      },
      {
        title: "Core personal expense categories",
        body: "Most people can start with: Housing, Utilities, Food & Groceries, Transport, Health, Shopping, Subscriptions, Entertainment, Education, Personal Care, and Miscellaneous.",
      },
      {
        title: "Optional categories worth adding later",
        body: "Debt payments, gifts, travel, kids/family, business tools, and savings transfers can be added once the core habit is stable.",
      },
      {
        title: "Rules for keeping categories clean",
        body: "Prefer fewer categories over perfect taxonomy. Merge rarely used ones. Avoid creating a new category for one-off spends unless they will recur.",
      },
      {
        title: "How MoneySpent uses categories",
        body: "MoneySpent organizes transactions by category so you can review totals and trends quickly. That structure supports both expense tracking and budgeting decisions.",
      },
    ],
    faq: [
      {
        question: "How many expense categories should I use?",
        answer:
          "Eight to twelve is a strong start for most personal budgets. Add more only when reviews feel unclear.",
      },
      {
        question: "Should subscriptions be their own category?",
        answer:
          "Yes, if you have several. Grouping them reveals silent monthly costs that are easy to forget.",
      },
      {
        question: "Is Miscellaneous a bad category?",
        answer:
          "It is fine as a small overflow. If it grows large, split the recurring spends into clearer categories.",
      },
      {
        question: "Can couples share the same expense categories?",
        answer:
          "Yes. Shared category names make household reviews easier, even if accounts differ.",
      },
      {
        question: "Does MoneySpent let me customize categories?",
        answer:
          "Yes. You can organize spending into categories that match your life and review them over time.",
      },
      {
        question: "What is the best category system for beginners?",
        answer:
          "Start simple: Food, Transport, Bills, Shopping, Fun, Health, and Other. Expand only after two consistent weeks of tracking.",
      },
    ],
    related: [
      { href: "/guides/how-to-track-expenses", label: "How to track expenses" },
      { href: "/expense-tracker", label: "Expense tracker" },
      { href: "/guides/subscription-tracking", label: "Subscription tracking" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    slug: "subscription-tracking",
    path: "/guides/subscription-tracking",
    title: "How to Track Subscriptions and Recurring Expenses | MoneySpent",
    description:
      "Learn how to track subscriptions and recurring expenses, spot silent monthly costs, and keep personal spending under control with MoneySpent.",
    eyebrow: "Subscriptions guide",
    h1: "Track subscriptions before they quietly own your budget.",
    intro:
      "Streaming, cloud storage, fitness apps, and software seats are easy to ignore individually. Together, they can rival a major bill. This guide shows how to track them.",
    sections: [
      {
        title: "Why subscription tracking matters",
        body: "Recurring charges renew whether you use the service or not. Without a clear list and monthly total, unused subscriptions become an invisible lifestyle tax.",
      },
      {
        title: "Build a complete subscription inventory",
        body: "Check bank/UPI statements for the last 60–90 days and list every recurring merchant. Include annual plans—divide by 12 so they show up in monthly thinking.",
      },
      {
        title: "Categorize and total them monthly",
        body: "Put subscriptions in their own category (or under Software/Entertainment). A single monthly total makes cancel/keep decisions faster.",
      },
      {
        title: "Set a review ritual",
        body: "Once a month, ask: Did I use this? Is there a cheaper plan? Can this wait? Canceling two unused tools often funds something you care about more.",
      },
      {
        title: "Track subscription spend in MoneySpent",
        body: "Log subscription payments as they hit, keep them categorized, and review the category total anytime. MoneySpent helps recurring costs stay visible—not forgotten.",
      },
    ],
    faq: [
      {
        question: "How do I find all my subscriptions?",
        answer:
          "Review recent bank and UPI statements for repeating merchants, and check email receipts for annual renewals.",
      },
      {
        question: "Should annual subscriptions count in a monthly budget?",
        answer:
          "Yes. Divide the annual cost by 12 so the real monthly burden is visible.",
      },
      {
        question: "What is a healthy subscription budget?",
        answer:
          "There is no universal number. Track the total first; many people are surprised and cut unused tools immediately.",
      },
      {
        question: "Can MoneySpent remind me about subscription renewals?",
        answer:
          "MoneySpent helps you log and categorize subscription spending so renewals stay visible in your history and category totals.",
      },
      {
        question: "Is subscription tracking part of expense tracking?",
        answer:
          "Yes. Subscriptions are recurring expenses. Treating them clearly prevents them from hiding inside shopping or miscellaneous.",
      },
      {
        question: "Can students and freelancers use this method?",
        answer:
          "Absolutely. Students often stack media apps; freelancers stack software. Both benefit from a monthly subscription total.",
      },
    ],
    related: [
      { href: "/guides/expense-categories", label: "Expense categories" },
      { href: "/expense-tracker", label: "Expense tracker" },
      { href: "/for/developers", label: "For developers" },
      { href: "/for/content-creators", label: "For creators" },
    ],
  },
  {
    slug: "personal-finance",
    path: "/guides/personal-finance",
    title: "Personal Finance Basics: Track, Budget, Improve | MoneySpent",
    description:
      "Personal finance basics for beginners: track expenses, build a simple budget, review weekly, and improve savings without complex investing jargon.",
    eyebrow: "Personal finance",
    h1: "Personal finance basics that actually change spending.",
    intro:
      "You do not need advanced investing knowledge to improve your money life. Start with visibility: track spending, set a simple plan, and review often.",
    sections: [
      {
        title: "What personal finance means day to day",
        body: "Personal finance is how you earn, spend, save, and protect money. For most people, the highest-leverage starting point is understanding spending—because you cannot improve what you cannot see.",
      },
      {
        title: "The three habits that matter first",
        body: "1) Track expenses. 2) Keep a simple monthly budget. 3) Review weekly. Investing and optimization matter later. These three habits prevent avoidable stress now.",
      },
      {
        title: "Build an emergency buffer while you track",
        body: "As tracking reveals surplus or leaks, redirect savings to a small emergency buffer. Even modest consistency beats irregular “I’ll save what’s left” intentions.",
      },
      {
        title: "Avoid tools that create guilt without clarity",
        body: "Some finance apps overwhelm beginners with net-worth charts and product upsells. Beginners usually need calm expense clarity first.",
      },
      {
        title: "How MoneySpent fits beginner personal finance",
        body: "MoneySpent is a simple personal finance tracker for expenses, budgets, accounts, and spending insights—free for personal use, private by design, and built for daily habits.",
      },
    ],
    faq: [
      {
        question: "What is the first step in personal finance?",
        answer:
          "Track your spending for at least two weeks. Visibility comes before optimization.",
      },
      {
        question: "Do I need to invest before I budget?",
        answer:
          "No. Build basic spending awareness and a simple buffer first. Investing works better on top of stable habits.",
      },
      {
        question: "Is MoneySpent a personal finance app?",
        answer:
          "Yes. MoneySpent helps you track expenses, income, accounts, and spending patterns in one clean workspace.",
      },
      {
        question: "How long before tracking improves my finances?",
        answer:
          "Many people notice better decisions within the first month because category totals make tradeoffs obvious.",
      },
      {
        question: "Can beginners use MoneySpent without finance knowledge?",
        answer:
          "Yes. It is designed for simple daily tracking, not complex accounting.",
      },
      {
        question: "Is personal finance different from budgeting?",
        answer:
          "Budgeting is one part of personal finance. Personal finance also includes saving, debt decisions, and longer-term planning.",
      },
    ],
    related: [
      { href: "/guides/how-to-track-expenses", label: "How to track expenses" },
      { href: "/guides/monthly-budget", label: "Monthly budget" },
      { href: "/budget-tracker", label: "Budget tracker" },
      { href: "/about", label: "About MoneySpent" },
    ],
  },
]

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug)
}
