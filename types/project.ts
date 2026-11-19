export type ProjectImage = {
  src: string // path under /public, e.g. "/projects/form-coach/workout.png"
  alt: string
  caption?: string
  width: number
  height: number
}

// Long-form content for a project's own page (/projects/[slug]).
export type ProjectDetails = {
  about: string[] // paragraphs: what it is, who it's for, why I built it
  features: { title: string; description: string }[]
  stack: { name: string; why: string }[] // each tech + why it was chosen
  limitations: string[]
  future: string[]
  futureNote?: string // shown as a comment under "Future plans", e.g. when nothing is planned yet
  images?: ProjectImage[]
}

export type ProjectItem = {
  slug: string // URL segment: /projects/<slug>
  title: string
  description: string // short summary for the project cards
  skills: string[]
  github?: string
  demo?: string
  period?: string // display text, e.g. "Jan 2026 - Mar 2026"
  start?: string // YYYY-MM, used for newest-first sorting
  highlights: string[] // shown as "Results" on the project page
  details: ProjectDetails
}
