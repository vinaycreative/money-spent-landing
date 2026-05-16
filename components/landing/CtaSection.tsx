"use client"

import Link from "next/link"
import { motion } from "motion/react"
import posthog from "posthog-js"
import { useAppUrl } from "@/hooks/use-app-url"

export function CtaSection() {
  const loginUrl = useAppUrl("/login")
  const onboardingUrl = useAppUrl("/onboarding")

  return (
    <section id="download" className="relative isolate py-12 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="relative isolate overflow-hidden rounded-[32px] border border-lp-inv-border bg-lp-ink px-6 py-12 text-center shadow-[0_32px_80px_rgba(0,0,0,0.2)] sm:rounded-[48px] sm:px-12 sm:py-16 lg:py-20">
          {/* Enhanced Background Effects */}
          <motion.div
            initial={{ opacity: 0.3, scale: 1 }}
            whileInView={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1],
            }}
            viewport={{ margin: "200px" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -z-10"
            style={{
              willChange: "transform, opacity",
              background: `
                radial-gradient(circle at 10% 20%, var(--lp-em) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, var(--lp-peach) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)
              `,
            }}
          />
          
          {/* Mesh Noise Texture */}
          <div 
            className="absolute inset-0 -z-10 opacity-[0.02] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Floating Decorative Elements */}
          <FloatingElement delay={0} className="left-[8%] top-[25%] text-2xl opacity-30">₹</FloatingElement>
          <FloatingElement delay={1} className="right-[12%] top-[15%] text-xl opacity-20">$</FloatingElement>
          <FloatingElement delay={0.5} className="left-[12%] bottom-[25%] text-xl opacity-20">€</FloatingElement>
          <FloatingElement delay={1.5} className="right-[8%] bottom-[20%] text-3xl opacity-30">£</FloatingElement>

          <div className="relative z-10 mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-lp-inv-border bg-white/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-lp-peach backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lp-peach opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lp-peach"></span>
                </span>
                Secure & Private
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lp-serif mt-6 text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-lp-bg sm:text-[48px] lg:text-[60px]"
            >
              Start tracking your
              <br />
              wealth in under a minute.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 mx-auto max-w-md text-base leading-relaxed text-lp-inv-muted sm:text-lg"
            >
              Sign in with Google, add your first account, and log your first expense in under two
              minutes. Join the future of personal finance today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-3"
            >
              <Link
                href={onboardingUrl}
                className="group relative inline-flex min-h-12 items-center gap-2 overflow-hidden rounded-full bg-lp-bg px-7 text-sm font-semibold text-lp-ink transition-all hover:scale-105 active:scale-95"
                onClick={() => posthog.capture("cta_get_started_clicked", { location: "cta_section" })}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Now
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
              <Link
                href={loginUrl}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-lp-inv-border bg-white/5 px-7 text-sm font-medium text-lp-inv-link backdrop-blur-md transition-all hover:bg-white/10"
                onClick={() => posthog.capture("cta_sign_in_clicked", { location: "cta_section" })}
              >
                Sign in to account
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 text-[10px] font-medium uppercase tracking-widest text-lp-inv-muted/40"
            >
              No credit card required · Join 10k+ users
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingElement({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: [0, -20, 0] }}
      viewport={{ margin: "100px" }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      style={{ willChange: "transform" }}
      className={`absolute hidden font-serif font-bold text-lp-bg lg:block ${className}`}
    >
      {children}
    </motion.div>
  )
}
