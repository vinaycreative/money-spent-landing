import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Spend",
  description: "MoneySpent app route.",
  path: "/spend",
  noIndex: true,
})

export default function SpendPage() {
  return <div>Spend</div>
}
