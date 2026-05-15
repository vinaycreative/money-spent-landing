"use client"

export function StatsSection() {
  const stats = [
    { n: "4", label: "Taps to log\nan expense" },
    { n: "0", label: "Ads, ever.\nNo data sold" },
    { n: "100%", label: "On-device data\nEnd-to-end private" },
  ]
  return (
    <section className="bg-lp-bg py-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <h2 className="lp-serif text-[40px] font-semibold leading-[1.05] tracking-[-0.028em] text-lp-ink lg:text-[48px]">
            Built for real life,
            <br />
            not for accountants.
          </h2>
          {stats.map(({ n, label }) => (
            <div
              key={n}
              className="lp-stat-box flex flex-col gap-2 rounded-2xl bg-lp-bg-2 p-6"
            >
              <span className="lp-serif text-5xl font-semibold tracking-tight text-lp-ink">
                {n}
              </span>
              <span className="whitespace-pre-line text-sm font-medium leading-snug text-lp-ink-mute">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
