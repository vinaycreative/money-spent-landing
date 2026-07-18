"use client"

import { BadgeCheck, Clock3, CreditCard, IndianRupee, type LucideIcon } from "lucide-react"
import { motion } from "motion/react"

export function ProofStrip() {
  const items: { icon: LucideIcon; bold: string; rest: string }[] = [
    { icon: IndianRupee, bold: "₹0", rest: " free forever" },
    { icon: BadgeCheck, bold: "No ads", rest: " or upsells" },
    { icon: CreditCard, bold: "No card", rest: " needed to start" },
    { icon: Clock3, bold: "2 min", rest: " to set up" },
  ]

  return (
    <div className="lp-proof-strip relative overflow-hidden border-y border-lp-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_50%_50%,color-mix(in_srgb,var(--lp-em)_8%,transparent),transparent_70%)]"
      />
      <div className="relative mx-auto flex max-w-[1120px] justify-center px-5 sm:px-8">
        <motion.ul
          className="flex w-auto flex-wrap items-center justify-center gap-x-5 gap-y-3 py-6 sm:gap-y-0 sm:divide-x sm:divide-lp-line sm:py-7"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {items.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.bold}
                className="flex w-auto items-center gap-2.5 sm:gap-3 sm:px-5 lg:px-7"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-lp-line bg-lp-card/90 text-lp-em shadow-[var(--lp-shadow-sm)] backdrop-blur-sm sm:h-9 sm:w-9 sm:rounded-xl">
                  <Icon size={15} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <p className="whitespace-nowrap text-[13px] font-medium leading-none text-lp-ink-mute">
                  <strong className="font-semibold text-lp-ink">{item.bold}</strong>
                  {item.rest}
                </p>
              </li>
            )
          })}
        </motion.ul>
      </div>
    </div>
  )
}
