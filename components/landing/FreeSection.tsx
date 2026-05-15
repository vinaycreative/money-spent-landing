"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { motion, type Variants } from "motion/react"

export function FreeSection() {
  const features = [
    "Unlimited manual transactions",
    "Track multiple accounts & cards",
    "Smart category management",
    "Personalized spending insights",
    "100% private, on-device data",
    "No ads, no data tracking",
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="pricing" className="bg-lp-bg py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <motion.div
          className="relative isolate overflow-hidden rounded-[48px] border border-lp-line bg-lp-card p-8 sm:p-12 lg:p-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, var(--lp-ink) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-lp-em opacity-[0.08] blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-lp-peach opacity-[0.08] blur-[100px]" />

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-24">
            <div>
              <motion.p
                variants={itemVariants}
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-lp-em"
              >
                <span className="inline-block h-1 w-3 rounded-full bg-lp-em" />
                Pricing
              </motion.p>
              <motion.h2
                variants={itemVariants}
                className="lp-serif mt-6 text-[44px] font-semibold leading-[1.05] tracking-[-0.04em] text-lp-ink sm:text-[56px] lg:text-[72px]"
              >
                Premium tracking, <br />
                <span className="text-lp-em italic">completely free.</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="mt-8 max-w-xl text-lg leading-[1.6] text-lp-ink-soft sm:text-xl"
              >
                MoneySpent is built for people, not for profit. Enjoy a professional finance
                workspace without the monthly subscription.
              </motion.p>

              <div className="mt-12 grid gap-y-4 gap-x-8 sm:grid-cols-2">
                {features.map((feature, i) => (
                  <motion.div key={i} className="flex items-center gap-3" variants={itemVariants}>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lp-em/10 text-lp-em">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-base font-medium text-lp-ink-soft">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
              className="flex flex-col items-center justify-center rounded-[40px] border border-lp-line bg-lp-bg-2 p-10 text-center lg:min-w-[380px] lg:p-14"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-lp-ink-mute">
                Personal Plan
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="lp-serif text-[80px] font-semibold leading-none tracking-tighter text-lp-ink sm:text-[100px]">
                  $0
                </span>
                <span className="text-xl font-medium text-lp-ink-mute">/mo</span>
              </div>
              <p className="mt-4 text-sm font-medium text-lp-ink-soft">
                Free forever for personal use
              </p>

              <Link
                href="/onboarding"
                className="lp-btn-primary mt-10 inline-flex w-full min-h-14 items-center justify-center gap-2 rounded-full bg-lp-ink px-8 text-base font-bold text-lp-bg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Get started free →
              </Link>
              <p className="mt-6 text-[12px] font-medium text-lp-ink-mute">
                No credit card required. <br className="sm:hidden" />
                Join 2,000+ happy users.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

