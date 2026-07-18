"use client"

import Link from "next/link"
import { motion } from "motion/react"
import posthog from "posthog-js"
import { useAppUrl } from "@/hooks/use-app-url"

export function CtaSection() {
  const loginUrl = useAppUrl("/login")
  const onboardingUrl = useAppUrl("/onboarding")

  return (
    <section id="download" className="pb-16 pt-4 lg:pb-24">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[28px] border border-lp-line bg-lp-card px-6 py-14 text-center shadow-[var(--lp-shadow-sm)] sm:px-12 sm:py-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--lp-em)_10%,transparent),transparent_55%)]"
          />

          <div className="relative z-10 mx-auto max-w-xl">
            <h2 className="lp-display text-[32px] font-semibold leading-[1.08] tracking-[-0.035em] text-lp-ink sm:text-[44px]">
              Start tracking in under a minute.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-lp-ink-soft">
              Sign in, add your first account, and log your first expense. Clear money habits start
              small.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={onboardingUrl}
                className="lp-btn-primary inline-flex min-h-12 items-center gap-2 rounded-full bg-lp-ink px-7 text-sm font-semibold text-lp-bg"
                onClick={() =>
                  posthog.capture("cta_get_started_clicked", { location: "cta_section" })
                }
              >
                Get started free
              </Link>
              <Link
                href={loginUrl}
                className="lp-btn-ghost inline-flex min-h-12 items-center gap-2 rounded-full border border-lp-line px-7 text-sm font-medium text-lp-ink-soft"
                onClick={() => posthog.capture("cta_sign_in_clicked", { location: "cta_section" })}
              >
                Sign in
              </Link>
            </div>

            <p className="mt-6 text-[12px] font-medium text-lp-ink-mute">
              No credit card · Free forever for personal use
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
