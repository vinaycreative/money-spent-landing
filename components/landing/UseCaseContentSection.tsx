export function UseCaseContentSection({
  contentBlocks,
}: {
  contentBlocks: { title: string; body: string }[]
}) {
  if (!contentBlocks || contentBlocks.length === 0) return null

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[720px] px-5 sm:px-8">
        <div className="space-y-12">
          {contentBlocks.map((block, i) => (
            <div key={i}>
              <h2 className="lp-display mb-4 text-2xl font-semibold tracking-[-0.03em] text-lp-ink sm:text-3xl">
                {block.title}
              </h2>
              <p className="text-base leading-relaxed text-lp-ink-soft sm:text-lg">{block.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
