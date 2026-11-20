// To log progress on a goal:
//   1. Bump `done` (the bar fills toward `target`; it shows "Done" when done >= target).
//   2. Add an entry to `log`, e.g.
//        { date: "2026-11-14", note: "Reviewed the auth refactor PR. Noted why middleware beat route guards." },
//      Dates are YYYY-MM-DD. Entries are shown newest first by date, so order doesn't matter.
//
// Leave out `target` for open-ended goals: they show a running count instead of a bar.

import type { CompetencyGoals } from "@/types"

export const coopTerm = {
  company: "GoodLife",
  period: "Fall 2026 – Summer 2027",
}

export const competencies: CompetencyGoals[] = [
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
  {
    name: "Emotional Self-Awareness",
    reflection:
      "Early in my co-op I picked up a ticket on a legacy repository with deprecated dependencies and features that no longer worked. I spent a long time trying to piece it together on my own before I noticed my frustration and asked a teammate, who gave me the context I needed to find a solution. It showed me that I tend to try to figure everything out myself. I'm working on this competency so I notice sooner when I'm stuck and how it affects my work, and so I make full use of the experienced teammates around me.",
    goals: [
      {
        title: "Escalate blockers sooner",
        summary: "When I've made no progress on a blocker for an hour, name it, ask a teammate for context, and note what I learned.",
        due: "2026-12-31",
        unit: "escalated",
        done: 1,
        log: [],
      },
    ],
  },
]

// For LeetCode, `done` is the solved count.
export const personalGoals: CompetencyGoals[] = [
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
