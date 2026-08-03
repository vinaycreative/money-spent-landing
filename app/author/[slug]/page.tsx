import { notFound } from "next/navigation"
import Link from "next/link"
import dynamic from "next/dynamic"
import { authors, getAuthor } from "@/constant/author"
import { blogPosts } from "@/constant/blog"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { Breadcrumbs } from "@/components/landing/Breadcrumbs"
import { RelatedLinks } from "@/components/landing/RelatedLinks"
import { JsonLd } from "@/components/landing/JsonLd"
import Image from "next/image"
import { Globe, SquareUserRound } from "lucide-react"
import { absoluteUrl, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo"

const CtaSection = dynamic(() =>
  import("@/components/landing/CtaSection").then((mod) => mod.CtaSection),
)
const SiteFooter = dynamic(() =>
  import("@/components/landing/SiteFooter").then((mod) => mod.SiteFooter),
)

export async function generateStaticParams() {
  return Object.values(authors).map((author) => ({ slug: author.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) return {}

  return buildPageMetadata({
    title: `${author.name} — Author at MoneySpent`,
    description: author.shortBio,
    path: author.path,
    keywords: [author.name, "MoneySpent author", "vinaycreative", "expense tracker"],
  })
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) notFound()

  const posts = blogPosts
    .slice()
    .sort((a, b) => +new Date(b.datePublished) - +new Date(a.datePublished))

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: author.name, path: author.path },
  ]

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    url: absoluteUrl(author.path),
    jobTitle: author.role,
    description: author.shortBio,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "IN",
    },
    sameAs: author.sameAs,
    worksFor: {
      "@type": "Organization",
      name: "MoneySpent",
      url: "https://www.moneyspent.app/",
    },
  }

  return (
    <main className="lp-root min-h-svh">
      <JsonLd data={personJsonLd} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <SiteHeader />
      <Breadcrumbs items={crumbs} />

      <section className="overflow-hidden border-b border-lp-line pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="mx-auto max-w-[640px] text-center">
            <span className="mx-auto grid size-20 place-items-center rounded-full border border-green-400 bg-lp-em-tint text-xl font-semibold text-lp-em">
              {author.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </span>
            <p className="lp-section-label mx-auto mt-6">
              <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
              Author
            </p>
            <h1 className="lp-display mt-4 text-[36px] font-semibold tracking-[-0.03em] text-lp-ink sm:text-[48px]">
              {author.name}
            </h1>
            <p className="mx-auto mt-3 max-w-[480px] text-base text-lp-ink-soft sm:text-lg">
              {author.role}
            </p>
            <p className="mt-2 text-sm text-lp-ink-mute">{author.location}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="mx-auto max-w-[640px] space-y-5 text-center">
            {author.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-lp-ink-soft sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href={author.website}
                target="_blank"
                rel="noopener noreferrer"
                className="lp-btn-primary group inline-flex min-h-11 items-center gap-2 rounded-full bg-lp-ink px-5 text-sm font-semibold text-lp-bg shadow-[var(--lp-shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--lp-shadow-md)]"
              >
                <Globe
                  className="size-4 opacity-80 transition-transform duration-200 group-hover:scale-[1.1]"
                  aria-hidden
                />
                vinaycreative.com
              </a>
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="lp-btn-ghost group inline-flex min-h-11 items-center gap-2 rounded-full border border-lp-line px-5 text-sm font-medium text-lp-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-lp-em/40 hover:bg-lp-em-tint hover:text-lp-ink"
              >
                <SquareUserRound
                  className="size-4 transition-transform duration-200 group-hover:scale-[1.1]"
                  aria-hidden
                />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-lp-line py-16 lg:py-24">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          <div className="mx-auto max-w-[640px] text-center">
            <p className="lp-section-label mx-auto">
              <span className="inline-block h-1 w-1 rounded-full bg-lp-em" />
              Articles
            </p>
            <h2 className="lp-display mt-4 text-[32px] font-semibold tracking-[-0.03em] text-lp-ink sm:text-[40px]">
              Written by {author.name.split(" ")[0]}
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-[720px] space-y-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={post.path}
                className="block rounded-2xl border border-lp-line bg-lp-card px-5 py-5 text-left transition-colors hover:border-lp-em/35 sm:px-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-lp-em">
                  {post.category}
                </p>
                <h3 className="lp-display mt-2 text-xl font-semibold tracking-[-0.02em] text-lp-ink">
                  {post.h1}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-lp-ink-soft">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/blog", label: "Blog" },
          { href: "/about", label: "About MoneySpent" },
          { href: "/features", label: "Features" },
          { href: "/guides", label: "Guides" },
        ]}
      />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
