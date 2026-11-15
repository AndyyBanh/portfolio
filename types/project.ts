import type { projectCategories } from '@/app/data/projects'

export type ProjectCategory = (typeof projectCategories)[number]['id']

export type ProjectItem = {
  title: string
  description: string // short summary for the home page cards (not shown on /projects)
  skills: string[]
  github?: string
  demo?: string
  categories: ProjectCategory[]
  period?: string // display text, e.g. "Jan 2026 - Mar 2026"
  start?: string // YYYY-MM, used for newest-first sorting
  highlights: string[]
}
