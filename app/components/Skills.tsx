import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Card } from '@/components/ui/card'

const Skills = () => {
  return (
    <div>
        <h2 className='text-2xl font-bold text-center'>Skills</h2>
        
            <Tabs defaultValue='frontend'>
                <div className='flex justify-center'>
                    <TabsList className='w-full max-w-3xl mx-auto'>
                        <TabsTrigger value='frontend'>Frontend</TabsTrigger>
                        <TabsTrigger value='backend'>Backend</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value='frontend'>
                    <Card className='w-full max-w-3xl mx-auto p-6'>

                    </Card>
                </TabsContent>
                <TabsContent value='backend'>
                    <Card className='w-full max-w-3xl mx-auto p-6'>

                    </Card>
                </TabsContent>
            </Tabs>
    </div>
  )
}

export default Skills