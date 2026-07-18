"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"
import posthog from "posthog-js"
import { landingFaq } from "@/constant/faq"

export function FaqSection({
  customFaq,
}: {
  customFaq?: { question: string; answer: string }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const items = customFaq || landingFaq

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            className="lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="lp-section-label">
              <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
              FAQ
            </p>
            <h2 className="lp-display mt-3 text-[32px] font-semibold tracking-[-0.03em] text-lp-ink sm:text-[40px]">
              Common questions
            </h2>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-lp-ink-mute">
              Quick answers about tracking, privacy, and getting started.
            </p>
          </motion.div>

          <dl className="space-y-2">
            {items.map((item, i) => {
              const open = openIndex === i
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className={`rounded-2xl border transition-colors duration-200 ${
                    open
                      ? "border-lp-line bg-lp-card shadow-[var(--lp-shadow-sm)]"
                      : "border-transparent bg-transparent hover:bg-lp-bg-2/70"
                  }`}
                >
                  <dt>
                    <button
                      type="button"
                      onClick={() => {
                        const isOpening = openIndex !== i
                        setOpenIndex(isOpening ? i : null)
                        if (isOpening) {
                          posthog.capture("faq_question_expanded", {
                            question: item.question,
                            question_index: i,
                          })
                        }
                      }}
                      aria-expanded={open}
                      aria-controls={`faq-answer-${i}`}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-[18px]"
                    >
                      <span
                        id={`faq-question-${i}`}
                        className="text-[15px] font-semibold tracking-tight text-lp-ink sm:text-base"
                      >
                        {item.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lp-bg-2 text-lp-ink-mute transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          open ? "rotate-180 text-lp-ink" : ""
                        }`}
                      >
                        <ChevronDown size={16} aria-hidden="true" />
                      </span>
                    </button>
                  </dt>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.dd
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="m-0 overflow-hidden"
                      >
                        <p className="px-4 pb-5 text-[14px] leading-relaxed text-lp-ink-soft sm:px-5 sm:text-[15px]">
                          {item.answer}
                        </p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
}
