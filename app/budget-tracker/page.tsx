import { getIntentPage } from "@/constant/intent-pages"
import { SeoContentPage } from "@/components/landing/SeoContentPage"
import { buildPageMetadata } from "@/lib/seo"

const page = getIntentPage("budget-tracker")!

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: [
    "budget tracker",
    "free budget tracker",
    "budget tracker app",
    "personal budget tracker",
    "MoneySpent",
  ],
})

export default function BudgetTrackerPage() {
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
        { name: "Budget tracker", path: page.path },
      ]}
    />
  )
}
