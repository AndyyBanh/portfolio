import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { FaGithub } from "react-icons/fa";

import React from 'react'

const Project = () => {
  return (
    <div>
        <h2 className='text-2xl font-bold text-center mb-5'>Projects</h2>

        <div className='grid grid-cols-2 justify-center gap-4 w-full max-w-2xl mx-auto'>
          <Card className='p-5 hover:border-blue-300'>
            <CardTitle>
              Expense Tracker
            </CardTitle>
            <CardDescription>
              Full Stack MERN application that allows users to track inventory, expenses, and profits.
            </CardDescription>

            <div className='flex flex-wrap gap-3'>
              <Badge variant='secondary' className='shadow-2xl'>
                MongoDB
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                Express
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                React
              </Badge>
              <Badge variant='secondary' className='shadow-2xl'>
                NodeJs
              </Badge>
            </div>

            <div>
              <a
                href='https://github.com/AndyyBanh/expense-tracker'
                aria-label='Expense Tracker Project'
                className='flex items-center gap-1.5 hover:text-blue-300'
              >
                <FaGithub /> Github
              </a>
            </div>

          </Card>
            
          <Card className='p-5 hover:border-blue-300'>
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

          </Card>
        </div>
    </div>
  )
}

export default Project