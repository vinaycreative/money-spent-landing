import Link from "next/link"
import { defaultAuthor, type Author } from "@/constant/author"

export function AuthorCard({
  author = defaultAuthor,
  compact = false,
}: {
  author?: Author
  compact?: boolean
}) {
  if (compact) {
    return (
      <Link
        href={author.path}
        className="inline-flex items-center gap-3 rounded-full border border-lp-line bg-lp-card px-3 py-1.5 transition-colors hover:border-lp-em/35"
      >
        <span className="grid size-8 place-items-center rounded-full bg-lp-em-tint text-[12px] font-semibold text-lp-em">
          {author.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </span>
        <span className="text-[13px] font-semibold text-lp-ink">{author.name}</span>
      </Link>
    )
  }

  return (
    <section className="border-t border-lp-line py-14 lg:py-16">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="mx-auto max-w-[640px] rounded-2xl border border-lp-line bg-lp-card p-6 text-left sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lp-em">
            Written by
          </p>
          <div className="mt-4 flex items-start gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-lp-em-tint text-base font-semibold text-lp-em">
              {author.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </span>
            <div>
              <Link
                href={author.path}
                className="lp-display text-xl font-semibold tracking-[-0.02em] text-lp-ink transition-opacity hover:opacity-80"
              >
                {author.name}
              </Link>
              <p className="mt-1 text-sm text-lp-ink-mute">{author.role}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-lp-ink-soft">
                {author.shortBio}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link
                  href={author.path}
                  className="font-medium text-lp-ink underline-offset-2 hover:underline"
                >
                  Author page
                </Link>
                <a
                  href={author.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-lp-ink underline-offset-2 hover:underline"
                >
                  vinaycreative.com
                </a>
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-lp-ink underline-offset-2 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
