"use client"

import Image from "next/image"
import Link from "next/link"
import posthog from "posthog-js"
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
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt=""
            width={32}
            height={32}
            priority
            className="transition duration-300 group-hover:rotate-6 group-hover:scale-110"
          />
          <span className="text-[19px] tracking-tight text-lp-ink">
            <span className="font-semibold">Money</span>
            <span className="font-normal">Spent</span>
          </span>
        </Link>

        {/* Nav */}
        <nav aria-label="Main navigation" className="flex items-center">
          {/* Desktop-only links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="lp-nav-link rounded-lg px-3.5 py-2 text-sm font-medium"
              >
                {label}
              </Link>
            ))}
            <div className="mx-4 h-4 w-px bg-lp-line" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LpThemeToggle />
            <Link
              href="https://my.moneyspent.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-nav-link hidden rounded-lg px-3.5 py-2 text-sm font-medium sm:inline-flex"
              onClick={() => posthog.capture("header_sign_in_clicked", { location: "header" })}
            >
              Sign in
            </Link>
            <Link
              href="https://my.moneyspent.app/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="lp-btn-primary inline-flex min-h-10 items-center gap-1.5 rounded-full bg-lp-ink px-4 text-[13px] font-semibold text-lp-bg sm:px-5 sm:text-sm"
              onClick={() => posthog.capture("header_try_it_free_clicked", { location: "header" })}
            >
              <span className="hidden sm:inline">Try it free</span>
              <span className="inline sm:hidden">Try it</span>
              <span className="hidden sm:inline">→</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
