"use client"

import { EyeOff, Lock, ShieldCheck } from "lucide-react"
import { motion } from "motion/react"

const points = [
  {
    icon: Lock,
    title: "Private by design",
    desc: "Your money data stays yours. No ads, no selling your spending habits.",
  },
  {
    icon: EyeOff,
    title: "Hide when you need to",
    desc: "Blur balances on demand so sensitive numbers stay off curious screens.",
  },
  {
    icon: ShieldCheck,
    title: "You stay in control",
    desc: "Export your records anytime. No lock-in, no mystery subscription trap.",
  },
]

export function PrivacySection() {
  return (
    <section id="privacy" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-lp-ink px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          {/* Soft depth, not loud glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_0%,rgba(58,184,127,0.18),transparent_55%),radial-gradient(ellipse_50%_40%_at_90%_100%,rgba(255,255,255,0.06),transparent_50%)]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lp-em">
                Trust
              </p>
              <h2 className="lp-display mt-3 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-lp-bg sm:text-[40px]">
                Your finances deserve a quiet room.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-lp-inv-muted sm:text-base">
                Built for personal clarity — not attention, ads, or data harvesting.
              </p>
            </motion.div>

            <ul className="relative space-y-0">
              {points.map(({ icon: Icon, title, desc }, i) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex gap-4 border-t border-lp-inv-border py-5 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-lp-em ring-1 ring-white/10 transition-colors duration-200 group-hover:bg-lp-em/15">
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-tight text-lp-bg sm:text-base">
                      {title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-lp-inv-muted">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
