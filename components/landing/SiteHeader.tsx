"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import posthog from "posthog-js"
import { LpThemeToggle } from "@/components/LpThemeToggle"
import { useAppUrl } from "@/hooks/use-app-url"
import { features } from "@/constant/features"

function navClass(active: boolean) {
  return `lp-nav-link rounded-lg px-3 py-2 text-[13px] font-medium${active ? " lp-nav-link-active" : ""}`
}

export function SiteHeader() {
  const pathname = usePathname()
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const loginUrl = useAppUrl("/login")
  const onboardingUrl = useAppUrl("/onboarding")

  const featuresActive = pathname === "/features" || pathname.startsWith("/features/")
  const howItWorksActive = pathname === "/how-it-works"
  const pricingActive = pathname === "/pricing"
  const guidesActive = pathname === "/guides" || pathname.startsWith("/guides/")
  const blogActive = pathname === "/blog" || pathname.startsWith("/blog/")

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setFeaturesOpen(false)
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setFeaturesOpen(false)
    }
    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-lp-line/80 bg-lp-header-bg backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5 sm:h-[68px] sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt="MoneySpent"
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
            <Link
              href="/features"
              className={`${navClass(featuresActive)} lg:hidden`}
              aria-current={featuresActive ? "page" : undefined}
            >
              Features
            </Link>

            <div className="relative hidden lg:block" ref={menuRef}>
              <button
                type="button"
                className={`lp-nav-link inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium${featuresActive ? " lp-nav-link-active" : ""}`}
                aria-expanded={featuresOpen}
                aria-haspopup="true"
                aria-current={featuresActive ? "page" : undefined}
                onClick={() => setFeaturesOpen((open) => !open)}
              >
                Features
                <ChevronDown
                  className={`size-3.5 transition-transform ${featuresOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>

              {featuresOpen ? (
                <div className="absolute left-0 top-full z-50 mt-2 w-[280px] rounded-2xl border border-lp-line bg-lp-card p-2 shadow-[var(--lp-shadow-md)]">
                  <Link
                    href="/features"
                    className={`block rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-colors hover:bg-lp-em-tint ${
                      pathname === "/features" ? "bg-lp-em-tint text-lp-ink" : "text-lp-ink"
                    }`}
                    onClick={() => setFeaturesOpen(false)}
                  >
                    All features
                  </Link>
                  <div className="my-1 h-px bg-lp-line" />
                  {features.map((feature) => {
                    const active = pathname === feature.path
                    return (
                      <Link
                        key={feature.slug}
                        href={feature.path}
                        className={`block rounded-xl px-3 py-2.5 text-[13px] transition-colors hover:bg-lp-em-tint hover:text-lp-ink ${
                          active ? "bg-lp-em-tint font-medium text-lp-ink" : "text-lp-ink-soft"
                        }`}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {feature.navLabel}
                      </Link>
                    )
                  })}
                </div>
              ) : null}
            </div>

            <Link
              href="/how-it-works"
              className={navClass(howItWorksActive)}
              aria-current={howItWorksActive ? "page" : undefined}
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className={navClass(pricingActive)}
              aria-current={pricingActive ? "page" : undefined}
            >
              Pricing
            </Link>
            <Link
              href="/guides"
              className={navClass(guidesActive)}
              aria-current={guidesActive ? "page" : undefined}
            >
              Guides
            </Link>
            <Link
              href="/blog"
              className={navClass(blogActive)}
              aria-current={blogActive ? "page" : undefined}
            >
              Blog
            </Link>
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
