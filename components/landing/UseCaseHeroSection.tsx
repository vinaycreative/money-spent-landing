export function UseCaseHeroSection({
  title,
  subHeadline,
}: {
  title: React.ReactNode
  subHeadline: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-lp-line bg-lp-bg pb-16 pt-28 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8">
        <p className="lp-display text-[15px] font-semibold tracking-[-0.02em] text-lp-em">
          MoneySpent
        </p>
        <h1 className="lp-display mt-4 text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-lp-ink sm:text-[52px] lg:text-[60px]">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-[520px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
          {subHeadline}
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/onboarding"
            className="lp-btn-primary inline-flex h-12 items-center justify-center rounded-full bg-lp-ink px-7 text-sm font-semibold text-lp-bg"
          >
            Start tracking free
          </a>
        </div>
      </div>
    </section>
  )
}
