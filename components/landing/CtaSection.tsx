"use client"

import Link from "next/link"

export function CtaSection() {
  return (
    <section id="download" className="min-h-[800px] bg-lp-bg py-20 lg:py-[104px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="relative isolate grid items-center gap-12 overflow-hidden rounded-[36px] border border-lp-inv-border bg-lp-ink p-8 shadow-[0_32px_90px_rgba(0,0,0,0.16)] sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-20 lg:p-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 78% 18%, var(--lp-em) 0 11%, transparent 30%), radial-gradient(circle at 20% 88%, var(--lp-peach) 0 8%, transparent 26%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.16]"
            style={{
              backgroundImage: "radial-gradient(circle, var(--lp-bg) 1.2px, transparent 1.2px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full border border-lp-inv-border"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 left-1/2 -z-10 h-80 w-80 rounded-full border border-lp-inv-border"
          />

          <div className="relative z-10">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-lp-peach">
              <span className="inline-block h-[5px] w-[5px] rounded-full bg-lp-peach" />
              Free for early users
            </p>
            <h2 className="lp-serif mt-4 text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-lp-bg lg:text-[54px]">
              Start tracking
              <br />
              in under a minute.
            </h2>
            <p className="mt-4 max-w-md text-base leading-[1.6] text-lp-inv-muted">
              Sign in with Google, add your first account, and log your first expense in under two
              minutes. No card required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/onboarding"
                className="lp-btn-primary inline-flex min-h-12 items-center gap-2 rounded-full bg-lp-bg px-6 text-sm font-semibold text-lp-ink"
              >
                Start free →
              </Link>
              <Link
                href="/login"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-lp-inv-border px-6 text-sm font-medium text-lp-inv-link transition hover:opacity-80"
              >
                Sign in
              </Link>
            </div>
          </div>

          {/* CTA illustration */}
          <div
            className="relative hidden h-[300px] w-[320px] shrink-0 place-items-center lg:grid"
            aria-hidden="true"
          >
            <svg viewBox="0 0 320 300" width="320" height="300">
              <defs>
                <radialGradient id="ctaCurrencyGlow" cx="50%" cy="50%" r="58%">
                  <stop offset="0%" stopColor="var(--lp-em)" stopOpacity=".92" />
                  <stop offset="62%" stopColor="var(--lp-em)" stopOpacity=".34" />
                  <stop offset="100%" stopColor="var(--lp-em)" stopOpacity="0" />
                </radialGradient>
                <filter id="ctaCurrencyShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="18" stdDeviation="18" floodOpacity=".28" />
                </filter>
              </defs>

              <circle cx="160" cy="150" r="126" fill="url(#ctaCurrencyGlow)" />
              <circle
                cx="160"
                cy="150"
                r="102"
                fill="none"
                stroke="var(--lp-bg)"
                strokeWidth="1.5"
                strokeDasharray="3 9"
                opacity=".28"
              />
              <circle
                cx="160"
                cy="150"
                r="72"
                fill="var(--lp-em)"
                filter="url(#ctaCurrencyShadow)"
                opacity=".95"
              />
              <circle
                cx="160"
                cy="150"
                r="58"
                fill="none"
                stroke="var(--lp-bg)"
                strokeWidth="1.5"
                strokeDasharray="4 7"
                opacity=".32"
              />
              {["₹", "$", "€", "¥", "£", "₩"].map((symbol, index) => (
                <text
                  key={`center-${symbol}`}
                  x="160"
                  y="177"
                  fontFamily="var(--font-fraunces), Georgia, serif"
                  fontWeight="700"
                  fontSize="78"
                  fill="var(--lp-bg)"
                  textAnchor="middle"
                  letterSpacing="-2"
                  opacity={index === 0 ? "1" : "0"}
                >
                  <animate
                    attributeName="opacity"
                    calcMode="discrete"
                    dur="6s"
                    repeatCount="indefinite"
                    values={["₹", "$", "€", "¥", "£", "₩"]
                      .map((_, symbolIndex) => (symbolIndex === index ? "1" : "0"))
                      .join(";")}
                  />
                  {symbol}
                </text>
              ))}

              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 160 150"
                  to="360 160 150"
                  dur="28s"
                  repeatCount="indefinite"
                />
                {[
                  { symbol: "$", x: 160, y: 32, fill: "var(--lp-peach)", color: "var(--lp-ink)" },
                  { symbol: "€", x: 260, y: 88, fill: "var(--lp-bg)", color: "var(--lp-em)" },
                  { symbol: "¥", x: 250, y: 210, fill: "var(--lp-peach)", color: "var(--lp-ink)" },
                  { symbol: "£", x: 160, y: 270, fill: "var(--lp-bg)", color: "var(--lp-ink)" },
                  { symbol: "₩", x: 60, y: 210, fill: "var(--lp-bg)", color: "var(--lp-em)" },
                  { symbol: "฿", x: 50, y: 88, fill: "var(--lp-peach)", color: "var(--lp-ink)" },
                ].map(({ symbol, x, y, fill, color }) => (
                  <g key={symbol}>
                    <circle cx={x} cy={y} r="21" fill={fill} opacity=".94" />
                    <text
                      x={x}
                      y={y + 6}
                      fontFamily="Inter, sans-serif"
                      fontWeight="800"
                      fontSize="16"
                      fill={color}
                      textAnchor="middle"
                    >
                      {symbol}
                    </text>
                  </g>
                ))}
              </g>

              <g stroke="var(--lp-peach)" strokeWidth="2" strokeLinecap="round" opacity=".9">
                <path d="M46 45 v10 M41 50 h10" />
                <path d="M276 238 v10 M271 243 h10" />
                <path d="M246 34 v8 M242 38 h8" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
