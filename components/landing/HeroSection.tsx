"use client"

import Link from "next/link"
import { RotedWord } from "@/components/RotedWord"
import DummyDashboard from "@/components/DummyDashboard"

export function HeroSection() {
  return (
    <section className="overflow-hidden py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left: copy */}
          <div>
            <p className="lp-hero-badge flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-lp-em">
              <span className="inline-block h-[5px] w-[5px] rounded-full bg-lp-em" />
              Personal finance tracker
            </p>

            <h1 className="lp-hero-title lp-serif mt-4 text-[52px] font-semibold leading-[1.02] tracking-[-0.035em] text-lp-ink sm:text-[68px] lg:text-[80px]">
              Track every <RotedWord texts={["rupee", "dollar", "euro", "pound", "dinar"]} /> with{" "}
              <em className="not-italic italic">smarter.</em>
            </h1>

            <p className="lp-hero-sub mt-6 max-w-[520px] text-lg leading-[1.55] text-lp-ink-soft sm:text-xl">
              Log spending in seconds, stay on budget, and know where your money goes.
            </p>

            <div className="lp-hero-cta mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/onboarding"
                className="lp-btn-primary inline-flex min-h-12 items-center gap-2 rounded-full bg-lp-ink px-6 text-sm font-semibold text-lp-bg shadow-[0_8px_20px_rgba(28,25,22,.18)]"
              >
                Start tracking →
              </Link>
              <Link
                href="#sentence"
                className="inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-sm font-medium text-lp-ink transition-opacity duration-200 hover:opacity-60"
              >
                Explore the app
              </Link>
            </div>

            <div className="lp-hero-trust mt-7 flex items-center gap-4 text-[13px] font-medium text-lp-ink-mute">
              <span>Free forever</span>
              <span className="h-px w-6 bg-lp-ink opacity-40" />
              <span>No credit card · No ads · Private by design</span>
            </div>
          </div>

          {/* Right: stage */}
          <div className="lp-hero-phone relative mx-auto h-[620px] w-full lg:mx-0">
            {/* Floating card 1 — expense */}
            <div className="lp-fc-1 absolute left-[-30px] top-[58px] z-10 flex items-center gap-3 rounded-[18px] border border-lp-line-soft bg-lp-card px-4 py-3.5 shadow-[0_18px_40px_rgba(28,25,22,.10),0_0_0_1px_var(--lp-line-soft)]">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-lp-peach-soft text-lg">
                🍔
              </div>
              <div>
                <div className="text-[13px] font-semibold leading-tight text-lp-ink">
                  Burger King
                </div>
                <div className="text-[11px] text-lp-ink-mute">Food · 8:42 pm</div>
              </div>
              <div className="ml-2 text-sm font-bold tabular-nums text-lp-rose">−₹450</div>
            </div>

            {/* Phone frame */}
            <div className="absolute right-0 top-0 h-[620px] w-[380px] rotate-[-3deg] overflow-hidden rounded-[46px] bg-lp-ink p-2 shadow-[0_40px_100px_rgba(28,25,22,.22),0_0_0_1.5px_rgba(28,25,22,.08)]">
              {/* Screen */}
              <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-lp-bg">
                {/* Notch */}
                <div className="absolute left-1/2 top-2 z-10 h-[26px] w-[90px] -translate-x-1/2 rounded-[20px] bg-lp-ink" />
                {/* Screen content */}
                <div className="absolute inset-0 overflow-hidden">
                  <DummyDashboard />
                </div>
              </div>
            </div>

            {/* Sentence card — overlapping phone */}
            <div className="animate-float-up-down absolute left-[-16px] top-[188px] z-20 w-[340px] rotate-[-4deg] rounded-3xl border border-line bg-lp-card p-7 shadow-[0_30px_80px_rgba(28,25,22,.15),0_0_0_1px_rgba(28,25,22,.04)]">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-lp-rose">
                New expense
              </p>
              <p className="lp-serif text-[22px] font-medium leading-[1.5] tracking-[-0.015em] text-lp-ink-mute">
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
                  Fi
                </span>
                .
              </p>
            </div>

            {/* Floating card 2 — salary */}
            <div className="lp-fc-2 absolute right-[-20px] top-[430px] z-10 flex items-center gap-3 rounded-[18px] border border-lp-line-soft bg-lp-card px-4 py-3.5 shadow-[0_18px_40px_rgba(28,25,22,.10),0_0_0_1px_var(--lp-line-soft)]">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-lp-em-soft text-lg">
                💰
              </div>
              <div>
                <div className="text-[13px] font-semibold leading-tight text-lp-ink">Salary</div>
                <div className="text-[11px] text-lp-ink-mute">Fi · 9:00 am</div>
              </div>
              <div className="ml-2 text-sm font-bold tabular-nums text-lp-em">+₹65,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
