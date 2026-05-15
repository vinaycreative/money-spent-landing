"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, type Variants } from "motion/react"

export function SiteFooter() {
  const cols = [
    {
      title: "Product",
      links: [
        ["#features", "Features"],
        ["#how-it-works", "How it works"],
        ["/onboarding", "Get started"],
        ["/login", "Sign in"],
      ],
    },
    // {
    //   title: "Resources",
    //   links: [
    //     ["#", "Help Center"],
    //     ["#", "Blog"],
    //     ["#", "Contact Support"],
    //     ["#", "System Status"],
    //   ],
    // },
    {
      title: "Legal",
      links: [
        ["#", "Privacy Policy"],
        ["#", "Terms of Service"],
        ["#", "Cookie Policy"],
      ],
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="relative w-full overflow-hidden border-t border-lp-line bg-lp-bg px-4 pt-6 sm:px-6">
      <div className="mx-auto w-full max-w-[1280px]">
        <motion.div
          className="relative w-full overflow-hidden px-6 pb-0 pt-8 sm:px-10 sm:pt-10 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
            <motion.div variants={itemVariants}>
              <Link href="/" className="group inline-flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl border border-lp-footer-line bg-lp-footer-logo-bg">
                  <Image
                    src="/logo.svg"
                    alt=""
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
            </motion.div>

            <div className="mt-12 grid gap-8 grid-cols-2 lg:gap-10">
              {cols.map(({ title, links }) => (
                <motion.div key={title} variants={itemVariants}>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-lp-footer-ink">
                    {title}
                  </h3>
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
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative mt-10 flex flex-col gap-4 border-t border-lp-footer-line py-6 text-center text-sm text-lp-footer-muted sm:flex-row sm:text-left sm:items-center sm:justify-between"
          >
            <p>© {new Date().getFullYear()} MoneySpent. All rights reserved.</p>
            <p className="sm:absolute sm:left-1/2 sm:-translate-x-1/2">Made with ❤️ in India</p>
            <p>
              Developed by{" "}
              <Link
                href="https://vinaycreative.com/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-lp-footer-ink hover:underline"
              >
                vinaycreative
              </Link>
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-full max-h-64 w-full max-w-3xl rounded-full bg-lp-footer-word blur-[120px] dark:hidden" /> */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              aria-hidden="true"
              className="mt-6 text-center text-[clamp(2.5rem,15vw,10rem)] font-extrabold leading-[0.8] text-transparent [-webkit-text-stroke:1px_var(--lp-footer-line-strong)]"
            >
              MoneySpent
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
