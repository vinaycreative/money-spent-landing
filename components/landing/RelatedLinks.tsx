import Link from "next/link"

export function RelatedLinks({
  title = "Explore more",
  links,
}: {
  title?: string
  links: { href: string; label: string }[]
}) {
  if (!links.length) return null

  return (
    <section className="border-t border-lp-line py-14 lg:py-16">
      <div className="mx-auto max-w-[720px] px-5 sm:px-8">
        <h2 className="lp-display text-xl font-semibold tracking-[-0.02em] text-lp-ink sm:text-2xl">
          {title}
        </h2>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex rounded-full border border-lp-line bg-lp-card px-4 py-2 text-sm font-medium text-lp-ink-soft transition-colors hover:border-lp-em/30 hover:text-lp-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
