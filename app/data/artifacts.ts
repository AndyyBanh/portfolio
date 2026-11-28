import type { ArtifactCaption } from "@/types"

// The twelve Lassonde undergraduate competencies. Tag each artifact with 1–3.
export const undergradCompetencies = [
  "Knowledge Base for Engineering",
  "Problem Analysis",
  "Investigation",
  "Design",
  "Use of Engineering Tools",
  "Individual and Teamwork",
  "Communication Skills",
  "Professionalism",
  "Impact on Society and the Environment",
  "Ethics and Equity",
  "Economics and Project Management",
  "Life-Long Learning",
] as const

export const artifacts = {
  whyMe: {
    source: "COOP-2100 coursework",
    caption:
      "Why Me video. A short coursework video where I tell my story in a way that's more memorable than a resume. It covers how I got into tech, my struggles starting out, and my interest in distributed systems, a journey most CS students and new developers can relate to. It matters because it's the quickest way to get to know me: who I am, what interests me, and where I'm headed.",
    competencies: ["Communication Skills"],
  },
  essay: {
    source: "COOP-2100 coursework",
    caption:
      "Reflective essay, “Out of reach.” A short essay that draws on my experiences so far, covering my strengths, my weaknesses and how I plan to address them, my values, and how I learn. You may see yourself in my journey, my strengths, my weaknesses, and the values I hold. It matters because it's a deeper look at who I am as a person, a short piece to get to know me.",
    competencies: ["Communication Skills", "Life-Long Learning"],
  },
  goodlife: {
    source: "GoodLife co-op · Sept 2026 – Present",
    caption:
      "Software Developer Co-op, Member Applications team at GoodLife Fitness. I helped simplify and strengthen our member services by removing a legacy database's API from several .NET services as part of its decommissioning, and by raising unit test coverage on a core authentication service to 83%. Together, these changes made our applications less complex, cheaper to run, and safer to change.",
    competencies: ["Problem Analysis", "Use of Engineering Tools", "Economics and Project Management"],
  },
  riipen: {
    source: "Riipen project · Feb – Apr 2026",
    caption:
      "Software Developer Intern, Noble Solutions via Riipen. On a real estate platform, I researched technologies, wrote implementation plans, and built features for the website. My main result was the property listing page: I built an investment index that scores each property's value, and added caching that cut latency by 90% across 10k+ properties. The work grew my problem analysis, design, and investigation skills, and the company's director rated it 5 out of 5.",
    competencies: ["Investigation", "Design", "Problem Analysis"],
  },
  gatewayDiagrams: {
    source: "Personal project",
    caption:
      "Architecture diagrams, Financial API Gateway. These map how every request passes through one gateway, and how Kafka carries transfer events between services that scale and fail on their own. Good software has to be thought through and built to handle scale, and these diagrams lay out that design.",
    competencies: ["Design", "Problem Analysis", "Use of Engineering Tools"],
  },
} satisfies Record<string, ArtifactCaption>

export const artifactIndex = [
  { ...artifacts.whyMe, kind: "video", title: "Why Me", href: "/about#why-me" },
  { ...artifacts.essay, kind: "essay", title: "Out of reach", href: "/about#essay" },
  { ...artifacts.goodlife, kind: "co-op", title: "GoodLife Fitness", href: "/portfolio" },
  { ...artifacts.riipen, kind: "riipen", title: "Noble Solutions", href: "/portfolio" },
  { ...artifacts.gatewayDiagrams, kind: "project", title: "Financial API Gateway", href: "/projects/financial-api-gateway" },
]
