import React from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const Education = () => {
  return (
    <div>
        <h2 className='text-2xl font-bold text-center'>Education</h2>
        <div className='flex justify-center'>
            <div className='w-full max-w-3xl mx-auto'>
                <Card className='hover:border-blue-300'>
                    <CardHeader>
                        <CardTitle>
                            York University
                            2024-Present
                        </CardTitle>
                        <p>BSc in Computer Science</p>
                    </CardHeader>

                </Card>
            </div>
        </div>
    </div>
  )
}

export default Education