"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { flushSync } from "react-dom"

export function LpThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-9 w-9 shrink-0 rounded-full" style={{ background: "var(--lp-bg-2)" }} />
  }

  const isDark = resolvedTheme === "dark"

  function toggle() {
    const newTheme = isDark ? "light" : "dark"

    // Fallback for browsers that don't support View Transitions API
    if (!document.startViewTransition) {
      document.documentElement.classList.add("transitioning")
      setTheme(newTheme)
      setTimeout(() => document.documentElement.classList.remove("transitioning"), 500)
      return
    }

    // Use View Transitions API for smooth switching
    document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme)
      })
    })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="lp-theme-btn relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        size={16}
        strokeWidth={2}
        className="lp-theme-icon"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(90deg) scale(0.3)" : "rotate(0deg) scale(1)",
        }}
      />
      <Moon
        size={16}
        strokeWidth={2}
        className="lp-theme-icon absolute"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.3)",
        }}
      />
    </button>
  )
}
