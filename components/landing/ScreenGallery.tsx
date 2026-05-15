"use client"

import { TrendingDown, TrendingUp, X } from "lucide-react"
import DummyDashboard from "@/components/DummyDashboard"
import { motion, type Variants } from "motion/react"

export function ScreenGallery() {
  const phones = [
    { alt: "Add expense sheet", pos: "lp-gallery-left", sheet: "expense" as const },
    { alt: "Dashboard", pos: "lp-gallery-center", sheet: null },
    { alt: "Add income sheet", pos: "lp-gallery-right", sheet: "income" as const },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const phoneVariants: Variants = {
    hidden: (pos: string) => ({ 
      opacity: 0, 
      y: 60,
      rotate: pos === "lp-gallery-left" ? -8 : pos === "lp-gallery-right" ? 8 : 0 
    }),
    visible: (pos: string) => ({ 
      opacity: 1, 
      y: 0, 
      rotate: pos === "lp-gallery-left" ? -3 : pos === "lp-gallery-right" ? 3 : 0,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.2 } 
    }),
  }

  return (
    <section className="overflow-hidden bg-lp-bg py-16 lg:py-32 text-lp-ink transition-colors duration-300">
      <div className="mx-auto max-w-[1280px] px-6 text-center sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-lp-peach">
            <span className="inline-block h-[5px] w-[5px] rounded-full bg-lp-peach" />
            The whole app
          </p>
          <h2 className="lp-serif mx-auto mt-4 max-w-[640px] text-[36px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[44px] lg:text-[54px]">
            Built for the way
            <br />
            real people spend.
          </h2>
          <p className="mx-auto mt-6 max-w-[480px] text-lg leading-[1.5] text-lp-ink-mute sm:text-xl">
            Three taps to log. One tap to see where it went. Zero seconds wasted in setup screens.
          </p>
        </motion.div>

        <motion.div
          className="relative mt-16 flex items-center justify-start gap-6 overflow-x-auto px-4 pb-16 sm:mt-28 sm:justify-center sm:gap-0 sm:overflow-visible sm:px-0 sm:pb-0 sm:-space-x-12 md:-space-x-24 scrollbar-hide"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Decorative Background Elements */}
          <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[800px] pointer-events-none flex items-center justify-center overflow-hidden sm:overflow-visible">
            <motion.svg
              className="absolute w-full h-full opacity-60 dark:opacity-30"
              viewBox="0 0 1440 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Top Curvy Line */}
              <motion.path
                d="M-200 480C300 480 450 280 720 280C990 280 1140 480 1640 480"
                stroke="currentColor"
                strokeWidth="2"
                className="text-lp-peach"
                strokeDasharray="4 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
              {/* Middle Curvy Line */}
              <motion.path
                d="M-200 520C350 520 500 320 720 320C940 320 1090 520 1640 520"
                stroke="currentColor"
                strokeWidth="1"
                className="text-lp-line"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                viewport={{ once: true }}
              />
              {/* Baseline */}
              <motion.line 
                x1="-200" y1="680" x2="1640" y2="680" 
                stroke="currentColor" 
                strokeWidth="1" 
                className="text-lp-line" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                viewport={{ once: true }}
              />
            </motion.svg>
            {/* Glowing Blob */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-transparent via-lp-peach/10 to-transparent blur-[100px] rounded-[100%] opacity-50 dark:opacity-20" />
          </div>

          {phones.map(({ alt, pos, sheet }) => (
            <motion.div
              key={alt}
              custom={pos}
              variants={phoneVariants}
              className={`relative shrink-0 transition-transform duration-500 ease-out sm:hover:-translate-y-4 hover:z-30 ${
                pos === "lp-gallery-center"
                  ? "z-20 sm:-translate-y-8 sm:scale-[1.12]"
                  : "z-10 sm:translate-y-4 sm:scale-[0.92]"
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-[32px] bg-lp-bg p-2 w-[260px] h-[480px] sm:w-[280px] sm:h-[520px] sm:rounded-[40px] sm:p-2.5 transition-shadow duration-300 ${
                  pos === "lp-gallery-center"
                    ? "shadow-[0_20px_40px_rgba(0,0,0,0.1),0_0_0_1px_var(--color-lp-line)] sm:shadow-[0_40px_100px_rgba(0,0,0,0.25),0_0_0_1px_var(--color-lp-line)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_0_1px_var(--color-lp-line-soft)]"
                    : "shadow-[0_20px_40px_rgba(0,0,0,0.08),0_0_0_1px_var(--color-lp-line)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.12),0_0_0_1px_var(--color-lp-line)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_var(--color-lp-line-soft)]"
                }`}
              >
                <div className="dark relative flex h-full w-full flex-col overflow-hidden rounded-[24px] bg-[#0d0c0a] sm:rounded-[30px] border border-white/10">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-2 z-30 h-[14px] w-[60px] -translate-x-1/2 rounded-[20px] bg-lp-bg dark:bg-[#1a1714] sm:h-[16px] sm:w-[68px]" />
                  
                  {/* Dashboard Background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="origin-top-left h-[147%] w-[147%] scale-[0.68]">
                      <DummyDashboard />
                    </div>
                  </div>
                  
                  {/* Sheet Overlay */}
                  {sheet ? <GallerySheetPreview type={sheet} /> : null}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
    <div className="absolute inset-x-0 bottom-0 z-20 rounded-t-[28px] border-t border-line bg-surface shadow-[0_-20px_52px_rgba(0,0,0,0.4)]">
      <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-line-strong" />
      <div className="grid grid-cols-[2rem_1fr_2rem] items-center gap-2 border-b border-line px-3 pb-2 pt-3 text-center">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface-elevated text-ms-muted">
          <X size={13} />
        </span>
        <div>
          <div className="text-[11px] font-black uppercase tracking-[0.12em] text-ink">
            {title}
          </div>
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
        <p className="text-[18px] font-black leading-[1.22] tracking-[-0.04em] text-ink">
          {sentence.map((word, index) => {
            const highlighted =
              word.startsWith("₹") ||
              ["coffee", "Food", "Cash", "salary", "Salary", "HDFC"].includes(word)

            return highlighted ? (
              <span
                key={`${word}-${index}`}
                className="mx-0.5 inline-flex rounded-lg px-1.5 py-0.5"
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
        <div className="mt-4 grid grid-cols-4 gap-1.5">
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
          className="mt-3 w-full rounded-xl py-3 text-[11px] font-black uppercase tracking-[0.12em] text-white"
          style={{ background: accent }}
        >
          Save {isExpense ? "expense" : "income"}
        </button>
      </div>
    </div>
  )
}
