"use client"

export function FeaturesSection() {
  const features = [
    {
      title: "Fast daily logging",
      desc: "Add an expense or income from the dashboard, pick the account and category, and get back to your day.",
      svg: (
        <svg width="200" height="120" viewBox="0 0 200 120">
          <rect
            x="20"
            y="30"
            width="160"
            height="60"
            rx="14"
            fill="var(--lp-card)"
            stroke="var(--lp-ink)"
            strokeWidth="1.5"
          />
          <rect x="34" y="50" width="42" height="6" rx="3" fill="var(--lp-ink)" />
          <rect x="82" y="50" width="20" height="6" rx="3" fill="var(--lp-em)" />
          <rect x="108" y="50" width="34" height="6" rx="3" fill="var(--lp-ink)" />
          <rect x="34" y="62" width="18" height="6" rx="3" fill="var(--lp-ink)" />
          <rect x="58" y="62" width="38" height="6" rx="3" fill="var(--lp-em)" />
          <path d="M148 64 l8 -16 l4 4 z" fill="var(--lp-ink)" />
          <path
            d="M148 64 l8 -16"
            stroke="var(--lp-peach)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="160" cy="48" r="3" fill="var(--lp-peach)" />
        </svg>
      ),
    },
    {
      title: "Today, at a glance",
      desc: "Open to the day that matters. See today's spend, move between dates, and review every transaction in one place.",
      svg: (
        <svg width="200" height="120" viewBox="0 0 200 120">
          <rect
            x="32"
            y="28"
            width="136"
            height="74"
            rx="12"
            fill="var(--lp-card)"
            stroke="var(--lp-ink)"
            strokeWidth="1.5"
          />
          <rect x="44" y="42" width="50" height="8" rx="4" fill="var(--lp-ink)" />
          <rect x="44" y="56" width="34" height="14" rx="3" fill="var(--lp-ink)" />
          {[80, 94, 108, 122, 136, 150].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={[80, 74, 70, 64, 68, 60][i]}
              width="10"
              height={[14, 20, 24, 30, 26, 34][i]}
              rx="2"
              fill={i === 5 ? "var(--lp-em)" : "var(--lp-bg-2)"}
            />
          ))}
        </svg>
      ),
    },
    {
      title: "Category insights",
      desc: "See where the money went by category, then tap any category for its total, monthly trend, and matching transactions.",
      svg: (
        <svg width="200" height="120" viewBox="0 0 200 120">
          <circle
            cx="100"
            cy="60"
            r="40"
            fill="var(--lp-card)"
            stroke="var(--lp-ink)"
            strokeWidth="1.5"
          />
          <path d="M100 60 L100 20 A40 40 0 0 1 138.6 70 Z" fill="var(--lp-em)" />
          <path d="M100 60 L138.6 70 A40 40 0 0 1 118.6 92.5 Z" fill="var(--lp-peach)" />
          <path d="M100 60 L118.6 92.5 A40 40 0 0 1 73.5 86 Z" fill="var(--lp-ink)" />
          <circle cx="100" cy="60" r="14" fill="var(--lp-bg)" />
        </svg>
      ),
    },
    {
      title: "Searchable spend history",
      desc: "Search transactions, filter by date, account, or type, and switch between a clean list and compact calendar-style view.",
      svg: (
        <svg width="200" height="120" viewBox="0 0 200 120">
          <rect
            x="38"
            y="28"
            width="124"
            height="80"
            rx="10"
            fill="var(--lp-card)"
            stroke="var(--lp-ink)"
            strokeWidth="1.5"
          />
          <rect x="38" y="28" width="124" height="18" rx="10" fill="var(--lp-ink)" />
          <rect x="38" y="36" width="124" height="10" fill="var(--lp-ink)" />
          <g
            fontFamily="Inter"
            fontSize="8"
            fontWeight="600"
            fill="var(--lp-ink)"
            textAnchor="middle"
          >
            <text x="55" y="62">M</text>
            <text x="72" y="62">T</text>
            <text x="89" y="62">W</text>
            <text x="106" y="62">T</text>
            <text x="123" y="62">F</text>
            <text x="55" y="78">1</text>
            <text x="72" y="78">2</text>
            <circle cx="89" cy="76" r="8" fill="var(--lp-em)" />
            <text x="89" y="78" fill="white">3</text>
            <text x="106" y="78">4</text>
            <text x="123" y="78">5</text>
            <text x="55" y="94">6</text>
            <circle cx="72" cy="92" r="8" fill="var(--lp-peach)" />
            <text x="72" y="94">7</text>
            <text x="89" y="94">8</text>
            <text x="106" y="94">9</text>
            <text x="123" y="94">10</text>
          </g>
        </svg>
      ),
    },
    {
      title: "All your accounts",
      desc: "Track cash, bank, wallet, and credit accounts side by side. Balances update as you add, edit, or remove transactions.",
      svg: (
        <svg width="200" height="120" viewBox="0 0 200 120">
          <rect
            x="40"
            y="44"
            width="74"
            height="44"
            rx="8"
            fill="var(--lp-ink)"
            transform="rotate(-6 77 66)"
          />
          <rect x="84" y="38" width="74" height="44" rx="8" fill="var(--lp-em)" />
          <rect x="84" y="48" width="74" height="6" fill="#000000" opacity=".18" />
          <rect x="92" y="62" width="20" height="4" rx="2" fill="white" opacity=".5" />
          <rect x="92" y="70" width="14" height="4" rx="2" fill="white" opacity=".5" />
          <circle cx="146" cy="70" r="6" fill="var(--lp-peach)" />
          <circle cx="140" cy="70" r="6" fill="var(--lp-peach)" opacity=".5" />
        </svg>
      ),
    },
    {
      title: "Built for control",
      desc: "Hide balances when needed, customize themes and categories, and keep your records portable with import and export tools.",
      svg: (
        <svg width="200" height="120" viewBox="0 0 200 120">
          <path
            d="M100 20 L130 32 V64 C130 82 117 96 100 102 C83 96 70 82 70 64 V32 Z"
            fill="var(--lp-card)"
            stroke="var(--lp-ink)"
            strokeWidth="1.5"
          />
          <circle cx="100" cy="58" r="14" fill="var(--lp-em)" />
          <path
            d="M93 58 l5 5 l9 -10"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect x="90" y="74" width="20" height="3" rx="1.5" fill="var(--lp-ink)" opacity=".15" />
          <rect x="93" y="80" width="14" height="3" rx="1.5" fill="var(--lp-ink)" opacity=".15" />
        </svg>
      ),
    },
  ]

  return (
    <section id="features" className="bg-lp-bg py-16 lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <p className="mx-auto flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-lp-em sm:mx-0">
              <span className="inline-block h-[5px] w-[5px] rounded-full bg-lp-em" />
              Built around daily use
            </p>
            <h2 className="lp-serif mt-4 max-w-[520px] text-[36px] font-semibold leading-[1.1] tracking-[-0.03em] text-lp-ink sm:text-[44px] lg:text-[54px]">
              Six views. One simple money habit.
            </h2>
          </div>
          <p className="mx-auto max-w-sm text-center text-base leading-[1.6] text-lp-ink-mute sm:mx-0 sm:text-left">
            From quick entries to category drill-downs, Money Spent keeps the important money
            questions close without turning tracking into another chore.
          </p>
        </div>

        <div className="mt-14 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, svg }) => (
            <article
              key={title}
              className="lp-feat flex flex-col gap-5 rounded-[28px] bg-lp-card p-8"
            >
              <div className="flex h-[140px] items-center justify-center rounded-[18px] bg-lp-bg">
                {svg}
              </div>
              <div>
                <h3 className="lp-serif text-xl font-semibold text-lp-ink">{title}</h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-lp-ink-mute">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
