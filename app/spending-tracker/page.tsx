import { getIntentPage } from "@/constant/intent-pages"
import { SeoContentPage } from "@/components/landing/SeoContentPage"
import { buildPageMetadata } from "@/lib/seo"

const page = getIntentPage("spending-tracker")!

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: [
    "spending tracker",
    "free spending tracker",
    "daily spending tracker",
    "spending tracker app",
    "MoneySpent",
  ],
})

export default function SpendingTrackerPage() {
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
        { name: "Spending tracker", path: page.path },
      ]}
    />
  )
}
