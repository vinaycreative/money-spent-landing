"use client"

import { TrendingDown, TrendingUp, X } from "lucide-react"
import DummyDashboard from "@/components/DummyDashboard"
import { motion, useReducedMotion, type Variants } from "motion/react"

export function ScreenGallery() {
  const reduceMotion = useReducedMotion()

  const phones = [
    { alt: "Add expense sheet", pos: "lp-gallery-left" as const, sheet: "expense" as const },
    { alt: "Dashboard", pos: "lp-gallery-center" as const, sheet: null },
    { alt: "Add income sheet", pos: "lp-gallery-right" as const, sheet: "income" as const },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const phoneVariants: Variants = {
    hidden: (pos: string) => ({
      opacity: 0,
      y: 56,
      rotate: pos === "lp-gallery-left" ? -8 : pos === "lp-gallery-right" ? 8 : 0,
    }),
    visible: (pos: string) => ({
      opacity: 1,
      y: 0,
      rotate: pos === "lp-gallery-left" ? -3 : pos === "lp-gallery-right" ? 3 : 0,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 18,
        bounce: 0.15,
      },
    }),
  }

  return (
    <section className="overflow-hidden py-16 lg:py-28 text-lp-ink">
      <div className="mx-auto max-w-[1120px] px-5 text-center sm:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="lp-section-label mx-auto">
            <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
            The product
          </p>
          <h2 className="lp-display mx-auto mt-3 max-w-[560px] text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[42px] lg:text-[48px]">
            Built for how people actually spend.
          </h2>
          <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-relaxed text-lp-ink-mute sm:text-base">
            Three taps to log. One tap to see where it went.
          </p>
        </motion.div>

        {/* Bordered stage */}
        <div className="relative mx-auto mt-12 overflow-hidden rounded-[28px] border border-lp-line bg-lp-bg-2/55 px-6 py-16 sm:mt-16 sm:rounded-[36px] sm:px-10 sm:py-24 lg:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,color-mix(in_srgb,var(--lp-em)_11%,transparent),transparent_68%)]"
          />

          <motion.div
            className="relative flex items-center justify-start gap-5 overflow-x-auto scrollbar-hide sm:justify-center sm:gap-0 sm:overflow-visible sm:-space-x-14 md:-space-x-20"
            variants={containerVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {phones.map(({ alt, pos, sheet }) => (
              <motion.div
                key={alt}
                custom={pos}
                variants={phoneVariants}
                className={`lp-gallery-phone relative shrink-0 transition-transform duration-500 ease-out hover:z-30 sm:hover:-translate-y-3 ${
                  pos === "lp-gallery-center"
                    ? "z-20 sm:-translate-y-6 sm:scale-[1.1]"
                    : "z-10 sm:translate-y-5 sm:scale-[0.92]"
                }`}
              >
                <div
                  className={`relative h-[460px] w-[248px] overflow-hidden rounded-[32px] border border-lp-line bg-lp-card p-1.5 sm:h-[520px] sm:w-[280px] sm:rounded-[40px] sm:p-2 ${
                    pos === "lp-gallery-center"
                      ? "shadow-[0_24px_60px_rgba(11,18,16,0.14)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.55)]"
                      : "shadow-[0_16px_40px_rgba(11,18,16,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                  }`}
                >
                  <div className="dark relative flex h-full w-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#0d0e0c] sm:rounded-[32px]">
                    <div className="absolute left-1/2 top-2 z-30 h-[14px] w-[58px] -translate-x-1/2 rounded-full bg-[#1a1c19] sm:h-4 sm:w-[68px]" />
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="origin-top-left h-[147%] w-[147%] scale-[0.68]">
                        <DummyDashboard />
                      </div>
                    </div>
                    {sheet ? <GallerySheetPreview type={sheet} /> : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GallerySheetPreview({ type }: { type: "expense" | "income" }) {
  const isExpense = type === "expense"
  const Icon = isExpense ? TrendingDown : TrendingUp
  const accent = isExpense ? "var(--expense, #ee7d96)" : "var(--income, #3ab87f)"
  const title = isExpense ? "Add Expense" : "Add Income"
  const sentence = isExpense
    ? ["I spent", "₹450", "on", "coffee", "as", "Food", "from", "Cash", "today"]
    : ["I received", "₹25,000", "from", "salary", "as", "Salary", "into", "HDFC", "today"]
  const suggestions = isExpense ? ["₹50", "₹100", "₹150", "₹200"] : ["₹500", "₹1k", "₹2.5k", "₹5k"]

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 rounded-t-[24px] border-t border-line bg-surface shadow-[0_-16px_40px_rgba(0,0,0,0.4)]">
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-line-strong" />
      <div className="grid grid-cols-[2rem_1fr_2rem] items-center gap-2 border-b border-line px-3 pb-2 pt-3 text-center">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface-elevated text-ms-muted">
          <X size={13} />
        </span>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-ink">{title}</div>
          <div className="text-[9px] font-medium text-ms-muted">Fill the sentence to save</div>
        </div>
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface-elevated"
          style={{ color: accent }}
          role="img"
          aria-label={isExpense ? "Expense icon" : "Income icon"}
        >
          <Icon size={14} aria-hidden="true" />
        </span>
      </div>
      <div className="px-4 py-4 text-left">
        <p className="text-[16px] font-bold leading-[1.25] tracking-[-0.03em] text-ink">
          {sentence.map((word, index) => {
            const highlighted =
              word.startsWith("₹") ||
              ["coffee", "Food", "Cash", "salary", "Salary", "HDFC"].includes(word)

            return highlighted ? (
              <span
                key={`${word}-${index}`}
                className="mx-0.5 inline-flex rounded-md px-1.5 py-0.5"
                style={{
                  background: `color-mix(in srgb, ${accent} 12%, transparent)`,
                  color: accent,
                }}
              >
                {word}
              </span>
            ) : (
              <span key={`${word}-${index}`}>{word} </span>
            )
          })}
        </p>
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {suggestions.map((amount) => (
            <span
              key={amount}
              className="rounded-lg border border-line bg-surface-alt py-2 text-center text-[10px] font-bold text-ink"
            >
              {amount}
            </span>
          ))}
        </div>
        <button
          type="button"
          tabIndex={-1}
          className="mt-3 w-full rounded-xl py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white"
          style={{ background: accent }}
        >
          Save {isExpense ? "expense" : "income"}
        </button>
      </div>
    </div>
  )
}
