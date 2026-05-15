"use client"

import { TrendingDown, TrendingUp, X } from "lucide-react"
import DummyDashboard from "@/components/DummyDashboard"

export function ScreenGallery() {
  const phones = [
    { alt: "Add expense sheet", pos: "lp-gallery-left", sheet: "expense" as const },
    { alt: "Dashboard", pos: "lp-gallery-center", sheet: null },
    { alt: "Add income sheet", pos: "lp-gallery-right", sheet: "income" as const },
  ]

  return (
    <section className="overflow-hidden bg-lp-ink py-[140px] text-lp-bg">
      <div className="mx-auto max-w-[1280px] px-6 text-center sm:px-10">
        <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-lp-peach">
          <span className="inline-block h-[5px] w-[5px] rounded-full bg-lp-peach" />
          The whole app
        </p>
        <h2 className="lp-serif mx-auto mt-4 max-w-[640px] text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] text-lp-bg lg:text-[54px]">
          Built for the way
          <br />
          real people spend.
        </h2>
        <p className="mx-auto mt-6 max-w-[480px] text-xl leading-[1.5] text-lp-inv-muted">
          Three taps to log. One tap to see where it went. Zero seconds wasted in setup screens.
        </p>

        <div className="mt-16 flex items-end justify-center gap-4 sm:gap-6">
          {phones.map(({ alt, pos, sheet }) => (
            <div
              key={alt}
              className={`lp-gallery-phone ${pos} relative shrink-0 overflow-hidden rounded-3xl bg-lp-ink p-[10px] shadow-[0_40px_90px_rgba(0,0,0,.45),0_0_0_1.5px_rgba(255,255,255,.08)] w-[clamp(280px,22vw,280px)] h-[clamp(480px,46vw,520px)]`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-lp-bg">
                <div className="absolute left-1/2 top-2 z-30 h-[clamp(14px,2.4vw,22px)] w-[clamp(42px,7vw,72px)] -translate-x-1/2 rounded-[20px] bg-lp-ink" />
                <div className="absolute inset-0 overflow-hidden">
                  <div className="origin-top-left h-[147%] w-[147%] scale-[0.68]">
                    <DummyDashboard />
                  </div>
                </div>
                {sheet ? <GallerySheetPreview type={sheet} /> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GallerySheetPreview({ type }: { type: "expense" | "income" }) {
  const isExpense = type === "expense"
  const Icon = isExpense ? TrendingDown : TrendingUp
  const accent = isExpense ? "var(--expense)" : "var(--income)"
  const title = isExpense ? "Add Expense" : "Add Income"
  const sentence = isExpense
    ? ["I spent", "₹450", "on", "coffee", "as", "Food", "from", "Cash", "today"]
    : ["I received", "₹25,000", "from", "salary", "as", "Salary", "into", "HDFC", "today"]
  const suggestions = isExpense ? ["₹50", "₹100", "₹150", "₹200"] : ["₹500", "₹1k", "₹2.5k", "₹5k"]

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 rounded-t-[28px] border-t border-line bg-surface shadow-[0_-20px_52px_rgba(0,0,0,0.24)]">
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
        >
          <Icon size={14} />
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
