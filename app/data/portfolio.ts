//   - `company`: must match a `company` in ./experience.ts — role, period and logo are pulled from there.
//   - A link without `href` shows "Link coming soon"; an entry with `links: []` shows "Work samples coming soon."
//   - `feedback`: shared with the person's permission. `rating` is out of 5.

import type { PortfolioEntry } from "@/types"
import { artifacts } from "./artifacts"

export const portfolio: PortfolioEntry[] = [
  {
    company: "Noble Solutions via Riipen",
    links: [
      {
        title: "Property listing page",
        href: "https://hausq.ca/listing/C14142050/36-macpherson-avenue-toronto-c02",
        note: "Built an investment index that scores each property's value, and added caching that cut latency 90% across 10k+ properties",
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
