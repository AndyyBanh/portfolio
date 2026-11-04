// Work samples shown on the home page portfolio section and the /portfolio page.
//
// To fill in:
//   - `company`: must match a `company` in ./experience.ts — role, period and logo are pulled from there.
//   - `links`: one entry per page you worked on.
//       - `title`: name of the page/feature, e.g. "Property listings page".
//       - `href`: full URL (https://...). The whole row links there. Leave it out to show "Link coming soon".
//       - `note`: short line on what you built, e.g. "Built search filters and pagination".
//   - An entry with `links: []` shows "Work samples coming soon."
//   - `feedback` (optional, /portfolio only): a quote from a supervisor/client, shared with their permission.
//       - `rating`: out of 5, shown as stars. `image`: path in /public to a screenshot of the original.
//   - `artifact` (optional, /portfolio only): a COOP-2100 artifact caption from ./artifacts.ts.

import { artifacts, type ArtifactCaption } from "./artifacts"

export type PortfolioLink = {
  title: string
  href?: string
  note?: string
}

export type PortfolioFeedback = {
  quote: string
  author: string
  role: string
  rating?: number
  image?: string
}

export type PortfolioEntry = {
  company: string
  links: PortfolioLink[]
  feedback?: PortfolioFeedback
  artifact?: ArtifactCaption
}

export const portfolio: PortfolioEntry[] = [
  {
    company: "Noble Solutions via Riipen",
    links: [
      {
        title: "Property listing page",
        href: "https://hausq.ca/listing/C14142050/36-macpherson-avenue-toronto-c02",
        note: "Built an investment index that scores each property's value, and added caching to speed up page loads",
      },
      {
        title: "Mortgage calculator",
        href: "https://hausq.ca/mortgage-calculator",
        note: "Contributed to the UI redesign and built cards that surface key real-estate metrics",
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
  {
    company: "GoodLife Fitness",
    links: [],
  },
]
