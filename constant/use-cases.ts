import type { SentenceWord } from "@/components/AnimatedSentence"

export interface UseCase {
  slug: string
  name: string
  title: string
  description: string
  heroTitle: string
  heroSub: string
  sentenceWords: SentenceWord[]
  contentBlocks: { title: string; body: string }[]
  faq: { question: string; answer: string }[]
}

const baseSentence = (
  amount: string,
  category: string,
  merchant: string,
  account: string,
): SentenceWord[] => [
  { text: amount, after: " on ", color: "var(--lp-em)", bg: "var(--lp-em-soft)" },
  { text: category, after: " at ", color: "var(--lp-amber)", bg: "var(--lp-amber-soft)" },
  { text: merchant, after: " paid with ", color: "var(--lp-rose)", bg: "var(--lp-rose-soft)" },
  { text: account, after: ".", color: "var(--lp-indigo)", bg: "var(--lp-indigo-soft)" },
]

export const useCases: UseCase[] = [
  {
    slug: "freelancers",
    name: "Freelancers",
    title: "Expense Tracker for Freelancers | MoneySpent",
    description:
      "Free expense tracker for freelancers. Log business costs, track client income, and see real profit without spreadsheets.",
    heroTitle: "Track every freelance rupee smarter.",
    heroSub:
      "Log business expenses in seconds, separate personal spend, and know what you actually earned after costs.",
    sentenceWords: baseSentence("₹5,000", "Software", "Adobe", "Business Card"),
    contentBlocks: [
      {
        title: "Separate personal and business spending",
        body: "Mixing UPI snacks with client software subscriptions makes tax season painful. In MoneySpent, create dedicated accounts for your business bank, PayPal, or credit card, then log expenses against the right one. You get a clear view of business overhead versus personal cash flow—without a spreadsheet.",
      },
      {
        title: "Log project costs in one sentence",
        body: "Freelancers do not have time for six-field forms. MoneySpent’s sentence logging lets you capture amount, category, merchant, and account in a few taps. Tools, coworking, travel, and client meals stay organized while you stay focused on billable work.",
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
    name: "Students",
    title: "Expense Tracker for Students | MoneySpent",
    description:
      "Free student expense tracker for daily spending, pocket money, and campus budgets. Simple, private, and no credit card needed.",
    heroTitle: "Track your student budget smarter.",
    heroSub:
      "Log coffee, food, and travel in seconds so your pocket money lasts the month—not just the first week.",
    sentenceWords: baseSentence("₹150", "Coffee", "Campus Cafe", "Cash"),
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
        answer: "Yes. Personal tracking is free, with no ads and no credit card required to start.",
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
    name: "Couples",
    title: "Expense Tracker for Couples | MoneySpent",
    description:
      "Simple expense tracker for couples. Track shared bills, groceries, rent, and household budgets in one clean place.",
    heroTitle: "Track shared expenses without the awkward spreadsheet.",
    heroSub:
      "Log rent, groceries, and dinners clearly so both of you know what the household spent—and what is left.",
    sentenceWords: baseSentence("₹2,500", "Groceries", "Supermarket", "Joint Account"),
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
        answer: "Yes. Personal tracking is free to start, with no credit card required.",
      },
      {
        question: "Can we export spending history?",
        answer:
          "MoneySpent supports keeping records portable with import/export tools so your history is not locked into the app.",
      },
    ],
  },
  {
    slug: "families",
    name: "Families",
    title: "Expense Tracker for Families | MoneySpent",
    description:
      "Family expense tracker for household budgets, school costs, groceries, and monthly bills. Keep family spending clear and private.",
    heroTitle: "See the whole family budget in one place.",
    heroSub:
      "Track groceries, school fees, utilities, and weekend spends so household money stops feeling like a mystery.",
    sentenceWords: baseSentence("₹4,800", "Groceries", "BigBasket", "Family Card"),
    contentBlocks: [
      {
        title: "Household spending has many small leaks",
        body: "School supplies, groceries, fuel, streaming, and medical visits rarely look big alone—but they shape the month. MoneySpent helps families log those spends quickly so the full picture is visible before the next bill hits.",
      },
      {
        title: "Organize by categories that match family life",
        body: "Group transactions into groceries, education, health, transport, and home. Category insights make it easier to answer practical questions: Are we overspending on delivery? Is education costing more this term?",
      },
      {
        title: "Track multiple family payment methods",
        body: "Cash, UPI, debit cards, and credit cards often fund the same household. MoneySpent lets you track them together so balances and spending stay aligned with real life.",
      },
      {
        title: "A calmer monthly money review",
        body: "Instead of reconstructing the month from bank SMS and memory, review a clean history. Families use MoneySpent to plan next month with facts—not stress.",
      },
    ],
    faq: [
      {
        question: "Can MoneySpent track family household expenses?",
        answer:
          "Yes. Log groceries, bills, school costs, and everyday spending by category so the household picture stays clear.",
      },
      {
        question: "Is MoneySpent suitable for family budgets in India?",
        answer:
          "Yes. It works well for rupee-based tracking across cash, UPI, and cards used by many Indian households.",
      },
      {
        question: "Can we track school fees and utilities separately?",
        answer:
          "Yes. Create categories for education, utilities, groceries, and more, then review totals anytime.",
      },
      {
        question: "Do family members need banking logins connected?",
        answer:
          "No. MoneySpent is a manual tracker. You add transactions yourself, which keeps setup private and simple.",
      },
      {
        question: "Is MoneySpent free for families?",
        answer: "Personal tracking is free forever, with no credit card required to start.",
      },
      {
        question: "Can MoneySpent replace a family expense spreadsheet?",
        answer:
          "For many families, yes. Daily logging is faster than updating sheets, and category totals are ready without formulas.",
      },
    ],
  },
  {
    slug: "small-business",
    name: "Small Business",
    title: "Expense Tracker for Small Business | MoneySpent",
    description:
      "Simple expense tracker for small business owners. Log operating costs, track income, and keep cash flow visible without heavy accounting software.",
    heroTitle: "Track small business cash flow without the clutter.",
    heroSub:
      "Log operating expenses and income quickly so you know what the business spent—and what remains.",
    sentenceWords: baseSentence("₹12,000", "Inventory", "Supplier", "Business Account"),
    contentBlocks: [
      {
        title: "Built for owners who wear every hat",
        body: "Small business owners need clarity, not another complex ERP. MoneySpent keeps expense logging fast so you can record supplier costs, tools, travel, and utilities between customer work.",
      },
      {
        title: "Separate business money from personal spend",
        body: "Create dedicated business accounts and categories. When personal and business money stop mixing, profit estimates and tax prep become far less painful.",
      },
      {
        title: "See where operating costs concentrate",
        body: "Category insights highlight recurring drains—software, logistics, rent, marketing—so you can cut or renegotiate with evidence instead of gut feel.",
      },
      {
        title: "Keep records portable",
        body: "Export when your accountant needs numbers. MoneySpent is not full accounting software, but it gives you a clean spending and income trail you can actually use.",
      },
    ],
    faq: [
      {
        question: "Is MoneySpent an accounting tool for small business?",
        answer:
          "No. MoneySpent is a personal-style expense and income tracker. It helps you stay organized day to day, but it is not a full bookkeeping or GST filing product.",
      },
      {
        question: "Can I track business income and expenses together?",
        answer:
          "Yes. Log sales or payments as income and operating costs as expenses to understand cash movement more clearly.",
      },
      {
        question: "Can MoneySpent help with tax season?",
        answer:
          "Organized categories and exportable history make review easier before you hand records to an accountant.",
      },
      {
        question: "Is MoneySpent free for small business owners?",
        answer:
          "MoneySpent is free for personal use. Many solo founders use it for lightweight business tracking; choose what fits your compliance needs.",
      },
      {
        question: "Can I track multiple business accounts?",
        answer: "Yes. Add bank, cash, wallet, and card accounts and assign each transaction to the right one.",
      },
      {
        question: "Does MoneySpent connect to business bank feeds?",
        answer:
          "No. Transactions are added manually, which keeps setup simple and avoids sharing banking credentials.",
      },
    ],
  },
  {
    slug: "self-employed",
    name: "Self-Employed",
    title: "Expense Tracker for Self-Employed | MoneySpent",
    description:
      "Expense tracker for self-employed professionals. Track work costs, income, and monthly cash flow without spreadsheet chaos.",
    heroTitle: "Know your real take-home as a self-employed pro.",
    heroSub:
      "Log work expenses and payments fast so irregular income does not hide how much you actually keep.",
    sentenceWords: baseSentence("₹3,200", "Travel", "Client Visit", "Business Card"),
    contentBlocks: [
      {
        title: "Irregular income needs clearer records",
        body: "When payments arrive unevenly, memory is a bad finance system. MoneySpent helps self-employed professionals log income and expenses as they happen so month-end surprises shrink.",
      },
      {
        title: "Track deductible-style work costs as they occur",
        body: "Travel, tools, coworking, phone bills, and materials are easier to review when they are categorized from day one. MoneySpent keeps that habit light enough to stick.",
      },
      {
        title: "See lean months before they hurt",
        body: "Category totals and account balances show whether spending is outpacing income. That visibility helps you slow discretionary spend while waiting on invoices.",
      },
      {
        title: "Simple enough for solo operators",
        body: "You do not need enterprise finance software to stay organized. MoneySpent focuses on fast logging, clear categories, and private personal tracking.",
      },
    ],
    faq: [
      {
        question: "Can self-employed people track income in MoneySpent?",
        answer:
          "Yes. Add payments as income and costs as expenses so you can review what you earned after spending.",
      },
      {
        question: "Does MoneySpent replace bookkeeping software?",
        answer:
          "No. It is a lightweight tracker for daily clarity. Use it alongside an accountant or bookkeeping tool when needed.",
      },
      {
        question: "Can I separate work and personal expenses?",
        answer: "Yes. Use separate accounts and categories for work versus personal spending.",
      },
      {
        question: "Is MoneySpent useful with UPI and card payments?",
        answer: "Yes. Log spends from cash, UPI, wallets, and cards in one place.",
      },
      {
        question: "Is MoneySpent free for self-employed users?",
        answer: "Personal tracking is free, with no credit card required to start.",
      },
      {
        question: "Can I export records for my accountant?",
        answer: "Yes. MoneySpent supports keeping your history portable with export tools.",
      },
    ],
  },
  {
    slug: "content-creators",
    name: "Content Creators",
    title: "Expense Tracker for Content Creators | MoneySpent",
    description:
      "Expense tracker for creators and influencers. Track gear, software, travel, and brand income without losing sight of profit.",
    heroTitle: "Track creator income and costs without the chaos.",
    heroSub:
      "Log gear, subscriptions, collabs, and payouts so you know what content actually pays after expenses.",
    sentenceWords: baseSentence("₹8,999", "Gear", "Amazon", "Credit Card"),
    contentBlocks: [
      {
        title: "Creator businesses hide costs in plain sight",
        body: "Cameras, mics, editing software, props, travel, and paid promotions add up quickly. MoneySpent helps creators log those expenses as they happen instead of discovering them in a painful quarterly review.",
      },
      {
        title: "Separate brand income from personal spending",
        body: "Track sponsorship payouts and platform earnings as income, then assign gear and software to the right categories. Clarity about profit helps you price collabs better.",
      },
      {
        title: "See which months are actually profitable",
        body: "A viral month can still lose money if gear and ads balloon. Category insights make the tradeoffs visible so you can plan the next launch with real numbers.",
      },
      {
        title: "Fast logging for mobile-first workflows",
        body: "Creators live on their phones. MoneySpent’s quick entry and PWA-friendly design make expense tracking realistic between shoots and edits.",
      },
    ],
    faq: [
      {
        question: "Can influencers track sponsorship income in MoneySpent?",
        answer:
          "Yes. Log brand payments as income and related production costs as expenses for a clearer profit view.",
      },
      {
        question: "Can I track software subscriptions used for content?",
        answer:
          "Yes. Categorize editing tools, stock assets, and hosting costs so recurring creator expenses stay visible.",
      },
      {
        question: "Is MoneySpent good for YouTubers and Instagram creators?",
        answer:
          "Yes. It works well for creators who need simple expense and income tracking without heavy accounting software.",
      },
      {
        question: "Does MoneySpent connect to AdSense or brand portals?",
        answer:
          "No. You add income and expenses manually, which keeps the app private and flexible across platforms.",
      },
      {
        question: "Is MoneySpent free for content creators?",
        answer: "Personal tracking is free forever, with no credit card required.",
      },
      {
        question: "Can MoneySpent help with creator tax prep?",
        answer:
          "It is not tax software, but organized categories and exportable history make accountant handoff easier.",
      },
    ],
  },
  {
    slug: "travelers",
    name: "Travelers",
    title: "Expense Tracker for Travelers | MoneySpent",
    description:
      "Travel expense tracker for trips, flights, food, and daily spend. Keep vacation and work-travel budgets under control.",
    heroTitle: "Track trip spending before it surprises you.",
    heroSub:
      "Log flights, stays, food, and local transport so your travel budget stays honest day by day.",
    sentenceWords: baseSentence("₹1,200", "Food", "Airport Cafe", "Travel Card"),
    contentBlocks: [
      {
        title: "Trip budgets fail in tiny purchases",
        body: "Airport snacks, auto rides, museum tickets, and “just one more” souvenir rarely feel expensive in the moment. MoneySpent makes those spends visible while you still have time to adjust.",
      },
      {
        title: "Organize travel categories clearly",
        body: "Separate lodging, transport, food, and activities. When the trip ends, you know what actually drove the cost—not just a vague sense that it was “a lot.”",
      },
      {
        title: "Track multiple payment methods on the road",
        body: "Cash, travel cards, and UPI often mix during a trip. MoneySpent keeps them in one view so balances and trip totals stay aligned.",
      },
      {
        title: "Useful for vacations and work travel",
        body: "Whether you are planning a holiday or tracking reimbursable work travel, fast logging beats reconstructing expenses from receipts later.",
      },
    ],
    faq: [
      {
        question: "Can MoneySpent track vacation expenses?",
        answer:
          "Yes. Log flights, hotels, food, and activities by category to stay within a trip budget.",
      },
      {
        question: "Is MoneySpent useful for work travel reimbursements?",
        answer:
          "Yes. Clear dated expense history makes it easier to submit or review reimbursable spends.",
      },
      {
        question: "Can I track cash and card spends while traveling?",
        answer: "Yes. Add cash, wallet, and card accounts and assign each expense to the right one.",
      },
      {
        question: "Does MoneySpent support multiple currencies automatically?",
        answer:
          "MoneySpent focuses on clear personal tracking in your working currency setup. Keep trip notes for foreign amounts if you convert manually.",
      },
      {
        question: "Is MoneySpent free for travelers?",
        answer: "Yes. Personal tracking is free, with no credit card required.",
      },
      {
        question: "Can I review total trip cost after I return?",
        answer:
          "Yes. Filter and review categorized transactions from travel dates to see the full trip spend.",
      },
    ],
  },
  {
    slug: "remote-workers",
    name: "Remote Workers",
    title: "Expense Tracker for Remote Workers | MoneySpent",
    description:
      "Expense tracker for remote workers. Track home-office costs, subscriptions, and daily spending with a clear personal finance view.",
    heroTitle: "Track remote-work spending without spreadsheet drag.",
    heroSub:
      "Log home-office tools, subscriptions, and daily costs so remote work expenses stay visible and manageable.",
    sentenceWords: baseSentence("₹999", "Software", "Notion", "UPI"),
    contentBlocks: [
      {
        title: "Remote work creates quiet monthly costs",
        body: "Internet upgrades, software seats, coffee-shop days, ergonomic gear, and co-working passes are easy to forget. MoneySpent helps remote workers capture them before they vanish into “miscellaneous.”",
      },
      {
        title: "Keep work tools and lifestyle spend distinct",
        body: "Use categories for software, utilities, food, and transport. That separation helps you understand which costs support work and which are lifestyle drift.",
      },
      {
        title: "Stay aware when location-independent life gets expensive",
        body: "Working from anywhere can inflate food delivery and travel. Daily logging gives you early warnings instead of a shocking month-end total.",
      },
      {
        title: "Simple enough to use between meetings",
        body: "MoneySpent is designed for quick entries. Add a spend in seconds and return to deep work without opening a heavy finance suite.",
      },
    ],
    faq: [
      {
        question: "Can remote workers track home-office expenses in MoneySpent?",
        answer:
          "Yes. Categorize internet, software, equipment, and related costs for a clearer monthly view.",
      },
      {
        question: "Is MoneySpent useful if my company reimburses some expenses?",
        answer:
          "Yes. Keeping a clean log makes reimbursement reviews and personal budget checks easier.",
      },
      {
        question: "Can I track subscriptions that power remote work?",
        answer:
          "Yes. Log recurring tools under software or subscriptions so renewals do not sneak up on you.",
      },
      {
        question: "Does MoneySpent require bank linking?",
        answer: "No. It is a manual tracker designed for privacy and simple setup.",
      },
      {
        question: "Is MoneySpent free for remote workers?",
        answer: "Personal tracking is free forever with no credit card required.",
      },
      {
        question: "Can MoneySpent help me budget while living abroad?",
        answer:
          "Yes. Consistent daily logging and category review help you control spend even when routines change.",
      },
    ],
  },
  {
    slug: "teachers",
    name: "Teachers",
    title: "Expense Tracker for Teachers | MoneySpent",
    description:
      "Free expense tracker for teachers. Track classroom supplies, commuting, and monthly budgets without complicated finance apps.",
    heroTitle: "Track teacher spending without another chore.",
    heroSub:
      "Log classroom supplies, commute costs, and monthly bills quickly so your personal budget stays clear.",
    sentenceWords: baseSentence("₹650", "Supplies", "Stationery Store", "UPI"),
    contentBlocks: [
      {
        title: "Classroom costs often come out of pocket",
        body: "Markers, printouts, rewards, and small classroom fixes add up across a term. MoneySpent helps teachers record those spends so they are not lost in busy school weeks.",
      },
      {
        title: "Balance salary timing with real expenses",
        body: "When paydays and bill due dates do not line up, clarity matters. Tracking categories like transport, food, and home expenses helps you plan the stretch between salaries.",
      },
      {
        title: "Keep personal finance simple after long days",
        body: "Teachers do not need a complex wealth dashboard. MoneySpent focuses on fast logging and readable totals—the habit that actually improves budgeting.",
      },
      {
        title: "Free and private by design",
        body: "Start without a credit card, avoid ad-heavy finance apps, and keep your spending records private while you focus on teaching.",
      },
    ],
    faq: [
      {
        question: "Can teachers track classroom supply expenses?",
        answer:
          "Yes. Create a supplies or education category and log purchases as they happen through the term.",
      },
      {
        question: "Is MoneySpent free for teachers?",
        answer: "Yes. Personal tracking is free, with no ads and no credit card required.",
      },
      {
        question: "Can MoneySpent help with a teacher monthly budget?",
        answer:
          "Yes. Daily expense logging and category totals make it easier to stay within a monthly plan.",
      },
      {
        question: "Does MoneySpent work well on mobile between classes?",
        answer:
          "Yes. It is built as a web app/PWA for quick phone use when you have a short break.",
      },
      {
        question: "Can I track commute and meal costs separately?",
        answer: "Yes. Use categories for transport, food, and other recurring teacher expenses.",
      },
      {
        question: "Is MoneySpent complicated to set up?",
        answer:
          "No. Create an account, add your payment methods and categories, then log your first expense in minutes.",
      },
    ],
  },
  {
    slug: "developers",
    name: "Developers",
    title: "Expense Tracker for Developers | MoneySpent",
    description:
      "Expense tracker for developers. Track SaaS tools, hardware, side-project costs, and personal budgets in one clean app.",
    heroTitle: "Track developer tools and spending without friction.",
    heroSub:
      "Log SaaS bills, hardware, and daily spend fast so side projects and salary life stay financially clear.",
    sentenceWords: baseSentence("₹1,499", "Software", "GitHub", "Credit Card"),
    contentBlocks: [
      {
        title: "SaaS creep is a real budget problem",
        body: "Hosting, AI tools, design apps, domains, and cloud credits quietly stack up. MoneySpent helps developers categorize those costs so “just $10 more” becomes visible.",
      },
      {
        title: "Separate side-project burn from personal life",
        body: "Track project tools in their own categories or accounts. You will know whether a side project is learning, a hobby, or an expensive distraction.",
      },
      {
        title: "Built for people who hate forms",
        body: "If you abandon finance apps because logging is tedious, sentence-style entry is the point. Capture amount, category, merchant, and account in a few taps.",
      },
      {
        title: "Private personal finance without bloat",
        body: "No ads, no credit card wall, and no enterprise accounting overhead. Just a clear expense tracker for developers who want signal over noise.",
      },
    ],
    faq: [
      {
        question: "Can developers track SaaS and tool subscriptions in MoneySpent?",
        answer:
          "Yes. Categorize software and subscriptions so recurring tool costs stay visible each month.",
      },
      {
        question: "Can I track side-project expenses separately?",
        answer:
          "Yes. Use dedicated categories or accounts for project costs versus personal spending.",
      },
      {
        question: "Is MoneySpent free for developers?",
        answer: "Yes. Personal tracking is free forever with no credit card required.",
      },
      {
        question: "Does MoneySpent integrate with banks or Stripe?",
        answer:
          "No. It is a manual tracker. You add transactions yourself for simplicity and privacy.",
      },
      {
        question: "Can MoneySpent help with freelance developer finances?",
        answer:
          "Yes. Track client income and business costs together for a clearer personal profit view.",
      },
      {
        question: "Is MoneySpent better than a Notion finance database?",
        answer:
          "For daily logging, usually yes. MoneySpent is purpose-built for expenses, balances, and category insights without maintaining a custom database.",
      },
    ],
  },
]

export function getUseCase(slug: string) {
  return useCases.find((useCase) => useCase.slug === slug)
}
