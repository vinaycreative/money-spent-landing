"use client"

import {
  BadgeCheck,
  Clock3,
  CreditCard,
  IndianRupee,
  type LucideIcon,
} from "lucide-react"
import { motion, type Variants } from "motion/react"

export function ProofStrip() {
  const items: { icon: LucideIcon; bold: string; rest: string }[] = [
    { icon: IndianRupee, bold: "₹0", rest: " free forever for personal tracking" },
    { icon: BadgeCheck, bold: "No ads", rest: " or noisy upsells" },
    { icon: CreditCard, bold: "No credit card", rest: " needed to start" },
    { icon: Clock3, bold: "2 min", rest: " to set up accounts and categories" },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="border-y border-lp-line bg-lp-bg py-8 lg:py-10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 text-[13px] font-medium text-lp-ink-mute"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((item, i) => {
            const Icon = item.icon

            return (
              <motion.div key={i} className="flex items-center gap-3" variants={itemVariants}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-lp-line bg-lp-bg-2 text-lp-ink-soft">
                  <Icon size={16} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <p className="leading-tight">
                  <strong className="font-semibold text-lp-ink">{item.bold}</strong>
                  {item.rest}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

