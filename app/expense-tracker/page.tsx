import type { Metadata } from "next"
import { getIntentPage } from "@/constant/intent-pages"
import { SeoContentPage } from "@/components/landing/SeoContentPage"

const page = getIntentPage("expense-tracker")!

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
  keywords: [
    "expense tracker",
    "free expense tracker",
    "daily expense tracker",
    "expense tracker app",
    "MoneySpent",
  ],
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.path,
  },
}

export default function ExpenseTrackerPage() {
  return (
    <SeoContentPage
      eyebrow={page.eyebrow}
      h1={page.h1}
      intro={page.intro}
      sections={page.sections}
      faq={page.faq}
      related={page.related}
      softwareDescription={page.description}
    />
  )
}
