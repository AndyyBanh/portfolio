import type { ArtifactCaption } from './artifact'

export type PortfolioLink = {
  title: string
  href?: string
  note?: string
  /** Internal/proprietary work with no public link — shown with just its note, no "Link coming soon". */
  internal?: boolean
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
