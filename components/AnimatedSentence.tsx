"use client"

import { Fragment, useEffect, useRef, useState } from "react"

const WORDS = [
  {
    text:  "₹450",
    after: " on ",
    color: "var(--lp-em)",
    bg:    "var(--lp-em-soft)",
  },
  {
    text:  "🍔 Food",
    after: " at ",
    color: "var(--lp-amber)",
    bg:    "var(--lp-amber-soft)",
  },
  {
    text:  "Burger King",
    after: " paid with ",
    color: "var(--lp-rose)",
    bg:    "var(--lp-rose-soft)",
  },
  {
    text:  "Fi",
    after: ".",
    color: "var(--lp-indigo)",
    bg:    "var(--lp-indigo-soft)",
  },
]

export function AnimatedSentence() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    function go(idx: number) {
      setActiveIdx(idx)

      const t1 = setTimeout(() => {
        setActiveIdx(null)
        const next  = (idx + 1) % WORDS.length
        const gap   = next === 0 ? 2000 : 420
        const t2    = setTimeout(() => go(next), gap)
        timers.current.push(t2)
      }, 800)

      timers.current.push(t1)
    }

    const boot = setTimeout(() => go(0), 600)
    timers.current.push(boot)

    return () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
  }, [])

  return (
    <div
      className="lp-serif mt-6 flex-1 text-[28px] font-medium leading-[1.5] tracking-[-0.018em]"
      style={{ color: "var(--lp-ink-mute)" }}
    >
      {"I spent "}
      {WORDS.map((seg, i) => {
        const active = activeIdx === i
        return (
          <Fragment key={i}>
            <span
              className="lp-sent-word"
              style={{
                color:           seg.color,
                transform:       active ? "scale(1.13)"          : "scale(1)",
                backgroundColor: active ? seg.bg                 : "transparent",
                boxShadow:       active ? `0 0 0 7px ${seg.bg}`  : "none",
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
