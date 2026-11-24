import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image';
import { CodeHeading } from './SectionParts'

const courses = [
  "Advanced OOP",
  "Data Structures and Algorithms",
  "Theory of Computation",
  "Introduction to Database Systems",
]

const Education = () => {
  return (
    <div>
        <CodeHeading title='Education' className='text-center mb-6' />
        <div className='flex justify-center'>
            <div className='w-full max-w-3xl mx-auto'>
                <Card className='hover:border-syn-function/60 hover:bg-line'>
                    <CardHeader>
                        <div className='flex items-center gap-4'>
                            <Image
                                src='/yorkulogo.jpg'
                                alt='Yorku Logo'
                                width={100}
                                height={100}
                                className='size-16 sm:size-[100px] shrink-0'
                            />
                            
                            <div className='flex flex-col'>
                                <p className='text-xs text-syn-constant'>2024 - 2029 <span className='italic text-syn-comment'>(expected)</span></p>
                                <CardTitle className='text-xl'>
                                    York University
                                </CardTitle>
                                <p>BSc in Computer Science</p>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <p className='text-sm font-semibold mb-2'>Relevant Courses</p>
                        <ul className='flex flex-wrap gap-2'>
                            {courses.map((course) => (
                                <li key={course}>
                                    <Badge variant='code'>{course}</Badge>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Education
