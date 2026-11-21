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
  riipen: {
    source: "Riipen project · Feb – Apr 2026",
    caption:
      "Software Developer Intern, Noble Solutions via Riipen. I took on a wide range of responsibilities on a real estate platform: researching technologies and solutions, creating implementation plans, and helping build the website. The work pushed me to grow my problem analysis, design, and investigation skills, and I was grateful to receive a 5 out of 5 rating from the company's director.",
    competencies: ["Investigation", "Design", "Problem Analysis"],
  },
  gatewayDiagrams: {
    source: "Personal project",
    caption:
      "Architecture diagrams, Financial API Gateway. These map how every request passes through one gateway, and how Kafka carries transfer events between services that scale and fail on their own. Good software has to be thought through and built to handle scale, and these diagrams lay out that design.",
    competencies: ["Design", "Problem Analysis", "Use of Engineering Tools"],
  },
} satisfies Record<string, ArtifactCaption>
