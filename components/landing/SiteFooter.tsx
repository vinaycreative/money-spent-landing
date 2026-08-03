"use client"

import Image from "next/image"
import Link from "next/link"
import posthog from "posthog-js"
import { useAppUrl } from "@/hooks/use-app-url"

export function SiteFooter() {
  const loginUrl = useAppUrl("/login")
  const onboardingUrl = useAppUrl("/onboarding")
  const cols = [
    {
      title: "Product",
      links: [
        ["/features", "All features"],
        ["/features/daily-logging", "Daily logging"],
        ["/features/today-view", "Today view"],
        ["/features/category-insights", "Category insights"],
        ["/features/searchable-history", "Searchable history"],
        ["/features/accounts", "Accounts"],
        ["/features/control", "Privacy & control"],
        ["/how-it-works", "How it works"],
        ["/pricing", "Pricing"],
        ["/expense-tracker", "Expense tracker"],
        [onboardingUrl, "Get started"],
        [loginUrl, "Sign in"],
      ],
    },
    {
      title: "Learn",
      links: [
        ["/blog", "Blog"],
        ["/author/vinay-bhadre", "Author: Vinay Bhadre"],
        ["/guides", "Guides"],
        ["/faq", "FAQ"],
        ["/for", "Use cases"],
        ["/for/freelancers", "For freelancers"],
        ["/for/students", "For students"],
        ["/for/couples", "For couples"],
        ["/compare/spreadsheet", "vs Spreadsheets"],
        ["/about", "About"],
      ],
    },
    {
      title: "Legal",
      links: [
        ["/privacy", "Privacy Policy"],
        ["/terms", "Terms of Service"],
        ["/cookies", "Cookie Policy"],
      ],
    },
  ]

  return (
    <footer className="border-t border-lp-line bg-lp-bg">
      <div className="mx-auto max-w-[1120px] px-5 pt-14 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-lg border border-lp-line bg-lp-card">
                <Image
                  src="/logo.svg"
                  alt="MoneySpent"
                  width={22}
                  height={22}
                  className="transition duration-300 group-hover:rotate-6"
                />
              </span>
              <span className="text-[17px] tracking-tight text-lp-ink">
                <span className="font-semibold">Money</span>
                <span className="font-normal text-lp-ink-soft">Spent</span>
              </span>
            </Link>

            <h2 className="lp-display mt-8 max-w-[420px] text-[32px] font-semibold leading-[1.05] tracking-[-0.035em] text-lp-ink sm:text-[40px]">
              Spend clearer.
              <br />
              Save calmer.
            </h2>
            <p className="mt-4 max-w-[400px] text-[15px] leading-relaxed text-lp-ink-mute">
              Free personal finance tracker for expenses, budgets, accounts, and spending insights
              clean, private, and built for daily use.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map(({ title, links }) => (
              <div key={title}>
                <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-lp-ink">
                  {title}
                </h3>
                <ul className="space-y-2.5">
                  {links.map(([href, label]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-lp-ink-mute transition-colors duration-150 hover:text-lp-ink"
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                        onClick={() =>
                          (label === "Get started" || label === "Sign in") &&
                          posthog.capture("footer_cta_clicked", { label, location: "footer" })
                        }
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

        <div className="mt-12 flex flex-col gap-3 border-t border-lp-line py-6 text-center text-[13px] text-lp-ink-mute sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} MoneySpent</p>
          <p>
            Built by{" "}
            <Link
              href="https://vinaycreative.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-lp-ink transition-opacity hover:opacity-70"
            >
              vinaycreative
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
