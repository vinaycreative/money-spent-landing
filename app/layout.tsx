import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Fraunces } from "next/font/google"
import "./globals.css"
import { getSiteUrl, siteDescription, siteName } from "@/lib/site"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export const viewport: Viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0e0c" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f4" },
  ],
}

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${siteName} | Personal Finance & Expense Tracker`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | Personal Finance & Expense Tracker`,
    description: siteDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: `${siteName} | Personal Finance & Expense Tracker`,
    description: siteDescription,
  },
  robots: {
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteName,
  },
}

import { ThemeProvider } from "@/components/ThemeProvider"
import { ThemeScript } from "@/components/ThemeScript"
import { AccentScript } from "@/components/AccentScript"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <AccentScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
