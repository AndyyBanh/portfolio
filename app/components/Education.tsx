import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image';

const courses = [
  "Advanced OOP",
  "Data Structures and Algorithms",
  "Theory of Computation",
  "Introduction to Database Systems",
]

const Education = () => {
  return (
    <div>
        <h2 className='text-2xl font-bold text-center mb-2'>Education</h2>
        <div className='flex justify-center'>
            <div className='w-full max-w-3xl mx-auto'>
                <Card className='hover:border-blue-300'>
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
                                <p className='text-xs'>2024 - 2028 (expected)</p>
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
                                    <Badge variant='secondary'>{course}</Badge>
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
