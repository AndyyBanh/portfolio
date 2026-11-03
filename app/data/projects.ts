// Project entries shown on the home page cards and the /projects page.
//
// To fill in:
//   - `highlights`: one string per bullet. Wrap key phrases/metrics in *asterisks* to emphasize them,
//     e.g. "Streamed frames over WebSockets at *30 fps*". Leave the array empty to hide the list.
//   - `skills`: shown as tags on both the home cards and /projects.
//   - `github` / `demo`: links shown under the tags. Remove a field to hide its link.
//   - `period`: display text, e.g. "Jan 2026 - Mar 2026". Remove the field to hide it.
//   - `start`: YYYY-MM. /projects sorts newest first by this; projects without it keep array order after dated ones.
//   - `categories`: which filter buttons on /projects include this entry.

export const projectCategories = [
  { id: "full-stack", label: "Full Stack" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "backend", label: "Backend" },
] as const

export type ProjectCategory = (typeof projectCategories)[number]["id"]

export type ProjectItem = {
  title: string
  description: string // short summary for the home page cards (not shown on /projects)
  skills: string[]
  github?: string
  demo?: string
  categories: ProjectCategory[]
  period?: string // display text, e.g. "Jan 2026 - Mar 2026"
  start?: string // YYYY-MM, used for newest-first sorting
  highlights: string[]
}

export const projects: ProjectItem[] = [
  {
    title: "Financial API Gateway",
    description:
      "API gateway that routes, authenticates, and rate-limits requests to downstream financial services.",
    skills: ["Spring Boot", "Spring Cloud Gateway", "Kafka", "Redis", "OpenFeign", "Mockito", "Docker", "PostgreSQL"],
    github: "https://github.com/AndyyBanh/financial-api-gateway",
    categories: ["backend"],
    highlights: [
      "Architected an API gateway with Spring Security and Redis rate limiting, enabling independent scaling",
      "Designed an event-driven processing pipeline using Kafka, achieving average of *492ms* end-to-end latency",
      "Load tested transaction creation endpoint with *k6 (50 Vus)* hitting 100% success rate across *900+* requests",
      "Engineered a fraud detection service consuming Kafka events with cross-service Feign lookups, enabling decoupled asynchronous background processing",
    ],
  },
  {
    title: "Facility Management System",
    description:
      "Full Stack Web Application that allows clients to make requets for in demand tolietries. Allowing businesses to manage and track supplies being used.",
    skills: ["React.js", "Spring Boot", "Mockito", "Redis", "Docker", "PostgreSQL"],
    github: "https://github.com/AndyyBanh/bathroombuddy",
    categories: ["full-stack"],
    highlights: [
      "Built *40* JUnit & Mockito unit tests across the service layer, achieving an *81%* branch coverage",
      "Implemented caching using Redis to reduce backend load, eliminating *99%* of queries on static reference data",
      "Engineered a tiered Bucket4j & Redis rate limiter, capping public traffic at *100 req/min* and login at *5 req/min*",
      "Integrated JWT Authentication with Spring Security, securing endpoints and user data",
    ],
  },
  {
    title: "Discrete Math Chatbot",
    description: "Educational web app that allows user interaction through chatbot and quizzes.",
    skills: ["Next.js", "TypeScript", "Python", "LangChain", "Chroma", "FastAPI", "OpenAI API"],
    github: "https://github.com/AndyyBanh/discretemath-chatbot",
    demo: "https://youtu.be/Q2xd9Ib49Oo",
    categories: ["ai-ml", "full-stack"],
    highlights: [
      "Built a *RAG* pipeline indexing *873* chunks across Discrete Math chapters allowing for context-aware responses",
      "Validated *GPT-5.4-mini* response generation across real test queries, averaging *1.4s* latency",
    ],
  },
  {
    title: "Form Coach",
    description:
      "Full Stack computer vision platform that allows users to correct their workout forms in real time using WebSockets to stream frames and computer vision to perform movement analysis.",
    skills: ["Next.js", "Spring Boot", "Python", "OpenCV", "MediaPipe", "FastAPI"],
    github: "https://github.com/AndyyBanh/formcoach",
    categories: ["full-stack", "ai-ml"],
    highlights: [
      "Developed a full-stack computer vision platform for workout form, resulting in real-time automated feedback",
      "Optimized WebSocket streaming pipeline through image downscaling, reducing payload by *42%*",
      "Implemented flow control through pending-frame tracking, achieving *10 FPS* at *36ms* average latency",
    ],
  },
]
