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
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiLangchain } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const frontendSkills = [
  { icon: <FaJava />, name: "Java"},
  { icon: <AiOutlineJavaScript />, name: "JavaScript"},
  { icon: <SiTypescript />, name: "TypeScript"},
  { icon: <FaReact />, name: "ReactJS"},
  { icon: <RiNextjsFill />, name: "NextJs"},
  { icon: <RiTailwindCssFill />, name: "TailwindCSS"},
]

const backendSkills = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaNode />, name: "NodeJs" },
  { icon: <SiExpress />, name: "ExpressJs" },
  { icon: <SiLangchain />, name: "RAG/Langchain" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPostman />, name: "Postman" },
]

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

                <TabsContent value='frontend'>
                    <Card className='w-full max-w-3xl mx-auto p-6'>
                      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center'>
                        {frontendSkills.map((skill) =>
                          <Badge
                            key={skill.name}
                            className='text-base flex items-center gap-2 hover:border-blue-300 hover:scale-110 transition'
                          >
                            {skill.icon} {skill.name}
                          </Badge>
                        )}
                      </div>
                    </Card>

                </TabsContent>
                <TabsContent value='backend'>
                    <Card className='w-full max-w-3xl mx-auto p-6'>
                      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center'>
                        {backendSkills.map((skill) => 
                          <Badge
                            key={skill.name}
                            className='text-base flex items-center gap-2 hover:border-blue-300 hover:scale-110 transition'
                          >
                            {skill.icon} {skill.name}
                          </Badge>
                        )}
                      </div>

                    </Card>
                </TabsContent>
            </Tabs>
    </div>
  )
}

export default Skills