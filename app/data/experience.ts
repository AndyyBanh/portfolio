// Experience entries shown on the home page timeline and the /experience page.
//
// To fill in from your resume:
//   - `highlights`: one string per resume bullet (replace the [bracketed] placeholders).
//     Wrap key phrases/metrics in *asterisks* to emphasize them, e.g. "Cut load time *40%* by ...".
//   - `logo`: path to an image in /public (e.g. "/goodlife.png"). Without one, the company's initial is shown.
//   - `location`: e.g. "Toronto" or "Remote". Remove the field to hide it.
//   - `categories`: which filter buttons on /experience include this entry.
//   - `start`: YYYY-MM. The /experience page sorts newest first by this, so array order doesn't matter there.
//     (The home page timeline renders in array order.)

export const experienceCategories = [
  { id: "engineering", label: "Engineering" },
  { id: "entrepreneurial", label: "Entrepreneurial" },
  { id: "education", label: "Education" },
] as const

export type ExperienceCategory = (typeof experienceCategories)[number]["id"]

export type ExperienceItem = {
  role: string
  company: string
  period: string // display text, e.g. "Sept 2026 - Present"
  start: string // YYYY-MM, used for newest-first sorting
  description: string // short one-liner (the home timeline tooltip)
  categories: ExperienceCategory[]
  logo?: string
  location?: string
  highlights: string[]
}

export const experiences: ExperienceItem[] = [
  {
    role: "Software Developer Co-op",
    company: "GoodLife Fitness",
    period: "Sept 2026 - Present",
    start: "2026-09",
    description: ".NET Developer",
    categories: ["engineering"],
    logo: "/GoodLifeFitness_Logo.jpeg",
    location: "Remote",
    highlights: [
      ".NET Developer",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Noble Solutions via Riipen",
    period: "Feb 2026 - April 2026",
    start: "2026-02",
    description: "Contributed to small real estate platform, earning 5-star feedback on Riipen",
    categories: ["engineering"],
    logo: "/Riipen_Logo.jpeg",
    location: "Remote",
    highlights: [
      "Contributed to implementation plans and development of real estate platform, earning *5-star feedback* on Riipen",
      "Engineered a data processing pipeline for *10k+ properties*, reducing redundant computations and latency by *90%*",
      "Designed and deployed automated cron-based workflows, saving clients hours of manual efforts",
      "Technologies used: Next.js, Python, MongoDB, Supabase",
    ],
  },
  {
    role: "B.S Computer Science",
    company: "York University",
    period: "Sep 2024 - 2028 (expected)",
    start: "2024-09",
    description: "being studious",
    categories: ["education"],
    logo: "/yorkulogo.jpg",
    location: "Toronto",
    highlights: [
      "Relevant courses: Advanced OOP, Data Structures and Algorithms, Theory of Computation, Introduction to Database Systems",
    ],
  },
  {
    role: "Sole Proprietor",
    company: "Self-employed",
    period: "April 2025 - Present",
    start: "2025-04",
    description: "Founded an ecommerce business, managing full operations, selling over 500+ products",
    categories: ["entrepreneurial"],
    location: "Remote",
    highlights: [
      "Founded and managed an ecommerce business, managing full operations including inventory, sales, and customer service, for *500+ products*",
      "Analyzed sales data and trends to optimize product sourcing and pricing, generating over *$60k in revenue* in 2025",
    ],
  },
]
