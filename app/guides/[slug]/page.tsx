import { notFound } from "next/navigation"
import { guides, getGuide } from "@/constant/guides"
import { SeoContentPage } from "@/components/landing/SeoContentPage"
import { buildPageMetadata } from "@/lib/seo"

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}

  return buildPageMetadata({
    title: guide.title,
    description: guide.description,
    path: guide.path,
    keywords: [guide.eyebrow, "MoneySpent", "personal finance", "expense tracker"],
  })
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuide(slug)

  if (!guide) notFound()

  return (
    <SeoContentPage
      eyebrow={guide.eyebrow}
      h1={guide.h1}
      intro={guide.intro}
      sections={guide.sections}
      faq={guide.faq}
      related={guide.related}
      softwareDescription={guide.description}
      path={guide.path}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: guide.eyebrow, path: guide.path },
      ]}
    />
  )
}
