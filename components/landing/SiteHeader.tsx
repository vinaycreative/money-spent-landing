"use client"

import Image from "next/image"
import Link from "next/link"
import posthog from "posthog-js"
import { LpThemeToggle } from "@/components/LpThemeToggle"
import { useAppUrl } from "@/hooks/use-app-url"

export function SiteHeader() {
  const navLinks = [
    ["#features", "Features"],
    ["#sentence", "How it works"],
    ["#pricing", "Pricing"],
  ] as const

  const loginUrl = useAppUrl("/login")
  const onboardingUrl = useAppUrl("/onboarding")

  return (
    <header className="sticky top-0 z-50 border-b border-lp-line/80 bg-lp-header-bg backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5 sm:h-[68px] sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt=""
            width={28}
            height={28}
            priority
            className="transition duration-300 group-hover:rotate-6"
          />
          <span className="text-[17px] tracking-tight text-lp-ink">
            <span className="font-semibold">Money</span>
            <span className="font-normal text-lp-ink-soft">Spent</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center">
          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="lp-nav-link rounded-lg px-3 py-2 text-[13px] font-medium"
              >
                {label}
              </Link>
            ))}
            <div className="mx-3 h-4 w-px bg-lp-line" />
          </div>

          <div className="flex items-center gap-2">
            <LpThemeToggle />
            <Link
              href={loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lp-nav-link hidden rounded-lg px-3 py-2 text-[13px] font-medium sm:inline-flex"
              onClick={() => posthog.capture("header_sign_in_clicked", { location: "header" })}
            >
              Sign in
            </Link>
            <Link
              href={onboardingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lp-btn-primary inline-flex min-h-9 items-center rounded-full bg-lp-ink px-4 text-[13px] font-semibold text-lp-bg"
              onClick={() => posthog.capture("header_try_it_free_clicked", { location: "header" })}
            >
              Try free
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
