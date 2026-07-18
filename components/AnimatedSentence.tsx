"use client"

import { Fragment, useEffect, useRef, useState } from "react"

export type SentenceWord = {
  text: string
  after: string
  color: string
  bg: string
}

const DEFAULT_WORDS: SentenceWord[] = [
  {
    text: "₹450",
    after: " on ",
    color: "var(--lp-em)",
    bg: "var(--lp-em-soft)",
  },
  {
    text: "Food",
    after: " at ",
    color: "var(--lp-amber)",
    bg: "var(--lp-amber-soft)",
  },
  {
    text: "Burger King",
    after: " paid with ",
    color: "var(--lp-rose)",
    bg: "var(--lp-rose-soft)",
  },
  {
    text: "HDFC Bank",
    after: ".",
    color: "var(--lp-indigo)",
    bg: "var(--lp-indigo-soft)",
  },
]

export function AnimatedSentence({ words = DEFAULT_WORDS }: { words?: SentenceWord[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    function go(idx: number) {
      setActiveIdx(idx)

      timerRef.current = setTimeout(() => {
        setActiveIdx(null)
        const next = (idx + 1) % words.length
        const gap = next === 0 ? 2000 : 420
        timerRef.current = setTimeout(() => go(next), gap)
      }, 800)
    }

    timerRef.current = setTimeout(() => go(0), 600)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [words.length])

  return (
    <div className="lp-serif mt-6 flex-1 text-[28px] font-medium leading-[1.5] tracking-[-0.018em] text-lp-ink-mute">
      {"I spent "}
      {words.map((seg, i) => {
        const active = activeIdx === i
        return (
          <Fragment key={i}>
            <span
              className="lp-sent-word"
              style={{
                color: seg.color,
                transform: active ? "scale(1.08)" : "scale(1)",
                backgroundColor: active ? seg.bg : "transparent",
                boxShadow: active ? `0 0 0 6px ${seg.bg}` : `0 0 0 0px ${seg.bg}`,
              }}
            >
              {seg.text}
            </span>
            {seg.after}
          </Fragment>
        )
      })}
    </div>
  )
}
