export type ContentBlock = {
  title: string
  body: string
  bullets?: string[]
  steps?: { title: string; body: string }[]
  callout?: string
}

export function UseCaseContentSection({
  contentBlocks,
}: {
  contentBlocks: ContentBlock[]
}) {
  if (!contentBlocks || contentBlocks.length === 0) return null

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="mx-auto max-w-[640px] space-y-14 lg:space-y-16">
          {contentBlocks.map((block, i) => (
            <article key={i}>
              <h2 className="lp-display mb-4 text-center text-2xl font-semibold tracking-[-0.03em] text-lp-ink sm:text-3xl">
                {block.title}
              </h2>

              {block.body.split("\n\n").map((paragraph, pi) => (
                <p
                  key={pi}
                  className={`text-center text-base leading-relaxed text-lp-ink-soft sm:text-lg ${
                    pi > 0 ? "mt-4" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              {block.bullets?.length ? (
                <ul className="mx-auto mt-5 max-w-[520px] space-y-2.5 text-left">
                  {block.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-base leading-relaxed text-lp-ink-soft sm:text-lg"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-lp-em"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {block.steps?.length ? (
                <ol className="mt-6 space-y-4 text-left">
                  {block.steps.map((step, si) => (
                    <li
                      key={step.title}
                      className="rounded-2xl border border-lp-line bg-lp-card px-5 py-4"
                    >
                      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lp-em">
                        Step {si + 1}
                      </p>
                      <h3 className="lp-display mt-1.5 text-lg font-semibold tracking-[-0.02em] text-lp-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-lp-ink-soft">
                        {step.body}
                      </p>
                    </li>
                  ))}
                </ol>
              ) : null}

              {block.callout ? (
                <aside className="mt-6 rounded-2xl border border-lp-em/25 bg-lp-em-tint px-5 py-4 text-left text-[15px] leading-relaxed text-lp-ink-soft">
                  <p>
                    <span className="font-semibold text-lp-ink">Why it matters: </span>
                    {block.callout}
                  </p>
                </aside>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
