"use client"

import Link from "next/link"
import { useAppUrl } from "@/hooks/use-app-url"
import { AuthorCard } from "@/components/landing/AuthorCard"
import type { BlogPost } from "@/constant/blog"
import { defaultAuthor } from "@/constant/author"

export function BlogHero({ post }: { post: BlogPost }) {
  const onboardingUrl = useAppUrl("/onboarding")
  const published = new Date(post.datePublished).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const modified = new Date(post.dateModified).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <section className="overflow-hidden border-b border-lp-line pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="lp-section-label mx-auto">
            <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
            {post.category}
          </p>

          <h1 className="lp-display mt-4 text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-lp-ink sm:text-[48px] lg:text-[52px]">
            {post.h1}
          </h1>

          <p className="mx-auto mt-5 max-w-[520px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-6 flex justify-center">
            <AuthorCard author={defaultAuthor} compact />
          </div>

          <p className="mt-4 text-[13px] font-medium text-lp-ink-mute">
            {published} · {post.readingMinutes} min read · Updated {modified}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={onboardingUrl}
              className="lp-btn-primary inline-flex min-h-12 items-center gap-2 rounded-full bg-lp-ink px-6 text-sm font-semibold text-lp-bg shadow-[var(--lp-shadow-sm)]"
            >
              Try MoneySpent free
            </Link>
            <Link
              href="/blog"
              className="lp-btn-ghost inline-flex min-h-12 items-center gap-2 rounded-full border border-lp-line px-5 text-sm font-medium text-lp-ink-soft"
            >
              All posts
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
