"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import posthog from "posthog-js"
import { RotatingWord } from "@/components/RotatingWord"
import { useAppUrl } from "@/hooks/use-app-url"

const DashboardPreview = dynamic(() =>
  import("@/components/landing/DashboardPreview").then((mod) => mod.DashboardPreview),
)

export function HeroSection({
  title,
  subHeadline,
}: {
  title?: React.ReactNode
  subHeadline?: React.ReactNode
}) {
  const onboardingUrl = useAppUrl("/onboarding")

  return (
    <section className="overflow-hidden pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12 xl:gap-16">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <p className="lp-hero-badge lp-section-label mx-auto lg:mx-0">
              <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
              Personal finance tracker
            </p>

            <h1 className="lp-hero-title lp-display mt-4 text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-lp-ink sm:text-[52px] lg:text-[60px]">
              {title || (
                <>
                  Track every <br />
                  <span className="inline-flex align-middle">
                    <RotatingWord texts={["rupee", "dollar", "euro", "pound", "dinar"]} />
                  </span>{" "}
                  smarter.
                </>
              )}
            </h1>

            <p className="lp-hero-sub mx-auto mt-5 max-w-[480px] text-base leading-relaxed text-lp-ink-soft sm:text-lg lg:mx-0">
              {subHeadline ||
                "Free expense tracker for daily spending, budgets, and account balances. Log spends in seconds and see where your money goes—without spreadsheet friction."}
            </p>

            <div className="lp-hero-cta mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                href={onboardingUrl}
                className="lp-btn-primary inline-flex min-h-12 items-center gap-2 rounded-full bg-lp-ink px-6 text-sm font-semibold text-lp-bg shadow-[var(--lp-shadow-sm)]"
                onClick={() => posthog.capture("hero_cta_clicked", { location: "hero" })}
              >
                Start tracking →
              </Link>
              <Link
                href="/how-it-works"
                className="lp-btn-ghost inline-flex min-h-12 items-center gap-2 rounded-full border border-lp-line px-5 text-sm font-medium text-lp-ink-soft"
                onClick={() => posthog.capture("hero_explore_clicked", { location: "hero" })}
              >
                See how it works
              </Link>
            </div>

            <p className="lp-hero-trust mt-5 text-[13px] font-medium text-lp-ink-mute">
              Free forever · No credit card · No ads · Private by design
            </p>
          </div>

          {/* Right: product stage */}
          <div className="lp-hero-phone relative mx-auto h-[480px] w-full max-w-[360px] sm:h-[560px] sm:max-w-[400px] lg:mx-0 lg:max-w-none">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--lp-em)_12%,transparent),transparent_70%)] blur-2xl"
            />

            {/* Floating card 1 — expense */}
            <div className="lp-fc-1 absolute left-0 top-8 z-10 flex items-center gap-2.5 rounded-2xl border border-lp-line bg-lp-card px-3 py-2.5 shadow-[var(--lp-shadow-sm)] sm:left-[-8px] sm:top-12 sm:px-3.5 sm:py-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lp-peach-soft text-sm sm:h-9 sm:w-9 sm:text-base">
                🍔
              </div>
              <div className="min-w-0 text-left">
                <div className="text-[12px] font-semibold leading-tight text-lp-ink sm:text-[13px]">
                  Burger King
                </div>
                <div className="text-[10px] text-lp-ink-mute sm:text-[11px]">Food · 8:42 pm</div>
              </div>
              <div className="ml-1 text-[13px] font-bold tabular-nums text-lp-rose sm:text-sm">
                −₹450
              </div>
            </div>

            {/* Phone frame */}
            <div className="absolute right-0 top-0 h-[460px] w-[260px] overflow-hidden rounded-[2rem] border border-lp-line bg-lp-ink p-[5px] shadow-[var(--lp-shadow-lg)] sm:h-[540px] sm:w-[320px] sm:rounded-[2.4rem] sm:p-1.5 lg:right-2">
              <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-lp-bg sm:rounded-[2rem]">
                <div className="absolute left-1/2 top-1.5 z-10 h-5 w-[72px] -translate-x-1/2 rounded-full bg-lp-ink sm:top-2 sm:h-[22px] sm:w-[84px]" />
                <div className="absolute inset-0 overflow-hidden">
                  <div className="h-full w-full origin-top scale-[0.85] sm:scale-100">
                    <DashboardPreview />
                  </div>
                </div>
              </div>
            </div>

            {/* Sentence card */}
            <div className="animate-float-up-down absolute left-[-4px] top-[148px] z-20 w-[240px] rotate-[-3deg] rounded-2xl border border-lp-line bg-lp-card p-4 shadow-[var(--lp-shadow-md)] sm:left-[-12px] sm:top-[180px] sm:w-[300px] sm:rounded-[1.25rem] sm:p-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-lp-rose">
                New expense
              </p>
              <p className="lp-display text-[15px] font-medium leading-[1.45] tracking-[-0.015em] text-lp-ink-mute sm:text-[17px]">
                I spent{" "}
                <span className="border-b border-lp-rose pb-px font-semibold text-lp-rose">
                  ₹450
                </span>{" "}
                on{" "}
                <span className="border-b border-lp-rose pb-px font-semibold text-lp-rose">
                  Food
                </span>{" "}
                at{" "}
                <span className="border-b border-lp-rose pb-px font-semibold text-lp-rose">
                  Burger King
                </span>{" "}
                paid with{" "}
                <span className="border-b border-lp-rose pb-px font-semibold text-lp-rose">
                  HDFC Bank
                </span>
                .
              </p>
            </div>

            {/* Floating card 2 — salary */}
            <div className="lp-fc-2 absolute right-[-4px] top-[340px] z-10 flex items-center gap-2.5 rounded-2xl border border-lp-line bg-lp-card px-3 py-2.5 shadow-[var(--lp-shadow-sm)] sm:right-0 sm:top-[400px] sm:px-3.5 sm:py-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lp-em-soft text-sm sm:h-9 sm:w-9 sm:text-base">
                💰
              </div>
              <div className="min-w-0 text-left">
                <div className="text-[12px] font-semibold leading-tight text-lp-ink sm:text-[13px]">
                  Salary
                </div>
                <div className="text-[10px] text-lp-ink-mute sm:text-[11px]">Fi · 9:00 am</div>
              </div>
              <div className="ml-1 text-[13px] font-bold tabular-nums text-lp-em sm:text-sm">
                +₹65,000
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
