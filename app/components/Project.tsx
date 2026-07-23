import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { HoverFocusGroup, HoverFocusItem } from '@/components/ui/hover-focus'
import { FaGithub } from "react-icons/fa";

import React from 'react'

const Project = () => {
  return (
    <div>
        <h2 className='text-2xl font-bold text-center mb-5'>Projects</h2>

        <HoverFocusGroup asChild>
        <div className='grid grid-cols-2 justify-center gap-4 w-full max-w-2xl mx-auto'>
          <HoverFocusItem asChild><Card className='p-5 hover:border-blue-300'>
            <CardTitle>
              Form Coach
            </CardTitle>
            <CardDescription>
              Full Stack computer vision platform that allows users to correct their workout forms in real time using WebSockets to stream frames and computer vision to perform movement analysis.
            </CardDescription>

            <div className='flex flex-wrap gap-3'>
              <Badge variant='secondary' className='shadow-2xl'>
                Spring Boot
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                Next.js
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                Fast API
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                OpenCV
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                MediaPipe
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                Supabase
              </Badge>
            </div>
            <div>
              <a
                href='https://github.com/AndyyBanh/formcoach'
                aria-label='Bathroom Buddy Project'
                className='flex items-center gap-1.5 hover:text-blue-300'
              >
                <FaGithub /> Github
              </a>
            </div>
          </Card></HoverFocusItem>
          <HoverFocusItem asChild><Card className='p-5 hover:border-blue-300'>
            <CardTitle>
              Bathroom Buddy
            </CardTitle>
            <CardDescription>
              Full Stack Web Application that allows clients to make requets for in demand tolietries. Allowing businesses to manage and track supplies being used.
            </CardDescription>

            <div className='flex flex-wrap gap-3'>
              <Badge variant='secondary' className='shadow-2xl'>
                Spring Boot
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                React
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                PostgresSQL
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                Redis
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                Unit-Testing
              </Badge>
            </div>
            <div>
              <a
                href='https://github.com/AndyyBanh/bathroombuddy'
                aria-label='Bathroom Buddy Project'
                className='flex items-center gap-1.5 hover:text-blue-300'
              >
                <FaGithub /> Github
              </a>
            </div>
          </Card></HoverFocusItem>
            
          <HoverFocusItem asChild><Card className='p-5 hover:border-blue-300'>
            <CardTitle>
              Discrete Math AI ChatBot
            </CardTitle>
            <CardDescription>
              Educational web app that allows user interaction through chatbot and quizzes.
            </CardDescription>


            <div className='flex flex-wrap gap-3'>
              <Badge variant='secondary' className='shadow-2xl'>
                RAG
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                LangChain
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                TypeScript
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                Python
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                FAST API
              </Badge>
            </div>

            <div className='flex justify-between'>
              <a
                href='https://github.com/AndyyBanh/discretemath-chatbot'
                aria-label='Discrete Math AI Chatbot Project'
                className='flex items-center gap-1.5 hover:text-blue-300'
              >
                <FaGithub /> Github
              </a>

              <a
                href='https://youtu.be/Q2xd9Ib49Oo'
                aria-label='Demo'
                className='items-center hover:text-blue-300'
              >
                Demo
              </a>
            </div>

          </Card></HoverFocusItem>

          <HoverFocusItem asChild><Card className='p-5 hover:border-blue-300'>
            <CardTitle>
              Financial API Gateway
            </CardTitle>
            <CardDescription>
              API gateway that routes, authenticates, and rate-limits requests to downstream financial services.
            </CardDescription>

            <div className='flex flex-wrap gap-3'>
              <Badge variant='secondary' className='shadow-2xl'>
                Spring Boot
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                Redis
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                PostgreSQL
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                Docker
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                Kafka
              </Badge>
            </div>

            <div>
              <a
                href='https://github.com/AndyyBanh/financial-api-gateway'
                aria-label='Financial API Gateway Project'
                className='flex items-center gap-1.5 hover:text-blue-300'
              >
                <FaGithub /> Github
              </a>
            </div>

          </Card></HoverFocusItem>
        </div>
        </HoverFocusGroup>
    </div>
  )
}

export default Project