"use client"

import {
  CalendarDays,
  ChartPie,
  Layers3,
  Search,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { motion } from "motion/react"

const features: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Fast daily logging",
    desc: "Add an expense or income, pick the account and category, and get back to your day.",
    icon: Zap,
  },
  {
    title: "Today, at a glance",
    desc: "Open to the day that matters. See spend for today, move between dates, review every transaction.",
    icon: CalendarDays,
  },
  {
    title: "Category insights",
    desc: "See where money went by category, then drill into totals, trends, and matching transactions.",
    icon: ChartPie,
  },
  {
    title: "Searchable history",
    desc: "Search transactions, filter by date, account, or type — list or calendar view.",
    icon: Search,
  },
  {
    title: "All your accounts",
    desc: "Cash, bank, wallet, and credit side by side. Balances update as you track.",
    icon: Layers3,
  },
  {
    title: "Built for control",
    desc: "Hide balances, customize themes and categories, import and export when you need to.",
    icon: ShieldCheck,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <motion.div
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-[520px]">
            <p className="lp-section-label">
              <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
              Built around daily use
            </p>
            <h2 className="lp-display mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-lp-ink sm:text-[44px] lg:text-[52px]">
              Everything you need.
              <br />
              Nothing you don&apos;t.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-lp-ink-mute lg:pb-1">
            From quick entries to category drill-downs — money questions stay close without turning
            tracking into another chore.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {features.map(({ title, desc, icon: Icon }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lp-feat group rounded-2xl border border-lp-line bg-lp-card p-6 sm:p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-lp-line bg-lp-em-tint text-lp-em transition-colors duration-200 group-hover:border-lp-em/20 group-hover:bg-lp-em-soft">
                <Icon size={18} strokeWidth={2.1} aria-hidden="true" />
              </div>
              <h3 className="lp-display mt-5 text-lg font-semibold tracking-[-0.02em] text-lp-ink">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-lp-ink-mute">{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
