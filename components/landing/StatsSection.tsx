"use client"

export function StatsSection() {
  const stats = [
    { n: "4", label: "Taps to log\nan expense" },
    { n: "0", label: "Ads, ever.\nNo data sold" },
    { n: "100%", label: "On-device data\nEnd-to-end private" },
  ]
  return (
    <section className="bg-lp-bg py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="lp-serif mt-5 text-[38px] font-semibold leading-[1.08] tracking-[-0.035em] text-lp-ink sm:text-[48px] lg:text-[56px]">
              Built for real life,
              <span className="text-lp-ink-mute"> not for accountants.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:contents">
            {stats.map(({ n, label }, i) => (
              <div
                key={i}
                className="lp-stat-box group relative flex flex-col justify-between gap-6 rounded-[32px] border border-lp-line bg-lp-card p-8 transition-all duration-300 hover:border-lp-em/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-start justify-between">
                  <span className="lp-serif text-5xl font-semibold tracking-tighter text-lp-ink sm:text-6xl group-hover:text-lp-em transition-colors">
                    {n}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lp-bg-2 text-lp-em opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="whitespace-pre-line text-[14px] font-medium leading-[1.5] text-lp-ink-soft">
                  {label}
                </p>
                {/* Decorative accent */}
                <div className="absolute bottom-6 right-8 h-1 w-1 rounded-full bg-lp-em opacity-20 group-hover:scale-[8] group-hover:opacity-10 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
