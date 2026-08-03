import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { Breadcrumbs } from "@/components/landing/Breadcrumbs"
import { BlogHero } from "@/components/landing/BlogHero"
import { AuthorCard } from "@/components/landing/AuthorCard"
import { UseCaseContentSection } from "@/components/landing/UseCaseContentSection"
import { RelatedLinks } from "@/components/landing/RelatedLinks"
import { JsonLd } from "@/components/landing/JsonLd"
import type { BlogPost } from "@/constant/blog"
import { defaultAuthor } from "@/constant/author"
import {
  blogPostingJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo"

const FaqSection = dynamic(() =>
  import("@/components/landing/FaqSection").then((mod) => mod.FaqSection),
)
const CtaSection = dynamic(() =>
  import("@/components/landing/CtaSection").then((mod) => mod.CtaSection),
)
const SiteFooter = dynamic(() =>
  import("@/components/landing/SiteFooter").then((mod) => mod.SiteFooter),
)

export function BlogArticle({ post }: { post: BlogPost }) {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.category, path: "/blog" },
    {
      name: post.h1.length > 42 ? `${post.h1.slice(0, 42)}…` : post.h1,
      path: post.path,
    },
  ]

  return (
    <main className="lp-root min-h-svh">
      <JsonLd
        data={blogPostingJsonLd({
          title: post.h1,
          description: post.description,
          path: post.path,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          keywords: post.keywords,
          author: defaultAuthor,
        })}
      />
      <JsonLd data={faqJsonLd(post.faq)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={softwareApplicationJsonLd(post.description)} />
      <SiteHeader />
      <Breadcrumbs items={breadcrumbItems} />
      <BlogHero post={post} />
      <UseCaseContentSection contentBlocks={post.sections} />
      <AuthorCard author={defaultAuthor} />
      <FaqSection customFaq={post.faq} />
      <RelatedLinks title="Keep reading" links={post.related} />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
