import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Sign in",
  description: "Sign in to MoneySpent.",
  path: "/login",
  noIndex: true,
})

export default function LoginPage() {
  return <div>Login</div>
}
