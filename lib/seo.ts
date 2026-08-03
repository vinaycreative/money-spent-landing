import type { Metadata } from "next"
import { CANONICAL_SITE_ORIGIN, getSiteUrl, siteDescription, siteName } from "@/lib/site"

export type FaqItem = { question: string; answer: string }
export type BreadcrumbItem = { name: string; path: string }

const defaultOgImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${siteName} Preview`,
}

/** Build consistent page metadata with canonical, OG, and Twitter. */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
  noIndex?: boolean
}): Metadata {
  const normalizedPath = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`

  // Avoid "Title | MoneySpent | MoneySpent" when the title already includes the brand.
  const resolvedTitle =
    title.includes(siteName) || title.includes("|")
      ? ({ absolute: title } as const)
      : title

  return {
    title: resolvedTitle,
    description,
    keywords,
    alternates: { canonical: normalizedPath },
    openGraph: {
      title,
      description,
      url: normalizedPath,
      siteName,
      images: [defaultOgImage],
      type: path.startsWith("/blog/") ? "article" : "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  }
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl().toString().replace(/\/$/, "")
  if (!path || path === "/") return `${base}/`
  return `${base}${path.startsWith("/") ? path : `/${path}`}`
}

export function softwareApplicationJsonLd(description = siteDescription) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteName,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web, iOS, Android",
    description,
    url: CANONICAL_SITE_ORIGIN,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free forever for personal use",
    },
    featureList: [
      "Expense tracking",
      "Budget tracking",
      "Account balance tracking",
      "Spending analytics",
      "Personal finance dashboard",
      "Category insights",
    ],
  }
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: `${CANONICAL_SITE_ORIGIN}/`,
    logo: `${CANONICAL_SITE_ORIGIN}/logo.svg`,
    description: siteDescription,
    sameAs: ["https://vinaycreative.com/"],
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: ["Money Spent", "moneyspent.app"],
    url: `${CANONICAL_SITE_ORIGIN}/`,
    description: siteDescription,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: `${CANONICAL_SITE_ORIGIN}/`,
    },
    inLanguage: "en",
  }
}

export function faqJsonLd(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function webPageJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: `${CANONICAL_SITE_ORIGIN}/`,
    },
  }
}

export function blogPostingJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
  keywords,
  author,
}: {
  title: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  keywords?: string[]
  author?: {
    name: string
    path: string
    sameAs?: string[]
    role?: string
  }
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: "en",
    keywords: keywords?.join(", "),
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          url: absoluteUrl(author.path),
          jobTitle: author.role,
          sameAs: author.sameAs,
        }
      : {
          "@type": "Organization",
          name: siteName,
          url: `${CANONICAL_SITE_ORIGIN}/`,
        },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: `${CANONICAL_SITE_ORIGIN}/`,
      logo: {
        "@type": "ImageObject",
        url: `${CANONICAL_SITE_ORIGIN}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
    image: [`${CANONICAL_SITE_ORIGIN}/og.png`],
  }
}
