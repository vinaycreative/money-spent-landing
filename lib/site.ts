export const siteName = "MoneySpent"

export const siteDescription =
  "MoneySpent is a simple personal finance tracker for expenses, budgets, accounts, balances, and spending insights."

export function getSiteUrl() {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "moneyspent.app"

  return new URL(rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`)
}
