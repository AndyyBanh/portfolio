// Roadmap milestones (app/data/goals.ts)

export type Status = 'current' | 'upcoming' | 'future'

export type Milestone = {
  when: string
  status: Status
  coop?: boolean // render the co-op SMART goals (app/data/coopGoals.ts) above the goal cards
  personal?: boolean // render the personal goals (personalGoals in app/data/coopGoals.ts) above the goal cards
  goals: { title: string; description: string; steps: string[] }[]
}

// Co-op SMART goals and personal goals (app/data/coopGoals.ts)

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

// A goal card: one competency (or personal area) and the goals tracked under it.
export type CompetencyGoals = { name: string; reflection?: string; goals: CoopGoal[] }
