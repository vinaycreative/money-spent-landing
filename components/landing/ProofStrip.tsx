"use client"

import {
  BadgeCheck,
  Clock3,
  CreditCard,
  IndianRupee,
  type LucideIcon,
} from "lucide-react"

export function ProofStrip() {
  const items: { icon: LucideIcon; bold: string; rest: string }[] = [
    { icon: IndianRupee, bold: "₹0", rest: " free forever for personal tracking" },
    { icon: BadgeCheck, bold: "No ads", rest: " or noisy upsells" },
    { icon: CreditCard, bold: "No credit card", rest: " needed to start" },
    { icon: Clock3, bold: "2 min", rest: " to set up accounts and categories" },
  ]
  return (
    <div className="border-y border-lp-line bg-lp-bg py-10">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 text-[13px] font-medium text-lp-ink-mute">
          {items.map((item, i) => {
            const Icon = item.icon

            return (
              <span key={i} className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-lp-line bg-lp-bg-2 text-lp-ink-soft">
                  <Icon size={15} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span>
                  <strong className="font-semibold text-lp-ink">{item.bold}</strong>
                  {item.rest}
                </span>
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
