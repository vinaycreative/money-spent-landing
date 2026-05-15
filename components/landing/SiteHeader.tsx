"use client"

import Image from "next/image"
import Link from "next/link"
import { LpThemeToggle } from "@/components/LpThemeToggle"
import { motion } from "motion/react"

export function SiteHeader() {
  const navLinks = [
    ["#features", "Features"],
    ["#sentence", "How it works"],
  ] as const

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-lp-line bg-lp-header-bg backdrop-blur-lg backdrop-saturate-[1.5]"
    >
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
        <nav className="flex items-center gap-1">
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
            <div className="mx-3 h-4 w-px bg-lp-line" />
          </div>
          <LpThemeToggle />
          {/* Always visible: theme toggle + CTA */}
          <Link
            href="/login"
            className="lp-nav-link hidden rounded-lg px-3.5 py-2 text-sm font-medium sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            href="/onboarding"
            className="lp-btn-primary ml-1 inline-flex min-h-10 items-center gap-1.5 rounded-full bg-lp-ink px-4 text-[13px] font-semibold text-lp-bg sm:px-5 sm:text-sm"
          >
            <span className="hidden sm:inline">Try it free</span>
            <span className="inline sm:hidden">Try it</span>
            <span className="hidden sm:inline">→</span>
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}

