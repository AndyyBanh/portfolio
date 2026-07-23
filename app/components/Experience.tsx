"use client"

import React from 'react'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { HoverFocusGroup, HoverFocusItem } from '@/components/ui/hover-focus'
import { cn } from '@/lib/utils'

const experiences = [
  {
    role: "Software Developer Co-op",
    company: "Company",
    period: "Upcoming Fall 2026",
    description: "adding soon! super excited!",
  },
  {
    role: "Software Developer Intern",
    company: "Noble Solutions via Riipen",
    period: "Feb 2026 - April 2026",
    description: "Contributed to small real estate platform, earning 5-star feedback on Riipen",
  },
  {
    role: "B.S Computer Science",
    company: "York University",
    period: "Sep 2024 - Present",
    description: "being studious",
  },
  {
    role: "Sole Proprietor",
    company: "Self-employed",
    period: "April 2025 - Present",
    description: "Founded an ecommerce business, managing full operations, selling over 500+ products",
  },
]

const Experience = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold text-center mb-6'>Experience</h2>

      <div className='relative w-full max-w-3xl mx-auto'>
        <div
          aria-hidden
          className='absolute left-4 md:left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border'
        />

        <HoverFocusGroup asChild>
          <ol className='space-y-8'>
          {experiences.map((item, i) => (
            <li
              key={item.role}
              className='relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-x-10'
            >
              <span
                aria-hidden
                className='absolute left-4 md:left-1/2 top-6 size-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary'
              />

              <div
                className={cn(
                  i % 2 === 0
                    ? 'md:col-start-1 md:text-right'
                    : 'md:col-start-2'
                )}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HoverFocusItem asChild>
                      <Card
                        tabIndex={0}
                        className='gap-1 p-4 cursor-default hover:border-blue-300'
                      >
                        <CardTitle className='text-base'>{item.role}</CardTitle>
                        <CardDescription className='text-sm'>{item.company}</CardDescription>
                        <p className='text-xs text-muted-foreground'>{item.period}</p>
                      </Card>
                    </HoverFocusItem>
                  </TooltipTrigger>
                  <TooltipContent side='top' sideOffset={8} className='max-w-xs'>
                    {item.description}
                  </TooltipContent>
                </Tooltip>
              </div>
              </li>
            ))}
          </ol>
        </HoverFocusGroup>
      </div>
    </div>
  )
}

export default Experience
