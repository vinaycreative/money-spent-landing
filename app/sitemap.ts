import { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site"
import { useCases } from "@/constant/use-cases"
import { intentPages } from "@/constant/intent-pages"
import { guides } from "@/constant/guides"
import { features } from "@/constant/features"
import { blogPosts } from "@/constant/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl().toString().replace(/\/$/, "")
  const today = new Date().toISOString().split("T")[0]

  const coreRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" as const },
    { route: "/features", priority: 0.95, changeFrequency: "weekly" as const },
    { route: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/author/vinay-bhadre", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/how-it-works", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/faq", priority: 0.85, changeFrequency: "monthly" as const },
    { route: "/for", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/guides", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/compare/spreadsheet", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: today,
    changeFrequency,
    priority,
  }))

  const intentRoutes = intentPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  const featureRoutes = features.map((feature) => ({
    url: `${baseUrl}${feature.path}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  const useCaseRoutes = useCases.map((useCase) => ({
    url: `${baseUrl}/for/${useCase.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const guideRoutes = guides.map((guide) => ({
    url: `${baseUrl}${guide.path}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }))

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}${post.path}`,
    lastModified: post.dateModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }))

  return [
    ...coreRoutes,
    ...intentRoutes,
    ...featureRoutes,
    ...useCaseRoutes,
    ...guideRoutes,
    ...blogRoutes,
  ]
}
