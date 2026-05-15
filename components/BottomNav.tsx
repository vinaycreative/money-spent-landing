"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"
import { Home, BarChart2, Settings, ArrowRightLeft, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

import { AddExpenseSheet } from "@/components/sheet/AddExpenseSheet"

const NAV_ITEMS = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/spend", label: "Spend", icon: ArrowRightLeft },
  { href: "/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/account", label: "Account", icon: Building2 },
  { href: "/settings", label: "Settings", icon: Settings },
] as const

export function BottomNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* <div
        className="w-12 h-12 custom-shadown fixed bottom-20 right-4 flex items-center justify-center text-center text-sm text-ms-muted z-50 bg-card shadow-lg shadow-black/10 border border-line rounded-full p-2"
        onClick={() => setOpen(true)}
      >
        <Plus size={20} className="text-ms-muted" />
      </div> */}
      <nav
        className={cn(
          "bottom-nav-safe fixed left-0 right-0 z-50",
          "transition-transform duration-300 ease-in-out",
          "bg-background backdrop-blur-xl",
          "border-t border-border/50",
        )}
      >
        <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
          {/* Left two nav items */}
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={pathname === item.href}
            />
          ))}

          {/* Center FAB — add transaction */}
          {/* <button
          // onClick={openAddSheet}
          aria-label="Add transaction"
          className={cn(
            "relative",
            "w-12 h-12 rounded-full",
            "bg-primary text-primary-foreground",
            "flex items-center justify-center",
            "shadow-lg shadow-primary/30",
            "transition-transform duration-150",
            "active:scale-90",
          )}
          onClick={() => setOpen(true)}
        >
          <motion.span
            className="text-2xl font-light leading-none"
            whileTap={{ rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            +
          </motion.span>
        </button> */}

          {/* Right two nav items */}
          {/* {NAV_ITEMS.slice(2).map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={pathname === item.href}
          />
        ))} */}
        </div>
        <AddExpenseSheet open={open} onClose={() => setOpen(false)} selectedDate={new Date()} />
      </nav>
    </>
  )
}

// ─── Single nav item ────────────────────────────────────────────────────────

interface NavItemProps {
  href: string
  label: string
  icon: React.ElementType
  active: boolean
}

function NavItem({ href, label, icon: Icon, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        // Minimum 44px touch target — critical for mobile feel
        "flex flex-col items-center justify-center gap-1",
        "min-w-[44px] min-h-[44px] px-3",
        "rounded-xl transition-colors duration-150",
        "active:bg-accent",
        active ? "text-primary" : "text-muted-foreground",
      )}
    >
      <div className="relative">
        <Icon size={22} strokeWidth={active ? 2.2 : 1.8} />

        {/* Active dot indicator */}
        {active && (
          <motion.span
            layoutId="nav-dot"
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
      </div>

      <span
        className={cn(
          "text-[10px] font-medium",
          active ? "text-primary" : "text-muted-foreground",
        )}
      >
        {label}
      </span>
    </Link>
  )
}
