// Roadmap milestones shared by the /goals page (GoalsRoadmap) and the homepage snippet (Goals).

export type Status = 'current' | 'upcoming' | 'future'

export type Milestone = {
  when: string
  status: Status
  coop?: boolean // render the co-op SMART goals + personal goals (app/data/coopGoals.ts) above the goal cards
  goals: { title: string; description: string; steps: string[] }[]
}

export const milestones: Milestone[] = [
  {
    when: "Now",
    status: "current",
    coop: true,
    goals: [],
  },
  {
    when: "Expected 2029",
    status: "future",
    goals: [
      {
        title: "Graduate from York University",
        description: "Finish my BSc in Computer Science with strong co-op experience.",
        steps: ["Land a second co-op/internship for Summer 2028"],
      },
    ],
  },
  {
    when: "Miscellaneous",
    status: "future",
    goals: [
      {
        title: "Go deeper on system design",
        description: "Currently reading Designing Data-Intensive Applications (DDIA) by Martin Kleppmann to understand how scalable, reliable systems are built.",
        steps: ["Finish reading DDIA"],
      },
    ],
  },
]
