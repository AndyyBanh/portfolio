import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaJava } from "react-icons/fa6";
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


const frontendSkills = [
  { icon: <FaJava />, name: "Java"},
  { icon: <AiOutlineJavaScript />, name: "JavaScript"},
  { icon: <SiTypescript />, name: "TypeScript"},
  { icon: <FaReact />, name: "ReactJS"},
  { icon: <RiNextjsFill />, name: "NextJs"},
  { icon: <RiTailwindCssFill />, name: "TailwindCSS"},
]

const backendSkills = [
  { icon: <BiLogoSpringBoot />, name: "SpringBoot" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <SiLangchain />, name: "RAG/Langchain" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <BiLogoPostgresql />, name: "PostgresSQL" },
]

const SkillGrid = ({ skills }: { skills: typeof frontendSkills }) => (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center'>
    {skills.map((skill, i) => (
      <Badge
        key={skill.name}
        style={{ animationDelay: `${200 + i * 65}ms` }}
        className='text-base flex items-center gap-2 hover:border-blue-300 hover:scale-110 transition animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards duration-400'
      >
        {skill.icon} {skill.name}
      </Badge>
    ))}
  </div>
)

const Skills = () => {
  return (
    <div>
        <h2 className='text-2xl font-bold text-center mb-6'>Skills</h2>
        
            <Tabs defaultValue='frontend'>
                <div className='flex justify-center mb-4'>
                    <TabsList className='w-full max-w-3xl mx-auto'>
                        <TabsTrigger value='frontend'>Frontend</TabsTrigger>
                        <TabsTrigger value='backend'>Backend</TabsTrigger>
                    </TabsList>
                </div>

                <Card className='w-full max-w-3xl mx-auto p-6'>
                    <div className='grid'>
                        <TabsContent value='frontend' className='col-start-1 row-start-1'>
                            <SkillGrid skills={frontendSkills} />
                        </TabsContent>
                        <TabsContent value='backend' className='col-start-1 row-start-1'>
                            <SkillGrid skills={backendSkills} />
                        </TabsContent>
                    </div>
                </Card>
            </Tabs>
    </div>
  )
}

export default Skills