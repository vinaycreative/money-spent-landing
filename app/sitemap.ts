import { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site"
import { useCases } from "@/constant/use-cases"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl().toString().replace(/\/$/, "")

  // Core routes
  const routes = ["", "/privacy", "/terms", "/cookies"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: (route === "" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly"
      | "always"
      | "hourly"
      | "daily"
      | "yearly"
      | "never",
    priority: route === "" ? 1 : 0.8,
  }))

  const useCaseRoutes = useCases.map((useCase) => ({
    url: `${baseUrl}/for/${useCase.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...routes, ...useCaseRoutes]
}
