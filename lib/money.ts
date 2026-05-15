export const formatCurrency = (minorUnits: number, currency = "INR", locale = "en-IN"): string =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(minorUnits / 100)

export function formatMoney(amount: number): string {
  const currency = typeof window !== "undefined" ? localStorage.getItem("currency") ?? "INR" : "INR"
  const locales: Record<string, string> = {
    INR: "en-IN",
    USD: "en-US",
    EUR: "de-DE",
    GBP: "en-GB",
    AED: "ar-AE",
    SGD: "en-SG",
  }
  return new Intl.NumberFormat(locales[currency] ?? "en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount) // ← no division
}
