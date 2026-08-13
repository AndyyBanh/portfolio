import React from 'react'
import { Badge } from '@/components/ui/badge'
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiLangchain } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiClaude } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";


const skills = [
  { icon: <AiOutlineJavaScript />, name: "JavaScript"},
  { icon: <SiTypescript />, name: "TypeScript"},
  { icon: <FaReact />, name: "ReactJS"},
  { icon: <RiNextjsFill />, name: "NextJs"},
  { icon: <FaHtml5 />, name: "HTML/CSS"},
  { icon: <RiTailwindCssFill />, name: "TailwindCSS"},
  { icon: <TbBrandCSharp />, name: "C#" },
  { icon: <BiLogoSpringBoot />, name: "SpringBoot" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <SiLangchain />, name: "RAG/Langchain" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <BiLogoPostgresql />, name: "PostgresSQL" },
  { icon: <SiApachekafka />, name: "Kafka" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiClaude />, name: "Claude Code" },
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
      {/* Two identical halves — that's what makes the -50% translate loop invisibly. */}
      {[0, 1].map((half) => (
        <div key={half} className='flex gap-4 pr-4' aria-hidden={half === 1}>
          {/* listed twice per half so a 6-pill row still overflows wide viewports */}
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
