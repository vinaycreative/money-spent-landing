"use client"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function Page({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let lastY = 0

    const handler = () => {
      const diff = el.scrollTop - lastY
      const nav = document.querySelector("nav")
      if (!nav) return

      if (diff > 8) nav.classList.add("translate-y-full")
      if (diff < -8) nav.classList.remove("translate-y-full")

      lastY = el.scrollTop
    }

    el.addEventListener("scroll", handler, { passive: true })
    return () => el.removeEventListener("scroll", handler)
  }, [])

  return (
    <main
      ref={ref}
      className={cn(
        "relative flex-1 h-svh overflow-y-auto bg-background pb-nav pt-page-safe scrollbar-hide",
        className,
      )}
    >
      {children}
    </main>
  )
}
