"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { flushSync } from "react-dom"
import { Sun, Moon, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
  noLabel?: boolean
}

export function ThemeToggle({ className, noLabel }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch — don't render until mounted on client
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  const options = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
  ] as const

  // const handleThemeChange = (value: string) => {
  //   document.documentElement.classList.add("transitioning")
  //   setTheme(value)
  //   setTimeout(() => {
  //     document.documentElement.classList.remove("transitioning")
  //   }, 400)
  // }

  const handleThemeChange = (value: string) => {
    // Fallback for browsers that don't support it yet
    if (!document.startViewTransition) {
      setTheme(value)
      return
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setTheme(value)
      })
    })
  }

  return (
    <div className="flex items-center gap-1 p-1 rounded-xl bg-surface-elevated w-fit">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => handleThemeChange(value)}
          aria-label={`Switch to ${label} theme`}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium",
            "transition-all duration-200 min-h-[36px]",
            "-webkit-tap-highlight-color: transparent",
            theme === value
              ? "bg-surface text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Icon size={15} />
          {!noLabel && <span>{label}</span>}
        </button>
      ))}
    </div>
  )
}
