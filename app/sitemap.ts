import { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site"
import { useCases } from "@/constant/use-cases"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl().toString().replace(/\/$/, "")

  const coreRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" as const },
    { route: "/expense-tracker", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/budget-tracker", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/faq", priority: 0.85, changeFrequency: "monthly" as const },
    { route: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency,
    priority,
  }))

  const useCaseRoutes = useCases.map((useCase) => ({
    url: `${baseUrl}/for/${useCase.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...coreRoutes, ...useCaseRoutes]
}
