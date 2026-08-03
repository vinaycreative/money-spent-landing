export type Author = {
  name: string
  slug: string
  path: string
  role: string
  shortBio: string
  bio: string[]
  location: string
  website: string
  linkedin: string
  sameAs: string[]
}

export const authors = {
  vinayBhadre: {
    name: "Vinay Bhadre",
    slug: "vinay-bhadre",
    path: "/author/vinay-bhadre",
    role: "Founder of MoneySpent",
    shortBio:
      "Vinay Bhadre builds calm, practical software for everyday life. He created MoneySpent to make expense tracking fast enough to keep—without ads, clutter, or spreadsheet friction.",
    bio: [
      "Vinay Bhadre is a full-stack product builder and the founder of MoneySpent. Through vinaycreative, he designs and ships production web apps with a focus on clarity, speed, and trust.",
      "MoneySpent started from a simple frustration: most personal finance tools make logging feel like homework. Vinay’s work centers on reducing that friction so people can build durable money habits—especially in UPI-first, mobile-first India.",
      "He writes about expense tracking, budgeting systems, and practical personal finance from a builder’s perspective: what people will actually do on a busy weekday, not what looks impressive in a demo.",
    ],
    location: "Pune, India",
    website: "https://vinaycreative.com/",
    linkedin: "https://www.linkedin.com/in/vinaybhadre",
    sameAs: ["https://vinaycreative.com/", "https://www.linkedin.com/in/vinaybhadre"],
  } satisfies Author,
}

export const defaultAuthor = authors.vinayBhadre

export function getAuthor(slug: string) {
  return Object.values(authors).find((author) => author.slug === slug)
}
