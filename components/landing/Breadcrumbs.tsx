import Link from "next/link"
import type { BreadcrumbItem } from "@/lib/seo"

/** Left-aligned breadcrumb strip that sits directly under the site header. */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length < 2) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-lp-line/80 bg-lp-bg"
    >
      <ol className="mx-auto flex max-w-[1120px] flex-wrap items-center gap-1.5 px-5 py-2.5 text-[12px] text-lp-ink-mute sm:px-8">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.path}-${item.name}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <span aria-hidden className="text-lp-ink-mute/70">
                  /
                </span>
              ) : null}
              {isLast ? (
                <span className="font-medium text-lp-ink" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition-colors hover:text-lp-ink">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
