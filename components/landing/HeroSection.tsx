"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import posthog from "posthog-js"
import { RotatingWord } from "@/components/RotatingWord"
import { useAppUrl } from "@/hooks/use-app-url"

const DashboardPreview = dynamic(() =>
  import("@/components/landing/DashboardPreview").then((mod) => mod.DashboardPreview),
)

export function HeroSection() {
  const onboardingUrl = useAppUrl("/onboarding")

  return (
    <section className="overflow-hidden pt-12 pb-12 lg:pt-20 lg:pb-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <p className="lp-hero-badge mx-auto flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-lp-em lg:mx-0">
              <span className="inline-block h-[5px] w-[5px] rounded-full bg-lp-em" />
              Personal finance tracker
            </p>

            <h1 className="lp-hero-title lp-serif mt-4 text-[42px] font-semibold leading-[1.1] tracking-[-0.035em] text-lp-ink sm:text-[64px] lg:text-[80px]">
              Track every{" "}
              <span className="inline-flex min-w-[3ch] justify-center align-middle mb-[0.05em] sm:min-w-[4ch] lg:min-w-[5ch]">
                <RotatingWord texts={["rupee", "dollar", "euro", "pound", "dinar"]} />
              </span>{" "}
              smarter.
            </h1>

            <div>
              <div className="sr-only">
                MoneySpent is a simple, private personal finance tracker. Log your daily spending
                in seconds, stay on budget with smart categories, and track all your account
                balances in one clear dashboard. Join over 2,000+ happy users tracking their money
                completely free.
              </div>
              <p className="lp-hero-sub mt-6 mx-auto max-w-[520px] text-lg leading-[1.55] text-lp-ink-soft sm:text-xl lg:mx-0">
                Log spending in seconds, stay on budget, and know where your money goes.
              </p>

              <div className="lp-hero-cta mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href={onboardingUrl}
                  className="lp-btn-primary inline-flex min-h-12 items-center gap-2 rounded-full bg-lp-ink px-6 text-sm font-semibold text-lp-bg shadow-[0_8px_20px_rgba(28,25,22,.18)]"
                  onClick={() => posthog.capture("hero_cta_clicked", { location: "hero" })}
                >
                  Start tracking →
                </Link>
                <Link
                  href="#sentence"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-sm font-medium text-lp-ink transition-opacity duration-200 hover:opacity-60"
                  onClick={() => posthog.capture("hero_explore_clicked", { location: "hero" })}
                >
                  Explore the app
                </Link>
              </div>

              <div className="lp-hero-trust mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] font-medium text-lp-ink-mute lg:justify-start">
                <span>Free forever</span>
                <span className="hidden h-px w-6 bg-lp-ink opacity-40 sm:block" />
                <span>No credit card · No ads · Private by design</span>
              </div>
            </div>
          </div>

          {/* Right: stage */}
          <div className="lp-hero-phone relative mx-auto h-[500px] w-full max-w-[400px] sm:h-[620px] lg:mx-0 lg:max-w-none">
            {/* Floating card 1 — expense */}
            <div className="lp-fc-1 absolute left-[-10px] top-[40px] z-10 flex items-center gap-3 rounded-[18px] border border-lp-line-soft bg-lp-card px-3 py-2.5 shadow-[0_18px_40px_rgba(28,25,22,.10),0_0_0_1px_var(--lp-line-soft)] sm:left-[-30px] sm:top-[58px] sm:px-4 sm:py-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-lp-peach-soft text-base sm:h-9 sm:w-9 sm:text-lg">
                🍔
              </div>
              <div>
                <div className="text-[12px] font-semibold leading-tight text-lp-ink sm:text-[13px]">
                  Burger King
                </div>
                <div className="text-[10px] text-lp-ink-mute sm:text-[11px]">Food · 8:42 pm</div>
              </div>
              <div className="ml-1 text-[13px] font-bold tabular-nums text-lp-rose sm:ml-2 sm:text-sm">
                −₹450
              </div>
            </div>

            {/* Phone frame */}
            <div className="absolute right-0 top-0 h-[480px] w-[290px] overflow-hidden rounded-[38px] bg-lp-ink p-1.5 shadow-[0_40px_100px_rgba(28,25,22,.22),0_0_0_1.5px_rgba(28,25,22,.08)] sm:h-[620px] sm:w-[380px] sm:rounded-[46px] sm:p-2">
              {/* Screen */}
              <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-lp-bg sm:rounded-[38px]">
                {/* Notch */}
                <div className="absolute left-1/2 top-1.5 z-10 h-[20px] w-[70px] -translate-x-1/2 rounded-[20px] bg-lp-ink sm:top-2 sm:h-[26px] sm:w-[90px]" />
                {/* Screen content */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="h-full w-full scale-[0.8] origin-top sm:scale-100">
                    <DashboardPreview />
                  </div>
                </div>
              </div>
            </div>

            {/* Sentence card — overlapping phone */}
            <div className="animate-float-up-down absolute left-[-10px] top-[140px] z-20 w-[260px] rotate-[-4deg] rounded-2xl border border-line bg-lp-card p-5 shadow-[0_30px_80px_rgba(28,25,22,.15),0_0_0_1px_rgba(28,25,22,.04)] sm:left-[-16px] sm:top-[188px] sm:w-[340px] sm:rounded-3xl sm:p-7">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.1em] text-lp-rose sm:mb-3 sm:text-[11px]">
                New expense
              </p>
              <p className="lp-serif text-[18px] font-medium leading-[1.4] tracking-[-0.015em] text-lp-ink-mute sm:text-[22px] sm:leading-[1.5]">
                I spent{" "}
                <span className="border-b-2 border-lp-rose pb-px font-semibold text-lp-rose">
                  ₹450
                </span>{" "}
                on{" "}
                <span className="border-b-2 border-lp-rose pb-px font-semibold text-lp-rose">
                  🍔&nbsp;Food
                </span>{" "}
                at{" "}
                <span className="border-b-2 border-lp-rose pb-px font-semibold text-lp-rose">
                  Burger King
                </span>{" "}
                paid with{" "}
                <span className="border-b-2 border-lp-rose pb-px font-semibold text-lp-rose">
                  HDFC Bank
                </span>
                .
              </p>
            </div>

            {/* Floating card 2 — salary */}
            <div className="lp-fc-2 absolute right-[-10px] top-[340px] z-10 flex items-center gap-3 rounded-[18px] border border-lp-line-soft bg-lp-card px-3 py-2.5 shadow-[0_18px_40px_rgba(28,25,22,.10),0_0_0_1px_var(--lp-line-soft)] sm:right-[-20px] sm:top-[430px] sm:px-4 sm:py-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-lp-em-soft text-base sm:h-9 sm:w-9 sm:text-lg">
                💰
              </div>
              <div>
                <div className="text-[12px] font-semibold leading-tight text-lp-ink sm:text-[13px]">
                  Salary
                </div>
                <div className="text-[10px] text-lp-ink-mute sm:text-[11px]">Fi · 9:00 am</div>
              </div>
              <div className="ml-1 text-[13px] font-bold tabular-nums text-lp-em sm:ml-2 sm:text-sm">
                +₹65,000
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
