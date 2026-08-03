import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Get started",
  description: "Start tracking with MoneySpent.",
  path: "/onboarding",
  noIndex: true,
})

export default function OnboardingPage() {
  return <div>Onboarding</div>
}
