"use client"

import { AnimatedSentence, type SentenceWord } from "@/components/AnimatedSentence"
import { motion } from "motion/react"

export function SentenceSection({ sentenceWords }: { sentenceWords?: SentenceWord[] }) {
  const formFields = ["Amount", "Category", "Account", "Merchant", "Note", "Date"]

  return (
    <section id="sentence" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <motion.div
          className="max-w-[560px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="lp-section-label">
            <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
            Quick logging
          </p>
          <h2 className="lp-display mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-lp-ink sm:text-[44px] lg:text-[52px]">
            Add spends like
            <br />
            writing a note.
          </h2>
          <p className="mt-5 max-w-[480px] text-base leading-relaxed text-lp-ink-soft sm:text-lg">
            One sentence, a few taps, and your expense is saved — without a form for every coffee.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-2xl border border-lp-line bg-lp-bg-2/70 p-7 sm:p-9"
          >
            <span className="mb-4 inline-flex w-fit rounded-md bg-lp-ink/6 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-lp-ink-mute">
              Typical apps
            </span>
            <h3 className="lp-display text-xl font-semibold text-lp-ink sm:text-2xl">
              A form for every coffee.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-lp-ink-mute">
              Amount, category, payment method, merchant, note, date. Six fields before you&apos;ve
              even saved.
            </p>
            <div className="mt-6 flex flex-1 flex-col gap-2">
              {formFields.map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                  className="flex items-center justify-between rounded-xl border border-lp-line bg-lp-card px-3.5 py-2.5 text-xs"
                >
                  <span className="font-semibold uppercase tracking-[0.05em] text-lp-ink-mute">
                    {field}
                  </span>
                  <span className="text-lp-ink-tert">
                    {field === "Amount"
                      ? "₹0.00"
                      : field === "Date"
                        ? "Today"
                        : field === "Note"
                          ? "Optional"
                          : "Select…"}
                  </span>
                </motion.div>
              ))}
              <div className="mt-2 rounded-xl bg-lp-ink/8 py-3 text-center text-sm font-semibold text-lp-ink-mute">
                Save
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-2xl border border-lp-line bg-lp-card p-7 shadow-[var(--lp-shadow-sm)] sm:p-9"
          >
            <span className="mb-4 inline-flex w-fit rounded-md bg-lp-em-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-lp-em-deep">
              MoneySpent
            </span>
            <h3 className="lp-display text-xl font-semibold text-lp-ink sm:text-2xl">
              One sentence. Done.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-lp-ink-mute">
              Tap a blank, pick a value, move on. Each tap reveals the right tool — then save once.
            </p>
            <AnimatedSentence words={sentenceWords} />
            <div className="mt-6 flex items-start gap-2.5 text-[13px] text-lp-ink-mute">
              <span className="shrink-0 rounded-md bg-lp-em-tint px-2 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-lp-em-deep">
                4 taps
              </span>
              <span className="leading-snug">
                to amount + save. The rest auto-completes from your last entry.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
