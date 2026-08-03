export const siteName = "MoneySpent"

export const siteDescription =
  "MoneySpent is a free personal finance tracker for expenses, budgets, accounts, balances, and spending insights—private, ad-free, and built for daily use."

/** Canonical production origin — must match the GSC property you want indexed. */
export const CANONICAL_SITE_ORIGIN = "https://www.moneyspent.app"

/**
 * Absolute site URL for metadataBase, sitemap, and robots.
 * Never use Vercel preview/production hostnames here — they can stick to an old
 * custom domain (e.g. moneyspend.app) and poison canonicals / sitemaps.
 */
export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || CANONICAL_SITE_ORIGIN

  let url: URL
  try {
    url = new URL(raw.startsWith("http") ? raw : `https://${raw}`)
  } catch {
    return new URL(CANONICAL_SITE_ORIGIN)
  }

  // Migrate typo / old domain if still set in env
  if (url.hostname === "moneyspend.app" || url.hostname === "www.moneyspend.app") {
    return new URL(CANONICAL_SITE_ORIGIN)
  }

  // Prefer www for the primary brand domain
  if (url.hostname === "moneyspent.app") {
    return new URL(CANONICAL_SITE_ORIGIN)
  }

  return url
}
