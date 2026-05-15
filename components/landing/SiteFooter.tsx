"use client"

import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  const cols = [
    {
      title: "Product",
      links: [
        ["#features", "Features"],
        ["#sentence", "How it works"],
        ["/onboarding", "Get started"],
        ["/login", "Sign in"],
      ],
    },
    {
      title: "Explore",
      links: [
        ["#features", "Dashboard"],
        ["#features", "Analytics"],
        ["#sentence", "Budget flow"],
        ["https://vinaycreative.com/", "Creator"],
      ],
    },
    {
      title: "Trust",
      links: [
        ["#", "Private by design"],
        ["#", "No card required"],
        ["#", "Free for early users"],
        ["#", "Made in Bangalore"],
      ],
    },
  ]

  return (
    <footer className="relative w-full overflow-hidden border-t border-lp-line bg-lp-bg px-4 pt-6 sm:px-6">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="relative w-full overflow-hidden px-6 pb-0 pt-8 sm:px-10 sm:pt-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
            <div>
              <Link
                href="/"
                className="group inline-flex items-center gap-3"
                aria-label="MoneySpent home"
              >
                <span className="grid size-11 place-items-center rounded-2xl border border-lp-footer-line bg-lp-footer-logo-bg">
                  <Image
                    src="/logo.svg"
                    alt="MoneySpent"
                    width={28}
                    height={28}
                    className="transition duration-300 group-hover:rotate-6 group-hover:scale-110"
                  />
                </span>
                <span className="text-[20px] tracking-tight text-lp-footer-ink">
                  <span className="font-bold">Money</span>
                  <span className="font-normal">Spent</span>
                </span>
              </Link>

              <h2 className="lp-serif mt-8 max-w-[640px] text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] text-lp-footer-ink sm:text-[56px] lg:text-[64px]">
                Spend clearer.
                <br />
                Save calmer.
              </h2>
              <p className="mt-5 max-w-[520px] text-base leading-[1.65] text-lp-footer-muted">
                Track accounts, expenses, and spending patterns in a personal finance workspace
                that stays clean, fast, and easy to read.
              </p>
            </div>

            <div className="mt-22 grid gap-8 sm:grid-cols-3 lg:gap-10">
              {cols.map(({ title, links }) => (
                <div key={title}>
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-lp-footer-ink">
                    {title}
                  </h4>
                  <ul className="space-y-3">
                    {links.map(([href, label]) => (
                      <li key={label}>
                        <Link
                          href={href}
                          className="text-sm text-lp-footer-muted opacity-78 transition hover:opacity-100"
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-lp-footer-line py-5 text-sm font-medium text-lp-footer-muted sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 MoneySpent. All Right Reserved.</span>
            <span>Made with ❤️ in India</span>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-full max-h-64 w-full max-w-3xl rounded-full bg-slate-100 blur-[100px]" />
            <h1 className="mt-6 text-center text-[clamp(1rem,15vw,10rem)] font-extrabold leading-[0.7] text-transparent [-webkit-text-stroke:1px_#D4D4D4]">
              MoneySpent
            </h1>
          </div>
        </div>
      </div>
    </footer>
  )
}
