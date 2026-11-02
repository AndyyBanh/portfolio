// Co-op SMART goals (COOP-2100) and personal goals shown in the "Now" section of /goals.
//
// To log progress on a goal:
//   1. Bump `done` (the bar fills toward `target`; it shows "Done" when done >= target).
//   2. Add a line to the top of `log`, e.g.
//        { date: "2026-11-14", note: "Reviewed the auth refactor PR. Noted why middleware beat route guards." },
//      Dates are YYYY-MM-DD. Entries are shown newest first by date, so order doesn't matter.

export type ProgressEntry = { date: string; note: string }

export type CoopGoal = {
  title: string
  summary: string
  due: string // YYYY-MM-DD
  target: number
  unit: string // plural noun, e.g. "PRs"
  done: number
  log: ProgressEntry[]
}

export type Competency = { name: string; goals: CoopGoal[] }

export const coopTerm = {
  company: "GoodLife",
  period: "Fall 2026 – Summer 2027",
}

export const competencies: Competency[] = [
  {
    name: "Critical Thinking & Problem Solving",
    goals: [
      {
        title: "Own tickets end-to-end",
        summary: "Take tickets from pickup to deployed with only high-level guidance, asking at most 2 design-level questions each.",
        due: "2026-12-31",
        target: 4,
        unit: "tickets",
        done: 3,
        log: [],
      },
      {
        title: "Review pull requests",
        summary: "Review teammates' PRs and log notes on what changed, why those decisions were made and what the alternatives were.",
        due: "2026-12-31",
        target: 8,
        unit: "PRs",
        done: 2,
        log: [],
      },
    ],
  },
  {
    name: "Oral & Written Communication",
    goals: [
      {
        title: "Write technical documentation",
        summary: "Write Confluence docs for features and design decisions, then get them reviewed and approved.",
        due: "2026-12-31",
        target: 3,
        unit: "docs",
        done: 2,
        log: [],
      },
      {
        title: "Contribute in stakeholder meetings",
        summary: "Prepare questions ahead of time, take notes on what stakeholders need and confirm my summary with my supervisor.",
        due: "2026-12-31",
        target: 2,
        unit: "meetings",
        done: 0,
        log: [],
      },
    ],
  },
  // On hold — uncomment to show again
  // {
  //   name: "Agility & Adaptability",
  //   goals: [
  //     {
  //       title: "Learn a team's codebases in 2 weeks",
  //       summary: "Map out the architecture, main services, integrations and controllers, then explain them to my supervisor.",
  //       due: "2027-01-16",
  //       target: 1,
  //       unit: "team",
  //       done: 0,
  //       log: [],
  //     },
  //     {
  //       title: "Ramp up faster on each rotation",
  //       summary: "Adapt to each new rotation team faster than the last, and refine a personal onboarding framework as I go.",
  //       due: "2027-08-31",
  //       target: 3,
  //       unit: "teams",
  //       done: 0,
  //       log: [],
  //     },
  //   ],
  // },
]

// Personal goals shown after the co-op cards. For LeetCode, `done` is the solved count.
export const personalGoals: Competency[] = [
  {
    name: "Grow my LeetCode practice",
    goals: [
      {
        title: "Solve 300 problems",
        summary: "Practice consistently to sharpen data structures and algorithms.",
        due: "2026-12-31",
        target: 300,
        unit: "solved",
        done: 210,
        log: [],
      },
    ],
  },
]
