export type Status = 'current' | 'upcoming' | 'future'

export type Milestone = {
  when: string
  status: Status
  coop?: boolean
  personal?: boolean
  goals: {
    title: string
    description: string
    progress?: { done: number; target: number; unit: string }
    steps: string[]
  }[]
}

export type ProgressEntry = { date: string; note: string }

export type CoopGoal = {
  title: string
  summary: string
  due: string // YYYY-MM-DD
  target?: number // omit for open-ended goals (running count, no bar)
  unit: string // plural noun, e.g. "PRs"
  done: number
  log: ProgressEntry[]
}

export type CompetencyGoals = { name: string; reflection?: string; goals: CoopGoal[] }
