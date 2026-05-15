"use client"

import Image from "next/image"
import Link from "next/link"
import { LpThemeToggle } from "@/components/LpThemeToggle"

export function SiteHeader() {
  const navLinks = [
    ["#features", "Features"],
    ["#sentence", "How it works"],
  ] as const

  return (
    <header className="sticky top-0 z-50 border-b border-lp-line bg-lp-header-bg backdrop-blur-lg backdrop-saturate-[1.5]">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 sm:px-10">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5" aria-label="MoneySpent home">
          <Image
            src="/logo.svg"
            alt="MoneySpent"
            width={32}
            height={32}
            className="transition duration-300 group-hover:rotate-6 group-hover:scale-110"
          />
          <span className="text-[19px] tracking-tight text-lp-ink">
            <span className="font-semibold">Money</span>
            <span className="font-normal">Spent</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          {/* Desktop-only links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="lp-nav-link rounded-lg px-3.5 py-2 text-sm font-medium"
              >
                {label}
              </Link>
            ))}
            <div className="mx-3 h-4 w-px bg-lp-line" />
          </div>
          <LpThemeToggle />
          {/* Always visible: theme toggle + CTA */}
          <Link href="/login" className="lp-nav-link rounded-lg px-3.5 py-2 text-sm font-medium">
            Sign in
          </Link>
          <Link
            href="/onboarding"
            className="lp-btn-primary ml-1 inline-flex min-h-10 items-center gap-1.5 rounded-full bg-lp-ink px-5 text-sm font-semibold text-lp-bg"
          >
            Try it free →
          </Link>
        </nav>
      </div>
    </header>
  )
}
