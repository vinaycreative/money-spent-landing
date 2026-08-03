"use client"

import Link from "next/link"
import { useAppUrl } from "@/hooks/use-app-url"

export function UseCaseHeroSection({
  title,
  subHeadline,
  eyebrow,
}: {
  title: React.ReactNode
  subHeadline: React.ReactNode
  eyebrow?: string
  /** @deprecated Breadcrumbs render under the header — not in the hero. */
  breadcrumbs?: unknown
  /** @deprecated Heroes are always centered to match `/`. */
  align?: "left" | "center"
}) {
  const onboardingUrl = useAppUrl("/onboarding")

  return (
    <section className="overflow-hidden border-b border-lp-line pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="lp-section-label mx-auto">
            <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
            {eyebrow || "MoneySpent"}
          </p>

          <h1 className="lp-display mt-4 text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-lp-ink sm:text-[48px] lg:text-[56px]">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-[520px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
            {subHeadline}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={onboardingUrl}
              className="lp-btn-primary inline-flex min-h-12 items-center gap-2 rounded-full bg-lp-ink px-6 text-sm font-semibold text-lp-bg shadow-[var(--lp-shadow-sm)]"
            >
              Start tracking free
            </Link>
          </div>

          <p className="mt-5 text-[13px] font-medium text-lp-ink-mute">
            Free forever · No credit card · No ads · Private by design
          </p>
        </div>
      </div>
    </section>
  )
}
