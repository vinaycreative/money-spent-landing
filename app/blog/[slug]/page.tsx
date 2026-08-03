import { notFound } from "next/navigation"
import { blogPosts, getBlogPost } from "@/constant/blog"
import { BlogArticle } from "@/components/landing/BlogArticle"
import { buildPageMetadata } from "@/lib/seo"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: post.path,
    keywords: post.keywords,
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) notFound()

  return <BlogArticle post={post} />
}
