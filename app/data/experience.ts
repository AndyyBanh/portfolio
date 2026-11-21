//   - In `highlights`, wrap key phrases/metrics in *asterisks* to emphasize them, e.g. "Cut load time *40%* by ...".
//   - Without a `logo`, the company's initial is shown.
//   - /experience sorts newest first by `start`; the home page timeline renders in array order.

import type { ExperienceItem } from "@/types"

export const experienceCategories = [
  { id: "engineering", label: "Engineering" },
  { id: "entrepreneurial", label: "Entrepreneurial" },
  { id: "education", label: "Education" },
] as const

export const experiences: ExperienceItem[] = [
  {
    role: "Software Developer Co-op",
    company: "GoodLife Fitness",
    period: "Sept 2026 - Present",
    start: "2026-09",
    description: "Developing software as a .NET developer on the Member Applications team.",
    categories: ["engineering"],
    logo: "/GoodLifeFitness_Logo.jpeg",
    location: "Remote",
    highlights: [
      "Supported the decommissioning of a legacy database by removing dependencies on its APIs from .NET services",
      "Improved unit test coverage from *8.5% to 83%* for core authentication service by identifying coverage gaps",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Noble Solutions via Riipen",
    period: "Feb 2026 - April 2026",
    start: "2026-02",
    description: "Contributed to the development of a real estate platform, earning 5-star client feedback on Riipen.",
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
    role: "BSc Computer Science",
    company: "York University",
    period: "Sep 2024 - 2028 (expected)",
    start: "2024-09",
    description: "Third-year Computer Science student at York University.",
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
    description: "Founded and operate an e-commerce business, managing end-to-end operations and selling 500+ products.",
    categories: ["entrepreneurial"],
    location: "Remote",
    highlights: [
      "Founded and managed an ecommerce business, managing full operations including inventory, sales, and customer service, for *500+ products*",
      "Analyzed sales data and trends to optimize product sourcing and pricing, generating over *$60k in revenue* in 2025",
    ],
  },
]
