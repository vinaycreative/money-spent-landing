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
}) {
  const onboardingUrl = useAppUrl("/onboarding")

  return (
    <section className="relative overflow-hidden border-b border-lp-line bg-lp-bg pb-16 pt-28 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8">
        {eyebrow ? (
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-lp-em">{eyebrow}</p>
        ) : (
          <p className="lp-display text-[15px] font-semibold tracking-[-0.02em] text-lp-em">
            MoneySpent
          </p>
        )}
        <h1 className="lp-display mt-4 text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-lp-ink sm:text-[48px] lg:text-[56px]">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-[520px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
          {subHeadline}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href={onboardingUrl}
            className="lp-btn-primary inline-flex h-12 items-center justify-center rounded-full bg-lp-ink px-7 text-sm font-semibold text-lp-bg"
          >
            Start tracking free
          </Link>
        </div>
      </div>
    </section>
  )
}
