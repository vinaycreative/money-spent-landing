import { notFound } from "next/navigation"
import { features, getFeature } from "@/constant/features"
import { SeoContentPage } from "@/components/landing/SeoContentPage"
import { buildPageMetadata } from "@/lib/seo"

export async function generateStaticParams() {
  return features.map((feature) => ({ slug: feature.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const feature = getFeature(slug)
  if (!feature) return {}

  return buildPageMetadata({
    title: feature.title,
    description: feature.description,
    path: feature.path,
    keywords: [
      feature.navLabel,
      "MoneySpent",
      "expense tracker",
      "personal finance tracker",
    ],
  })
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const feature = getFeature(slug)

  if (!feature) notFound()

  return (
    <SeoContentPage
      eyebrow={feature.eyebrow}
      h1={feature.h1}
      intro={feature.intro}
      sections={feature.sections}
      faq={feature.faq}
      related={[
        { href: "/features", label: "All features" },
        ...feature.related,
      ]}
      softwareDescription={feature.description}
      path={feature.path}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: feature.navLabel, path: feature.path },
      ]}
    />
  )
}
