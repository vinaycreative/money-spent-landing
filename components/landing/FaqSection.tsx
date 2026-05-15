"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"

import { faq } from "@/constant/faq"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-lp-bg py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="mb-16 text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-lp-em">
            <span className="inline-block h-1 w-3 rounded-full bg-lp-em" />
            Support
          </p>
          <h2 className="lp-serif mt-5 text-[40px] font-semibold tracking-[-0.03em] text-lp-ink sm:text-[48px]">
            Frequently Asked Questions
          </h2>
        </div>

        <dl className="space-y-4 mx-auto max-w-[800px]">
          {faq.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl border border-lp-line bg-lp-card transition-all duration-300"
            >
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  className="flex w-full items-center justify-between p-6 text-left sm:p-8"
                >
                  <span
                    id={`faq-question-${i}`}
                    className="text-lg font-semibold tracking-tight text-lp-ink sm:text-xl"
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lp-bg-2 text-lp-ink transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={20} aria-hidden="true" />
                  </span>
                </button>
              </dt>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.dd
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="m-0"
                  >
                    <div className="border-t border-lp-line/50 px-6 pb-8 pt-4 sm:px-8">
                      <p className="text-base leading-[1.7] text-lp-ink-soft sm:text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
