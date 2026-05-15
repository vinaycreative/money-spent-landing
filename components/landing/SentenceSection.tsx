"use client"

import { AnimatedSentence } from "@/components/AnimatedSentence"
import { motion, type Variants } from "motion/react"

export function SentenceSection() {
  const formFields = ["Amount", "Category", "Account", "Merchant", "Note", "Date"]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="sentence" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <motion.div
          className="text-center sm:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="mx-auto flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-lp-em sm:mx-0"
          >
            <span className="inline-block h-[5px] w-[5px] rounded-full bg-lp-em" />
            Quick logging
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="lp-serif mt-4 text-[36px] font-semibold leading-[1.1] tracking-[-0.03em] text-lp-ink sm:text-[48px] lg:text-[54px]"
          >
            Add spends like
            <br />
            writing a note.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 mx-auto max-w-[600px] text-lg leading-[1.5] text-lp-ink-soft sm:mx-0 sm:text-xl"
          >
            One sentence, a few taps, and your expense/income is saved.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 grid-cols-1 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Bad: old way */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col rounded-[28px] bg-lp-bg-2 p-8 sm:p-10"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="mb-4 inline-flex w-fit rounded-full bg-[rgba(28,25,22,.06)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-lp-ink-mute">
              Every other app
            </span>
            <h3 className="lp-serif text-2xl font-semibold text-lp-ink">
              A form for every coffee.
            </h3>
            <p className="mt-2 text-sm leading-[1.55] text-lp-ink-mute">
              Amount, category, payment method, merchant, note, date, tags. Six taps and a keyboard
              before you&apos;ve even saved.
            </p>
            <div className="mt-6 flex flex-1 flex-col gap-2">
              {formFields.map((field) => (
                <div
                  key={field}
                  className="flex items-center justify-between rounded-xl border border-lp-line bg-lp-card px-3.5 py-2.5 text-xs"
                >
                  <span className="font-bold uppercase tracking-[0.06em] text-lp-ink-mute">
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
                </div>
              ))}
              <div className="mt-2 rounded-xl bg-[rgba(28,25,22,.08)] py-3 text-center text-sm font-semibold text-lp-ink-mute">
                Save
              </div>
            </div>
          </motion.div>

          {/* Good: MoneySpent */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col rounded-[28px] bg-lp-card p-8 shadow-[0_1px_0_var(--lp-line-soft)] sm:p-10"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="mb-4 inline-flex w-fit rounded-full bg-lp-em-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-lp-em-deep">
              MoneySpent
            </span>
            <h3 className="lp-serif text-2xl font-semibold text-lp-ink">One sentence. Done.</h3>
            <p className="mt-2 text-sm leading-[1.55] text-lp-ink-mute">
              Tap a blank, pick a value, move on. Each tap reveals the right tool — numpad, emoji
              grid, or quick-pick chips. Save with one button.
            </p>
            <AnimatedSentence />
            <div className="mt-6 flex items-center gap-2.5 text-[13px] text-lp-ink-mute">
              <span className="rounded-md bg-lp-em-tint px-2 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-lp-em-deep">
                4 taps
              </span>
              <span>to amount + save. The rest auto-completes from your last entry.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

