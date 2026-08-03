import { getIntentPage } from "@/constant/intent-pages"
import { SeoContentPage } from "@/components/landing/SeoContentPage"
import { buildPageMetadata } from "@/lib/seo"

const page = getIntentPage("expense-tracker")!

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: [
    "expense tracker",
    "free expense tracker",
    "daily expense tracker",
    "expense tracker app",
    "MoneySpent",
  ],
})

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
      path={page.path}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Expense tracker", path: page.path },
      ]}
    />
  )
}
