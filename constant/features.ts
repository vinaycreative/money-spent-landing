import type { ContentBlock } from "@/components/landing/UseCaseContentSection"

export type FeaturePage = {
  slug: string
  path: string
  navLabel: string
  title: string
  description: string
  eyebrow: string
  h1: string
  intro: string
  sections: ContentBlock[]
  faq: { question: string; answer: string }[]
  related: { href: string; label: string }[]
}

export const features: FeaturePage[] = [
  {
    slug: "daily-logging",
    path: "/features/daily-logging",
    navLabel: "Daily logging",
    title: "Fast Daily Expense Logging | MoneySpent",
    description:
      "Log expenses and income in seconds with MoneySpent. Fast daily expense logging designed for real life—no six-field forms, no spreadsheet catch-up.",
    eyebrow: "Feature · Daily logging",
    h1: "Log expenses as fast as you spend them.",
    intro:
      "Most expense apps die because logging takes too long. MoneySpent is built around one job: capture amount, category, merchant, and account in a few taps—so daily tracking becomes a habit instead of homework.",
    sections: [
      {
        title: "Why fast expense logging matters more than “perfect” budgeting",
        body: "A beautiful budget plan is useless if you stop recording spends after three days. Research on habit formation and personal finance tools points to the same pattern: people abandon trackers when every purchase becomes a form. The winning system is the one you can use after buying coffee, paying an auto, or renewing a subscription—without opening a laptop.\n\nMoneySpent treats speed as a first-class feature. Instead of asking you to fill six disconnected fields, daily logging is designed to feel like writing a short note: what you spent, on what, where, and from which account.",
        callout:
          "If logging takes longer than the purchase decision, most people quit. Speed is not a nice-to-have—it is the foundation of every budget that survives past week one.",
      },
      {
        title: "What you can capture in one quick entry",
        body: "A useful expense log needs enough structure to review later, without so much structure that you avoid using it. MoneySpent focuses on the fields that actually power insights:",
        bullets: [
          "Amount — the number that updates balances and category totals",
          "Category — food, travel, bills, shopping, subscriptions, health, and more",
          "Merchant or note — so you remember what the spend was for",
          "Account — cash, bank, UPI wallet, or card",
          "Income or expense type — so cash flow stays honest",
        ],
      },
      {
        title: "A practical daily logging routine that sticks",
        body: "You do not need to become a finance obsessive. You need a lightweight ritual that fits real life. Use this routine for two weeks and most people already see clearer spending patterns.",
        steps: [
          {
            title: "Log in the moment (or within the hour)",
            body: "Open MoneySpent right after a payment. Same-day logging prevents the weekend reconstruction problem where half your spends are forgotten.",
          },
          {
            title: "Keep categories small at first",
            body: "Start with 6–10 categories. Perfect taxonomy can wait. Consistency beats precision when you are building the habit.",
          },
          {
            title: "Review today’s total once",
            body: "Before bed or after dinner, glance at today’s spend. That 20-second check is often enough to catch delivery, transport, or impulse shopping early.",
          },
        ],
      },
      {
        title: "Who this feature is built for",
        body: "Fast daily logging helps anyone who currently tracks money in Notes, WhatsApp, or memory—and keeps failing. It is especially useful for students with many small UPI spends, freelancers mixing business and personal costs, and couples who need a shared household trail without spreadsheet arguments.",
        bullets: [
          "People who abandon expense apps within a week",
          "Anyone with frequent small purchases (food, transport, snacks)",
          "Manual trackers who do not want bank login complexity",
          "Users who want budgeting later, but visibility now",
        ],
      },
      {
        title: "How MoneySpent stays faster than spreadsheets",
        body: "Spreadsheets are powerful, but daily mobile entry is rarely pleasant. Finding the right tab, entering columns, and fixing formulas creates friction. MoneySpent removes that overhead: balances and category totals update as you log, so the “reporting” layer is already done when you want to review the week.\n\nThat does not mean spreadsheets are useless. Many people still export for annual planning. The difference is where the daily habit lives—MoneySpent is optimized for the moment of spending, not the weekend catch-up session.",
      },
    ],
    faq: [
      {
        question: "How long does it take to log an expense in MoneySpent?",
        answer:
          "Most everyday expenses can be logged in a few taps—amount, category, merchant, and account—without filling a long form.",
      },
      {
        question: "Can I log income as quickly as expenses?",
        answer:
          "Yes. You can add income entries with the same fast flow so salary, freelance payments, and transfers stay in one place.",
      },
      {
        question: "Do I need to connect my bank for daily logging?",
        answer:
          "No. MoneySpent is a manual tracker. You add transactions yourself, which keeps setup simple and private.",
      },
      {
        question: "Is fast logging accurate enough for budgeting?",
        answer:
          "Yes—for personal budgets, consistent same-day logging is usually more accurate than delayed spreadsheet reconstruction.",
      },
      {
        question: "Can students use daily logging for pocket money?",
        answer:
          "Absolutely. Small frequent spends are exactly where fast logging helps most.",
      },
      {
        question: "Is MoneySpent free for daily expense tracking?",
        answer:
          "Yes. Personal tracking is free forever, with no credit card required to start.",
      },
    ],
    related: [
      { href: "/features/today-view", label: "Today at a glance" },
      { href: "/features/category-insights", label: "Category insights" },
      { href: "/expense-tracker", label: "Expense tracker" },
      { href: "/guides/how-to-track-expenses", label: "How to track expenses" },
    ],
  },
  {
    slug: "today-view",
    path: "/features/today-view",
    navLabel: "Today view",
    title: "Today Spending View & Daily Dashboard | MoneySpent",
    description:
      "See today’s spending at a glance with MoneySpent. A daily expense dashboard to move between dates, review transactions, and stay aware before month-end surprises.",
    eyebrow: "Feature · Today view",
    h1: "Open to today. Know what you spent.",
    intro:
      "Month-end reviews arrive too late. MoneySpent’s today view puts the day that matters first—so you can see spend, move between dates, and course-correct while the month is still alive.",
    sections: [
      {
        title: "Why a “today” dashboard beats a buried transaction list",
        body: "Many finance apps dump you into charts, net worth widgets, or last month’s archive. That feels impressive and still fails day-to-day money control. The question people actually ask is simpler: “How much did I spend today?”\n\nMoneySpent answers that immediately. Your day opens with today’s total, transaction count, and the list of what already happened—so awareness becomes automatic, not a weekend project.",
        callout:
          "Budgets usually break mid-month, not on the first. A daily view gives you feedback while you still have time to change behavior.",
      },
      {
        title: "What you see in the today view",
        body: "The today experience is intentionally focused. Instead of competing widgets, you get the signals that change decisions:",
        bullets: [
          "Today’s total spend — a clear number, not a puzzle",
          "Transaction list — coffee, groceries, transfers, income",
          "Date navigation — jump to yesterday or any day you need",
          "Quick actions — add expense or income without leaving context",
          "Account-aware history — see what was paid from cash, UPI, or cards",
        ],
      },
      {
        title: "How to use the today view to stay on budget",
        body: "Treat today view as a steering wheel, not a report. A short daily check is enough for most people.",
        steps: [
          {
            title: "Check the number before your next discretionary purchase",
            body: "If today’s food spend is already high, the next delivery order becomes a conscious choice—not an autopilot tap.",
          },
          {
            title: "Scan for forgotten spends",
            body: "UPI and card payments are easy to forget. A quick scan of today’s list catches missing entries while memory is fresh.",
          },
          {
            title: "Compare yesterday when a day feels “off”",
            body: "Jump back one day. Patterns become obvious: weekend food spikes, commute clusters, or subscription renewals.",
          },
        ],
      },
      {
        title: "Daily awareness for real households",
        body: "Students use today view to protect pocket money. Couples use it to avoid “who spent what?” arguments. Freelancers use it to notice when business tools and personal spends collide in the same week.\n\nBecause MoneySpent supports multiple accounts, today’s list can reflect cash, wallets, and cards together—closer to how people actually pay.",
      },
      {
        title: "Today view vs month-end analytics",
        body: "Month-end analytics are still useful for planning. They are weak for prevention. If you only look at totals after the money is gone, every insight becomes a post-mortem. MoneySpent pairs daily awareness with category insights so you get both: short-loop feedback now, deeper patterns when you need them.",
      },
    ],
    faq: [
      {
        question: "What is the today view in MoneySpent?",
        answer:
          "It is the daily dashboard that shows today’s spending total, transactions, and quick actions to add expense or income.",
      },
      {
        question: "Can I view spending for previous days?",
        answer:
          "Yes. You can move between dates to review yesterday or any day in your history.",
      },
      {
        question: "Does today view include income?",
        answer:
          "Yes. Income and expenses can appear in your daily history so cash flow stays clear.",
      },
      {
        question: "Is today view useful for budgeting?",
        answer:
          "Yes. Daily visibility helps you adjust spending before a monthly budget is already broken.",
      },
      {
        question: "Can couples use today view for household spending?",
        answer:
          "Yes. A shared daily trail makes household spending conversations factual instead of guesswork.",
      },
      {
        question: "Is MoneySpent free to use the daily dashboard?",
        answer: "Yes. Personal tracking—including the today view—is free forever.",
      },
    ],
    related: [
      { href: "/features/daily-logging", label: "Daily logging" },
      { href: "/features/searchable-history", label: "Searchable history" },
      { href: "/budget-tracker", label: "Budget tracker" },
      { href: "/guides/monthly-budget", label: "Monthly budget guide" },
    ],
  },
  {
    slug: "category-insights",
    path: "/features/category-insights",
    navLabel: "Category insights",
    title: "Spending Category Insights & Trends | MoneySpent",
    description:
      "See where your money goes with MoneySpent category insights. Review spending totals, trends, and transactions by food, bills, travel, shopping, and more.",
    eyebrow: "Feature · Category insights",
    h1: "See where money went—by category, not guesswork.",
    intro:
      "A transaction list tells you what happened. Category insights tell you what to change. MoneySpent turns everyday logs into clear totals and trends you can act on.",
    sections: [
      {
        title: "What category insights actually answer",
        body: "“I spent too much” is not a decision. “Food was ₹14,200 and delivery alone drove most of it” is a decision. Category insights convert raw expenses into questions you can answer:\n\nHow much went to food versus transport? Are subscriptions quietly matching a utility bill? Did shopping spike only on one weekend? Without categories, you are stuck scrolling bank SMS and estimating from memory.",
        callout:
          "Category clarity is the bridge between expense tracking and budgeting. Totals create accountability; trends create better next-week plans.",
      },
      {
        title: "Categories that work for real life",
        body: "MoneySpent supports practical personal categories so reviews stay useful without becoming accounting homework. Common starting sets include:",
        bullets: [
          "Food & groceries — home cooking vs delivery patterns",
          "Transport — fuel, metro, autos, ride apps",
          "Bills & utilities — rent-adjacent recurring costs",
          "Subscriptions — streaming, cloud, software, memberships",
          "Shopping — clothes, home, impulse buys",
          "Health — medicine, clinics, wellness",
          "Travel — trips, stays, local holiday spends",
          "Personal / miscellaneous — the overflow you should keep small",
        ],
      },
      {
        title: "How to read category insights without overthinking",
        body: "You do not need a finance degree. Use a simple weekly review.",
        steps: [
          {
            title: "Pick your top three categories",
            body: "Ignore the long tail first. Food, transport, and shopping usually explain most lifestyle variance.",
          },
          {
            title: "Ask what changed versus last week",
            body: "A spike is information. Was it guests, travel, a sale, or drift? Name the cause before you set a harsher limit.",
          },
          {
            title: "Choose one adjustment",
            body: "Cut one recurring leak or set one soft cap. Category insights work when they produce a single next action—not a guilt spiral.",
          },
        ],
      },
      {
        title: "Category insights for freelancers, couples, and students",
        body: "Freelancers can separate software and client costs from personal food spend. Couples can review groceries and dining out with shared visibility. Students can see whether campus food and transport are consuming pocket money faster than expected.\n\nBecause every logged expense feeds the same system, insights improve automatically as your daily logging habit improves—no pivot tables required.",
      },
      {
        title: "Why this beats Notes apps and vague bank totals",
        body: "Bank apps show merchants. Notes apps show text. Neither gives clean category trends for personal budgeting. MoneySpent sits in the middle: fast enough to log daily, structured enough to review by category, private enough that your spending habits are not the product.",
      },
    ],
    faq: [
      {
        question: "What are category insights in MoneySpent?",
        answer:
          "They are breakdowns of your spending by category—so you can see totals, patterns, and related transactions clearly.",
      },
      {
        question: "Can I customize spending categories?",
        answer:
          "Yes. You can organize transactions into categories that match your life and refine them as your habit grows.",
      },
      {
        question: "Do category insights help with budgeting?",
        answer:
          "Yes. Category totals show where a budget is leaking so you can adjust before month end.",
      },
      {
        question: "Can I review transactions inside a category?",
        answer:
          "Yes. Insights are useful because you can move from a category total into the matching transactions.",
      },
      {
        question: "Is category tracking useful for Indian UPI spending?",
        answer:
          "Yes. Frequent small UPI spends become understandable when grouped into food, transport, and other categories.",
      },
      {
        question: "Is MoneySpent free for category insights?",
        answer: "Yes. Personal tracking includes category insights at no cost.",
      },
    ],
    related: [
      { href: "/features/daily-logging", label: "Daily logging" },
      { href: "/features/accounts", label: "All your accounts" },
      { href: "/guides/expense-categories", label: "Expense categories guide" },
      { href: "/guides/subscription-tracking", label: "Subscription tracking" },
    ],
  },
  {
    slug: "searchable-history",
    path: "/features/searchable-history",
    navLabel: "Search history",
    title: "Searchable Expense History & Filters | MoneySpent",
    description:
      "Search and filter expense history in MoneySpent by date, account, or type. Find transactions fast in list or calendar views—without spreadsheet digging.",
    eyebrow: "Feature · Searchable history",
    h1: "Find any transaction without digging.",
    intro:
      "Your money history only helps if you can retrieve it. MoneySpent gives you searchable, filterable expense history—so “what did I pay?” takes seconds, not a scroll marathon.",
    sections: [
      {
        title: "Why searchable history is a core expense-tracker feature",
        body: "People search their money history for practical reasons: reimbursements, disputed charges, subscription renewals, shared household costs, tax prep, or simple curiosity about a merchant. If history is only a long chronological dump, the app becomes a graveyard of data.\n\nMoneySpent treats history as something you will query. Search and filters turn logged expenses into an answer engine for everyday money questions.",
        callout:
          "Logging builds the archive. Search makes the archive useful. Without retrieval, tracking becomes storage theater.",
      },
      {
        title: "Ways to explore your spending history",
        body: "Different questions need different views. MoneySpent supports practical ways to slice your records:",
        bullets: [
          "Search by merchant, note, or keyword when you remember the name but not the date",
          "Filter by date range for trips, pay cycles, or monthly reviews",
          "Filter by account to isolate card, cash, or wallet activity",
          "Filter by type when you only want expenses or only income",
          "Switch list or calendar perspectives depending on how you think",
        ],
      },
      {
        title: "Common real-world searches this unlocks",
        body: "Searchable history is not an enterprise feature—it is everyday utility.",
        steps: [
          {
            title: "Find a reimbursement",
            body: "Need the exact client dinner or travel cost? Search the merchant and pull the amount with date context.",
          },
          {
            title: "Audit a subscription",
            body: "Filter recent months for a streaming or software name and confirm whether you are still paying.",
          },
          {
            title: "Settle household questions",
            body: "Couples can search groceries, rent contributions, or shared dinners instead of reconstructing from memory.",
          },
        ],
      },
      {
        title: "History that stays portable",
        body: "A searchable in-app history is powerful, but lock-in is not. MoneySpent supports keeping records portable with import/export tools so your history remains yours—whether you are switching devices, sharing with an accountant, or doing deeper spreadsheet analysis later.",
      },
      {
        title: "Searchable history vs bank statement scrolling",
        body: "Bank statements are complete for bank rails and incomplete for cash. They also mix noise with signal. MoneySpent history is categorized, account-aware, and focused on personal money questions. That makes retrieval faster for budgeting and everyday clarity—even though it is a manual system by design.",
      },
    ],
    faq: [
      {
        question: "Can I search past expenses in MoneySpent?",
        answer:
          "Yes. You can search your transaction history to find merchants, notes, and specific spends quickly.",
      },
      {
        question: "Can I filter by date or account?",
        answer:
          "Yes. Filters help you narrow history by date, account, or transaction type.",
      },
      {
        question: "Is there a calendar view for expenses?",
        answer:
          "MoneySpent supports reviewing history in list or calendar-style perspectives so you can browse the way that fits the question.",
      },
      {
        question: "Can searchable history help with tax or accountant prep?",
        answer:
          "It helps you find and organize records faster. MoneySpent is not tax software, but clean history makes handoff easier.",
      },
      {
        question: "Does search work for income too?",
        answer:
          "Yes. Income and expenses live in the same history system, so payments and spends are both retrievable.",
      },
      {
        question: "Is searchable history included in the free plan?",
        answer: "Yes. Personal tracking includes history search and filters.",
      },
    ],
    related: [
      { href: "/features/today-view", label: "Today view" },
      { href: "/features/control", label: "Built for control" },
      { href: "/expense-tracker", label: "Expense tracker" },
      { href: "/compare/spreadsheet", label: "vs Spreadsheets" },
    ],
  },
  {
    slug: "accounts",
    path: "/features/accounts",
    navLabel: "Accounts",
    title: "Track Multiple Accounts & Balances | MoneySpent",
    description:
      "Track cash, bank, wallet, and credit accounts in one place with MoneySpent. Balances update as you log expenses and income—clear personal finance without bank linking.",
    eyebrow: "Feature · Accounts",
    h1: "All your accounts, one clear picture.",
    intro:
      "Real spending jumps between cash, UPI, debit cards, and credit. MoneySpent tracks multiple accounts side by side and updates balances as you log—so your money picture matches real life.",
    sections: [
      {
        title: "Why multi-account tracking fixes broken budgets",
        body: "If you only track one account, your budget is a partial story. People pay rent from a bank account, snacks by UPI, travel on a credit card, and weekends in cash. Looking at a single balance creates false confidence.\n\nMoneySpent lets you create the accounts you actually use, then assign every expense or income entry to the right one. Category insights still roll up across accounts, while balances stay honest per account.",
        callout:
          "Budgets fail when the map ignores half the terrain. Multi-account tracking makes the map match how you pay.",
      },
      {
        title: "Account types people set up in MoneySpent",
        body: "You can keep the setup simple or detailed. Common account setups include:",
        bullets: [
          "Cash — still common for local spends and small purchases",
          "Primary bank account — salary and major bills",
          "UPI wallets — fast everyday payments",
          "Credit cards — delayed cash impact that still needs tracking",
          "Joint household account — rent, groceries, utilities",
          "Business or freelance account — for self-employed separation",
        ],
      },
      {
        title: "How balances stay clear without bank login",
        body: "MoneySpent is intentionally manual. That is a feature for privacy and simplicity: no banking credentials, no fragile aggregators, no surprise sync failures. When you add income or expenses, the related account balance updates so your records stay coherent.",
        steps: [
          {
            title: "Create the accounts you use weekly",
            body: "Skip unused accounts. Start with the 2–4 payment methods that cover most of your life.",
          },
          {
            title: "Assign every transaction to an account",
            body: "This takes one extra tap and prevents “mystery balance” problems later.",
          },
          {
            title: "Review account balances during weekly check-ins",
            body: "Combine account balances with category insights for both cash position and spending behavior.",
          },
        ],
      },
      {
        title: "Personal and household use cases",
        body: "Students can track cash plus UPI. Couples can keep a joint account beside personal cards. Freelancers can separate business tools from personal dining. Travelers can isolate a trip card so vacation spend does not contaminate the home budget narrative.\n\nIn every case, the value is the same: one workspace that reflects fragmented real-world payments.",
      },
      {
        title: "Accounts feature vs bank aggregation apps",
        body: "Bank aggregation can be convenient and also heavy: permissions, broken connections, and privacy tradeoffs. MoneySpent chooses a quieter path. Manual multi-account tracking is slightly more effort per entry and much less operational drama—especially for people who want personal clarity, not a full wealth dashboard.",
      },
    ],
    faq: [
      {
        question: "Can MoneySpent track multiple bank accounts?",
        answer:
          "Yes. You can create multiple accounts—cash, bank, wallet, and cards—and log transactions against each one.",
      },
      {
        question: "Do account balances update automatically?",
        answer:
          "Balances update as you add income or expenses to an account, so records stay clearer over time.",
      },
      {
        question: "Do I need to link my bank to track accounts?",
        answer:
          "No. MoneySpent is a manual tracker and does not require bank login credentials.",
      },
      {
        question: "Can couples track a joint account?",
        answer:
          "Yes. Create a joint account for shared bills and keep personal accounts alongside it.",
      },
      {
        question: "Can freelancers separate business and personal accounts?",
        answer:
          "Yes. Dedicated accounts make business overhead and personal spending easier to review.",
      },
      {
        question: "Is multi-account tracking free?",
        answer: "Yes. Personal tracking includes multiple accounts at no cost.",
      },
    ],
    related: [
      { href: "/features/category-insights", label: "Category insights" },
      { href: "/features/daily-logging", label: "Daily logging" },
      { href: "/for/couples", label: "For couples" },
      { href: "/for/freelancers", label: "For freelancers" },
    ],
  },
  {
    slug: "control",
    path: "/features/control",
    navLabel: "Privacy & control",
    title: "Private Expense Tracker Controls | MoneySpent",
    description:
      "Stay in control with MoneySpent: hide balances, customize categories and themes, and import/export your data. A private personal finance tracker without ads or lock-in.",
    eyebrow: "Feature · Control",
    h1: "Your money data should stay under your control.",
    intro:
      "Personal finance is sensitive. MoneySpent gives you practical controls—hide balances when you need privacy, customize the workspace, and export records so your history is never trapped.",
    sections: [
      {
        title: "Privacy is a product feature, not a slogan",
        body: "Many finance apps are funded by attention: upsells, ads, or data-driven growth loops. That creates a conflict with the calm people need when checking balances. MoneySpent is designed as a quieter personal workspace—focused on clarity, not engagement hacks.\n\nControl features exist for real situations: checking your budget on a train, sharing a screen in a meeting, or simply not wanting sensitive numbers visible to everyone nearby.",
        callout:
          "Trust compounds. When people believe a money app respects them, they log more honestly—and honest logs create better financial decisions.",
      },
      {
        title: "Controls that matter in daily use",
        body: "MoneySpent focuses on practical ownership tools instead of bloated admin panels:",
        bullets: [
          "Hide balances on demand when numbers should stay off curious screens",
          "Customize categories so the system matches your life",
          "Theme controls for a workspace you actually like opening",
          "Import and export so records remain portable",
          "No ads interrupting your review sessions",
          "No credit card wall to start personal tracking",
        ],
      },
      {
        title: "A simple ownership checklist for your money data",
        body: "Use these steps when you set up MoneySpent—or when you audit any finance tool.",
        steps: [
          {
            title: "Decide what must stay private on screen",
            body: "If you often use your phone in public, practice hiding balances before sensitive reviews.",
          },
          {
            title: "Customize categories early",
            body: "A system that uses your words is easier to keep. Rename and refine categories after your first week of logging.",
          },
          {
            title: "Export a backup on a schedule",
            body: "Monthly exports are cheap insurance. Portability is part of control.",
          },
        ],
      },
      {
        title: "Who values control the most",
        body: "Privacy-conscious professionals, couples sharing a device occasionally, freelancers with mixed records, and anyone tired of finance apps that feel like a storefront. If you want spending clarity without becoming a product in someone else’s funnel, control features are not optional—they are the product.",
      },
      {
        title: "Control without complexity",
        body: "Some apps bury ownership behind enterprise settings. MoneySpent keeps the philosophy simple: track clearly, stay private, leave whenever you want. That combination supports long-term habits better than flashy dashboards that demand constant attention.",
      },
    ],
    faq: [
      {
        question: "Can I hide account balances in MoneySpent?",
        answer:
          "Yes. You can hide balances on demand so sensitive numbers stay off shared or public screens.",
      },
      {
        question: "Can I export my MoneySpent data?",
        answer:
          "Yes. Import/export tools help keep your records portable so you are not locked in.",
      },
      {
        question: "Does MoneySpent show ads?",
        answer:
          "No. MoneySpent is designed as an ad-free personal tracking experience.",
      },
      {
        question: "Can I customize categories and themes?",
        answer:
          "Yes. Customize categories and workspace preferences so the app fits how you track money.",
      },
      {
        question: "Is MoneySpent private by design?",
        answer:
          "MoneySpent focuses on personal clarity without selling your spending habits as an ad product.",
      },
      {
        question: "Do I need a credit card to use these controls?",
        answer:
          "No. Personal tracking is free to start, with no credit card required.",
      },
    ],
    related: [
      { href: "/features/accounts", label: "Accounts" },
      { href: "/privacy", label: "Privacy policy" },
      { href: "/pricing", label: "Pricing" },
      { href: "/about", label: "About MoneySpent" },
    ],
  },
]

export function getFeature(slug: string) {
  return features.find((feature) => feature.slug === slug)
}
