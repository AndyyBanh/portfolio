// Artifact captions (COOP-2100) shown under each artifact where it lives on the site.
//
// Each caption is 50–150 words and follows Retell / Relate / Reflect:
//   - Retell: what it is, its purpose, and your specific role.
//   - Relate: the competencies it shows, listed in `competencies` (shown as tags).
//   - Reflect: the result, and what you learned or would do differently.
//
// To fill in:
//   - `source`: where it came from, e.g. "COOP-2100 coursework". Shown as "Artifact · {source}".
//   - `caption`: the 50–150 word caption.
//   - `competencies`: names must match `undergradCompetencies` exactly (a typo fails type-checking).

export const undergradCompetencies = [
  "Critical Thinking and Problem Solving",
  "Collaboration Across Networks and Leading With Influence",
  "Agility and Adaptability",
  "Initiative and Entrepreneurship",
  "Effective Oral and Written Communication",
  "Accessing and Analyzing Information",
  "Curiosity and Imagination",
] as const

export type Competency = (typeof undergradCompetencies)[number]

export type ArtifactCaption = {
  source: string
  caption: string
  competencies: Competency[]
}

export const artifacts = {
  // Draft: confirm "It took several takes" matches how the video was actually made.
  whyMe: {
    source: "COOP-2100 coursework",
    caption:
      "Why Me video. I scripted, recorded and edited this short pitch myself to answer one question: why hire me? Explaining my thinking out loud is the skill I'm working hardest on, so being on camera was the hard part. It took several takes, and each one made me cut filler and lead with the point: what I've built, the business I run, and how I learn. I'll keep using that loop before standups and interviews: say it out loud, trim it, say it again.",
    competencies: [
      "Effective Oral and Written Communication",
      "Initiative and Entrepreneurship",
    ],
  },
  essay: {
    source: "COOP-2100 coursework",
    caption:
      "Reflective essay, “Out of reach.” A personal essay on how I got into computer science, what running an ecommerce business through the 2025 tariffs taught me about adapting, and my habit of getting 1% better each day. I chose a boulder being pushed uphill as my image because progress comes from steady pushing, not from reaching a top. Writing it made me name communication as my biggest gap, and that turned into a concrete plan: speak up in standups and explain my thinking clearly every day. It now drives my co-op communication goals.",
    competencies: [
      "Agility and Adaptability",
      "Effective Oral and Written Communication",
    ],
  },
  // Shown on /portfolio with the Noble Solutions work links and the director's feedback.
  riipen: {
    source: "Riipen project · Feb – Apr 2026",
    caption:
      "Software Developer Intern, Noble Solutions via Riipen. On hausq.ca, a real estate platform, I researched technologies and options to shape the implementation plan, then built the property listing page's investment index and the data pipeline that scores 10k+ properties. I cut redundant computation and added caching, which reduced latency by 90%. The company's director rated my work 5 out of 5. It was my first real-world engineering experience: a client depended on the result, so every choice had to be justified, not just coded. It taught me to research the options before writing code.",
    competencies: [
      "Critical Thinking and Problem Solving",
      "Accessing and Analyzing Information",
    ],
  },
} satisfies Record<string, ArtifactCaption>
