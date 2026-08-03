import Link from "next/link"
import dynamic from "next/dynamic"
import { blogCategories, blogPosts } from "@/constant/blog"
import { defaultAuthor } from "@/constant/author"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { Breadcrumbs } from "@/components/landing/Breadcrumbs"
import { UseCaseHeroSection } from "@/components/landing/UseCaseHeroSection"
import { AuthorCard } from "@/components/landing/AuthorCard"
import { RelatedLinks } from "@/components/landing/RelatedLinks"
import { JsonLd } from "@/components/landing/JsonLd"
import { breadcrumbJsonLd, buildPageMetadata, webPageJsonLd } from "@/lib/seo"

const CtaSection = dynamic(() =>
  import("@/components/landing/CtaSection").then((mod) => mod.CtaSection),
)
const SiteFooter = dynamic(() =>
  import("@/components/landing/SiteFooter").then((mod) => mod.SiteFooter),
)

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]

export const metadata = buildPageMetadata({
  title: "MoneySpent Blog | Expense Tracking & Budgeting Tips",
  description:
    "Practical articles on daily expense tracking, monthly budgets, UPI spending habits, freelance finances, subscriptions, and couples budgeting—from MoneySpent.",
  path: "/blog",
  keywords: [
    "MoneySpent blog",
    "expense tracking tips",
    "budgeting blog",
    "personal finance articles",
  ],
})

export default function BlogHubPage() {
  const posts = [...blogPosts].sort(
    (a, b) => +new Date(b.datePublished) - +new Date(a.datePublished),
  )

  return (
    <main className="lp-root min-h-svh">
      <JsonLd
        data={webPageJsonLd({
          name: "MoneySpent Blog",
          description:
            "Articles on expense tracking, budgeting, UPI habits, and practical personal finance.",
          path: "/blog",
        })}
      />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <SiteHeader />
      <Breadcrumbs items={crumbs} />
      <UseCaseHeroSection
        eyebrow="Blog"
        title="Practical money writing for people who actually spend."
        subHeadline="Guides are evergreen playbooks. The blog is where we go deeper on habits, India-specific spending, comparisons, and real-life budgeting systems—written by Vinay Bhadre."
      />

      <section className="border-b border-lp-line py-10">
        <div className="flex justify-center px-5">
          <AuthorCard author={defaultAuthor} compact />
        </div>
      </section>

      <section className="border-b border-lp-line py-12 lg:py-16">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="mx-auto max-w-[640px] text-center">
            <p className="lp-section-label mx-auto">
              <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
              Topics
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {blogCategories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-lp-line bg-lp-card px-3 py-1.5 text-[12px] font-medium text-lp-ink-soft"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="mx-auto max-w-[720px] space-y-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={post.path}
                className="block rounded-2xl border border-lp-line bg-lp-card px-5 py-5 text-left transition-colors hover:border-lp-em/35 sm:px-6"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-lp-em">
                  <span>{post.category}</span>
                  <span className="text-lp-ink-mute">·</span>
                  <span className="normal-case tracking-normal text-lp-ink-mute">
                    {post.readingMinutes} min read
                  </span>
                  <span className="text-lp-ink-mute">·</span>
                  <span className="normal-case tracking-normal text-lp-ink-mute">
                    By {defaultAuthor.name}
                  </span>
                </div>
                <h2 className="lp-display mt-2 text-xl font-semibold tracking-[-0.02em] text-lp-ink sm:text-2xl">
                  {post.h1}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-lp-ink-soft sm:text-[15px]">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-[12px] text-lp-ink-mute">
                  {new Date(post.datePublished).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/guides", label: "Guides" },
          { href: "/features", label: "Features" },
          { href: "/expense-tracker", label: "Expense tracker" },
          { href: "/budget-tracker", label: "Budget tracker" },
          { href: "/for", label: "Use cases" },
        ]}
      />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
