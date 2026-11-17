import type { experienceCategories } from '@/app/data/experience'

export type ExperienceCategory = (typeof experienceCategories)[number]['id']

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
