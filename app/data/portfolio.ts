//   - `company`: must match a `company` in ./experience.ts — role, period and logo are pulled from there.
//   - A link without `href` shows "Link coming soon"; an entry with `links: []` shows "Work samples coming soon."
//   - `internal: true` marks proprietary work with no public link; it's shown with just its note.
//   - `feedback`: shared with the person's permission. `rating` is out of 5.
//   - Titles have no period; notes are full sentences ending in a period.

import type { PortfolioEntry } from "@/types"
import { artifacts } from "./artifacts"

export const portfolio: PortfolioEntry[] = [
  {
    company: "GoodLife Fitness",
    links: [
      {
        title: "Removed a legacy database's API",
        note: "Removed a legacy database's API from several .NET services as part of decommissioning the database. The database came from having multiple ways of identifying members across our services. Removing it reduced complexity and saved compute.",
        internal: true,
      },
      {
        title: "Raised auth service test coverage to 83%",
        note: "Found coverage gaps in a core authentication service and wrote unit tests to close them.",
        internal: true,
      },
    ],
    artifact: artifacts.goodlife,
  },
  {
    company: "Noble Solutions via Riipen",
    links: [
      {
        title: "Property listing page",
        href: "https://hausq.ca/listing/C14142050/36-macpherson-avenue-toronto-c02",
        note: "Built an investment index that scores each property's value, and added caching that cut latency 90% across 10k+ properties.",
      },
    ],
    feedback: {
      quote:
        "Andy is a well rounded student, he helped research multiple technologies and possibilities and updated the website.",
      author: "Paul Ghafari",
      role: "Director, Noble Solutions",
      rating: 5,
      image: "/Riipen_Feedback.png",
    },
    artifact: artifacts.riipen,
  },
]
