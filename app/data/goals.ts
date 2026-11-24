import type { Milestone } from "@/types"

export const milestones: Milestone[] = [
  {
    when: "Now",
    status: "current",
    coop: true,
    goals: [],
  },
  {
    when: "Expected Dec 2029",
    status: "future",
    goals: [
      {
        title: "Graduate from York University",
        description: "Finish my BSc in Computer Science with strong co-op experience. Entering my 3rd year, on pause for my co-op.",
        progress: { done: 2, target: 4, unit: "years" },
        steps: ["Land a second co-op/internship for Summer 2028"],
      },
    ],
  },
  {
    when: "Miscellaneous",
    status: "future",
    personal: true,
    goals: [],
  },
]
