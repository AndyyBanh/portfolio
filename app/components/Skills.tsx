import React from 'react'
import { Badge } from '@/components/ui/badge'
import {
  AzureIcon, ClaudeIcon, CSharpIcon, DotnetIcon, FastApiIcon, Html5Icon, JavaScriptIcon, KafkaIcon,
  LangChainIcon, MongoDbIcon, NextJsIcon, PostgreSqlIcon, ReactIcon, RedisIcon, SpringBootIcon,
  TailwindIcon, TypeScriptIcon, VercelIcon,
} from "@/components/icons/skills";


const skills = [
  { icon: <JavaScriptIcon />, name: "JavaScript"},
  { icon: <TypeScriptIcon />, name: "TypeScript"},
  { icon: <ReactIcon />, name: "ReactJS"},
  { icon: <NextJsIcon />, name: "NextJs"},
  { icon: <Html5Icon />, name: "HTML/CSS"},
  { icon: <TailwindIcon />, name: "TailwindCSS"},
  { icon: <CSharpIcon />, name: "C#" },
  { icon: <DotnetIcon />, name: ".NET" },
  { icon: <SpringBootIcon />, name: "SpringBoot" },
  { icon: <FastApiIcon />, name: "FastAPI" },
  { icon: <RedisIcon />, name: "Redis" },
  { icon: <LangChainIcon />, name: "RAG/Langchain" },
  { icon: <MongoDbIcon />, name: "MongoDB" },
  { icon: <PostgreSqlIcon />, name: "PostgresSQL" },
  { icon: <KafkaIcon />, name: "Kafka" },
  { icon: <VercelIcon />, name: "Vercel" },
  { icon: <AzureIcon />, name: "Azure" },
  { icon: <ClaudeIcon />, name: "Claude Code" },
]

const mid = Math.ceil(skills.length / 2)
const topRow = skills.slice(0, mid)
const bottomRow = skills.slice(mid)

const SkillRow = ({
  skills,
  direction,
  duration,
}: {
  skills: typeof topRow
  direction: "left" | "right"
  duration: string
}) => (
  <div className='marquee w-full'>
    <div
      className='marquee-track'
      data-direction={direction}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {[0, 1].map((half) => (
        <div key={half} className='flex gap-4 pr-4' aria-hidden={half === 1}>
          {[...skills, ...skills].map((skill, i) => (
            <Badge
              key={`${skill.name}-${i}`}
              variant='outline'
              className='gap-2 rounded-full px-4 py-2 text-sm sm:text-base [&>svg]:size-4 transition hover:border-blue-300'
            >
              {skill.icon} {skill.name}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  </div>
)

const Skills = () => {
  return (
    <div className='w-full max-w-4xl mx-auto flex flex-col gap-4'>
        <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>Tech Stack</h2>
        <p className='text-base text-muted-foreground max-w-2xl'>
          The languages, frameworks, and tools I reach for when building full stack products.
        </p>

        <div className='mt-2 flex flex-col gap-4'>
          <SkillRow skills={topRow} direction='left' duration='40s' />
          <SkillRow skills={bottomRow} direction='right' duration='46s' />
        </div>
    </div>
  )
}

export default Skills
