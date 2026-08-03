"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"
import { useAppUrl } from "@/hooks/use-app-url"

export function FreeSection() {
  const onboardingUrl = useAppUrl("/onboarding")
  const features = [
    "Unlimited manual transactions",
    "Multiple accounts & cards",
    "Smart category management",
    "Spending insights",
    "Private, personal data",
    "No ads, no tracking spam",
  ]

  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="lp-section-label">
              <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
              Pricing
            </p>
            <h2 className="lp-display mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-lp-ink sm:text-[44px] lg:text-[52px]">
              Premium tracking,
              <br />
              <span className="text-lp-em">completely free.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-lp-ink-soft sm:text-lg">
              Free forever for personal expense tracking. A clean budget and spending workspace
              without ads, paywalls, or a monthly bill.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.04 * i, duration: 0.35 }}
                  className="flex items-center gap-2.5 text-[15px] font-medium text-lp-ink-soft"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lp-em-soft text-lp-em">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] border border-lp-line bg-lp-card p-8 text-center shadow-[var(--lp-shadow-sm)] sm:p-10"
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-lp-ink-mute">
              Personal plan
            </span>
            <div className="mt-3 flex items-baseline justify-center gap-1">
              <span className="lp-display text-[72px] font-semibold leading-none tracking-tighter text-lp-ink sm:text-[88px]">
                $0
              </span>
              <span className="text-lg font-medium text-lp-ink-mute">/mo</span>
            </div>
            <p className="mt-3 text-sm font-medium text-lp-ink-soft">Free forever for personal use</p>

            <Link
              href={onboardingUrl}
              className="lp-btn-primary mt-8 inline-flex w-full min-h-12 items-center justify-center rounded-full bg-lp-ink px-8 text-sm font-semibold text-lp-bg"
            >
              Get started free
            </Link>
            <p className="mt-4 text-[12px] font-medium text-lp-ink-mute">
              No credit card · Join 2,000+ people tracking clearer
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
