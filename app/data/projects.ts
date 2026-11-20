//   - `slug`: lowercase, hyphenated, unique.
//   - `skills`: high-level only (frameworks, platforms, major infra like Kafka/Redis/PostgreSQL/Docker), ~4-5 max.
//     No languages, test libs, or sub-libraries; the repo covers those.
//   - `details`: leave a list empty to hide its section.
//   - `images`: put files in /public/projects/<slug>/ and give their real pixel width/height.
//   In any text, wrap key phrases/metrics in *asterisks* to emphasize them, e.g. "Streamed frames at *30 fps*".

import type { ProjectItem } from "@/types"
import { sortByDateDesc } from "@/lib/sort"

export const projects: ProjectItem[] = [
  {
    slug: "financial-api-gateway",
    title: "Financial API Gateway",
    description:
      "API gateway that routes, authenticates, and rate-limits requests to downstream financial services.",
    skills: ["Spring Boot", "Kafka", "Redis", "PostgreSQL", "Docker"],
    github: "https://github.com/AndyyBanh/financial-api-gateway",
    highlights: [
      "Architected an API gateway with Spring Security and Redis rate limiting, enabling independent scaling",
      "Designed an event-driven processing pipeline using Kafka, achieving average of *492ms* end-to-end latency",
      "Load tested transaction creation endpoint with *k6 (50 Vus)* hitting 100% success rate across *900+* requests",
    ],
    details: {
      about: [
        "A microservices backend that simulates *person-to-person money transfers*, like Cash App, rather than a full bank. Clients only ever talk to one API gateway, which authenticates each request, rate-limits it, and routes it to one of three services: transactions, accounts, or fraud detection.",
        "I built it after finishing the J.P. Morgan software engineering simulation and wanting to go further. The goal was to learn the patterns real payment systems depend on: event-driven processing, distributed rate limiting, and making sure money moves *exactly once* even when a service crashes or a message is delivered twice.",
      ],
      features: [
        {
          title: "Single API gateway",
          description:
            "Every request passes a Redis-backed rate limit filter and a JWT auth filter before Spring Cloud Gateway routes it to the right service.",
        },
        {
          title: "Event-driven transfers",
          description:
            "A new transaction is saved as PENDING and published to Kafka. The Account Service moves the money and publishes the result, and the Transaction Service marks it COMPLETE or FAILED.",
        },
        {
          title: "Fraud detection",
          description:
            "The Fraud Service reads the same events on its own and flags transfers that are unusually large, send *80%+* of the sender's balance, or happen too often in a short window.",
        },
        {
          title: "Transactional outbox",
          description:
            "Each service saves its data and the outgoing event in one database transaction, and a background job publishes it. A crash can't lose an event or send one for data that was never saved.",
        },
        {
          title: "Retries & dead-letter topics",
          description:
            "Failed events retry with backoff. Events that still fail are parked in a dead-letter topic instead of blocking the queue, and stuck transfers are marked FAILED instead of staying PENDING forever.",
        },
        {
          title: "Safe duplicates",
          description:
            "Retries and the outbox can deliver an event twice, so every consumer recognizes repeats and ignores them. Money only moves once.",
        },
      ],
      stack: [
        { name: "Spring Cloud Gateway", why: "One entry point for auth, rate limiting and routing, so the services behind it don't each re-implement them." },
        { name: "Apache Kafka", why: "Lets several services react to the same transfer independently, and keeps the API fast because slower work like fraud checks runs in the background." },
        { name: "Redis + Bucket4j", why: "Rate-limit counters live in Redis, so limits stay consistent no matter which instance handles a request." },
        { name: "PostgreSQL", why: "One database per service, so each service owns its data and can be deployed on its own." },
        { name: "OpenFeign", why: "Declarative REST clients for the synchronous lookups, like checking both accounts exist before a transfer." },
        { name: "Docker Compose", why: "Starts all four services, four databases, Redis, Kafka and Zookeeper with one command." },
      ],
      limitations: [
        "Services trust the IDs the client sends. The gateway doesn't yet pass the authenticated user downstream to enforce account ownership.",
        "One Kafka broker with one partition per topic: fine locally, but the Fraud Service can't scale out and there's no failover.",
        "Nothing consumes the dead-letter topics yet, so failed events are inspected and replayed by hand.",
        "The outbox job assumes one instance per service. Two copies would publish the same events twice (safely ignored, but wasted work).",
        "Fraud detection is three fixed rules, not a learned model.",
      ],
      future: [],
      futureNote:
        "Nothing planned at the moment. As I learn more, I'll come back and keep building on it.",
      images: [
        {
          src: "/projects/financial-api-gateway/architecture.png",
          alt: "Gateway service on port 8080 routing to the Transaction, Account, and Fraud-Detection services",
          caption: "The gateway routes to three independently deployable services.",
          width: 1022,
          height: 480,
        },
        {
          src: "/projects/financial-api-gateway/kafka.png",
          alt: "Kafka broker with transactions and transaction-results topics, their producers, and consumer groups",
          caption: "Transfer events flow through two Kafka topics, each read by its own consumer groups.",
          width: 1256,
          height: 512,
        },
      ],
    },
  },
  {
    slug: "facility-management-system",
    title: "Facility Management System",
    description:
      "Full stack web app where clients request in-demand toiletries, and businesses manage, track, and fulfill those requests.",
    skills: ["React.js", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/AndyyBanh/bathroombuddy",
    highlights: [
      "Built *40* JUnit & Mockito unit tests across the service layer, achieving an *81%* branch coverage",
      "Implemented caching using Redis to reduce backend load, eliminating *99%* of queries on static reference data",
      "Engineered a tiered Bucket4j & Redis rate limiter, capping public traffic at *100 req/min* and login at *5 req/min*",
      "Integrated JWT Authentication with Spring Security, securing endpoints and user data",
    ],
    details: {
      about: [
        "A web app (originally called *Bathroom Buddy*) that lets clients request toiletries like soap or paper towels for a specific washroom, and gives the business a dashboard to manage, track, and fulfill those requests.",
        "The idea came from a tablet at my dentist's office that let patients request supplies. I wanted to build my own complete version, covering both the client side and the business side.",
        "This was my *first Spring Boot project*. It started as a simple CRUD app, and it grew as I did: every time I learned something new, like JWT auth, Redis caching, rate limiting, or unit testing, I brought it back here and built it in.",
      ],
      features: [
        {
          title: "Client requests",
          description:
            "Clients request a supply for a specific washroom through a public endpoint, with no account needed.",
        },
        {
          title: "Business dashboard",
          description:
            "Staff log in to see incoming requests, filter them by status, and update them as they're fulfilled.",
        },
        {
          title: "Supplies & washrooms",
          description:
            "Businesses track how much of each supply they have and when it was last replenished, and manage their washrooms by name and floor.",
        },
        {
          title: "Tiered rate limiting",
          description:
            "Stops clients from spamming requests: *100 req/min* for public traffic and a much stricter *5 req/min* on login.",
        },
        {
          title: "Caching",
          description:
            "Supply and washroom lists are cached in Redis and cleared whenever they change, so the dashboard doesn't hit the database for data that rarely changes.",
        },
      ],
      stack: [
        { name: "React + Tailwind CSS", why: "The client request flow and the business dashboard." },
        { name: "Spring Boot", why: "REST API, with Spring Security guarding the business routes using JWTs." },
        { name: "PostgreSQL (Supabase)", why: "Relational data fits: every request points to a supply and a washroom." },
        { name: "Redis", why: "One shared store for both the cache and the rate-limit buckets." },
        { name: "Bucket4j", why: "Token-bucket rate limiting, stored in Redis." },
        { name: "Docker", why: "Packages the backend so it runs the same everywhere." },
      ],
      limitations: [
        "Single-tenant: every logged-in user shares the same washrooms, supplies, and requests. There's no concept of separate businesses.",
        "Fulfilling a request doesn't lower the supply count automatically. Quantities are updated by hand.",
        "The dashboard doesn't update live. Staff refresh it to see new requests.",
      ],
      future: [],
      futureNote:
        "Nothing planned at the moment. As I learn more, I'll come back and keep building on it.",
    },
  },
  {
    slug: "discrete-math-chatbot",
    title: "Discrete Math Chatbot",
    description: "Educational web app that allows user interaction through chatbot and quizzes.",
    skills: ["Next.js", "FastAPI", "LangChain", "OpenAI API"],
    github: "https://github.com/AndyyBanh/discretemath-chatbot",
    highlights: [
      "Built a *RAG* pipeline indexing *873* chunks across Discrete Math chapters allowing for context-aware responses",
      "Validated *GPT-5.4-mini* response generation across real test queries, averaging *1.4s* latency",
    ],
    details: {
      about: [
        "A study tool for Discrete Math. Students can ask a chatbot questions and get explanations grounded in course material, or test themselves with multiple-choice quizzes by topic.",
        "General chatbots answer confidently but don't always match how a course actually teaches a topic. With *retrieval-augmented generation (RAG)*, this chatbot first looks up the most relevant passages of Discrete Math source text, then answers from them.",
      ],
      features: [
        {
          title: "RAG chatbot",
          description:
            "Each question pulls the most relevant chunks from a ChromaDB vector store of Discrete Math text, and the model answers using them as context.",
        },
        {
          title: "Topic quizzes",
          description: "Multiple-choice quizzes across Discrete Math topics for self-testing.",
        },
        {
          title: "Bring your own source text",
          description:
            "Scripts extract text from a PDF and build the vector database, so no copyrighted textbook ships with the repo.",
        },
      ],
      stack: [
        { name: "Next.js + Tailwind (DaisyUI)", why: "The chat and quiz pages." },
        { name: "FastAPI", why: "A lightweight Python API, in the same language as the AI tooling." },
        { name: "LangChain", why: "Connects retrieval and the model call into one pipeline." },
        { name: "ChromaDB", why: "A local vector store, with no extra service to run." },
        { name: "OpenAI API", why: "Generates the answers from the retrieved context." },
      ],
      limitations: [
        "Quizzes come from a fixed question set, not generated from the material.",
        "Running it requires your own OpenAI API key and source PDF.",
      ],
      future: [
        "Improve the UI",
        "Upgrade the pipeline with more modern RAG and AI engineering practices",
        "Generate quiz questions with AI from the course material, instead of a fixed quiz pool",
      ],
    },
  },
  {
    slug: "form-coach",
    title: "Form Coach",
    description:
      "Full Stack computer vision platform that allows users to correct their workout forms in real time using WebSockets to stream frames and computer vision to perform movement analysis.",
    skills: ["Next.js", "Spring Boot", "FastAPI", "OpenCV"],
    github: "https://github.com/AndyyBanh/formcoach",
    highlights: [
      "Developed a full-stack computer vision platform for workout form, resulting in real-time automated feedback",
      "Optimized WebSocket streaming pipeline through image downscaling, reducing payload by *42%*",
      "Implemented flow control through pending-frame tracking, achieving *10 FPS* at *36ms* average latency",
    ],
    details: {
      about: [
        "A computer vision web app that coaches your workout form in real time from your webcam. It tracks your joints, measures your arm's angle through each rep, counts reps, and tells you how to adjust.",
        "Bad form is how people get hurt and stop making progress, and most people train without a coach watching. I wanted something that gives that feedback with just a laptop camera.",
      ],
      features: [
        {
          title: "Live pose tracking",
          description:
            "MediaPipe's pose landmarker finds your shoulder, elbow, and wrist in each frame, and the app calculates the angle at the elbow.",
        },
        {
          title: "Rep counting & cues",
          description:
            "Tracks the up and down phase of every rep, counts completed reps, and returns cues like lowering the weight slowly.",
        },
        {
          title: "Real-time streaming",
          description:
            "The browser streams webcam frames over a WebSocket, and results come back on the same connection.",
        },
        {
          title: "Two exercises",
          description: "Bicep curl and shoulder press, each with its own angle thresholds.",
        },
        {
          title: "Accounts",
          description:
            "Spring Security and JWT handle sign-up and login, and the WebSocket connection is authenticated with the same token.",
        },
      ],
      stack: [
        { name: "Next.js + shadcn/ui", why: "Workout pages, camera capture, and the live reps, angle, and feedback readouts." },
        { name: "STOMP.js & SockJS", why: "Messaging over WebSocket, with a fallback for networks that block raw WebSockets." },
        { name: "Spring Boot", why: "Accounts, the WebSocket message broker, and forwarding frames to the vision service." },
        { name: "FastAPI + OpenCV + MediaPipe", why: "Decodes each frame, detects the pose, and computes joint angles with NumPy." },
        { name: "Supabase (PostgreSQL)", why: "Stores user accounts." },
      ],
      limitations: [
        "Only the left arm is tracked, so you need to face the camera and use your left side.",
        "Rep counts are kept in the Python service's memory and reset when it restarts.",
        "Results go out on a shared topic rather than a per-user queue, which doesn't scale to many simultaneous users.",
        "Only two exercises, and the service URLs point to localhost, so it isn't deployed yet.",
      ],
      future: [],
      futureNote:
        "Nothing planned at the moment. As I learn more, I'll come back and keep building on it.",
      images: [
        {
          src: "/projects/form-coach/workout.png",
          alt: "Form Coach bicep curl page with reps, feedback, and bicep angle readouts above the camera view",
          caption: "The bicep curl page: live reps, feedback, and elbow angle above the camera feed.",
          width: 1265,
          height: 1257,
        },
      ],
    },
  },
]

export const sortedProjects = sortByDateDesc(projects, (item) => item.start)
