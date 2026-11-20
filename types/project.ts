export type ProjectImage = {
  src: string // path under /public, e.g. "/projects/form-coach/workout.png"
  alt: string
  caption?: string
  width: number
  height: number
}

export type ProjectDetails = {
  about: string[]
  features: { title: string; description: string }[]
  stack: { name: string; why: string }[]
  limitations: string[]
  future: string[]
  futureNote?: string
  images?: ProjectImage[]
}

export type ProjectItem = {
  slug: string
  title: string
  description: string
  skills: string[]
  github?: string
  demo?: string
  period?: string // display text, e.g. "Jan 2026 - Mar 2026"
  start?: string // YYYY-MM, used for newest-first sorting
  highlights: string[]
  details: ProjectDetails
}
