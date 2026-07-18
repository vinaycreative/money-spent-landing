import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, DM_Sans } from "next/font/google"
import "./globals.css"
import { getSiteUrl, siteDescription, siteName } from "@/lib/site"
import { GoogleAnalytics } from "@next/third-parties/google"
import { PostHogProvider } from "@/providers/posthog-provider"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const dmSans = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const viewport: Viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0e0c",
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
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteName} Preview`,
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Personal Finance & Expense Tracker`,
    description: siteDescription,
    images: ["/og.png"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <AccentScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} bg-background`}
        suppressHydrationWarning
      >
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </PostHogProvider>
        <GoogleAnalytics gaId="G-7H7SDLWXRM" />
      </body>
    </html>
  )
}
