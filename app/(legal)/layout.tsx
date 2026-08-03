import { SiteHeader } from "@/components/landing/SiteHeader"
import { SiteFooter } from "@/components/landing/SiteFooter"

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="lp-root flex min-h-svh flex-col">
      <SiteHeader />
      <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-24 sm:py-32">{children}</div>
      <SiteFooter />
    </main>
  )
}
