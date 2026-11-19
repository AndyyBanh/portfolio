import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { HoverFocusGroup, HoverFocusItem } from '@/components/ui/hover-focus'
import { cn } from '@/lib/utils'
import CoopGoals, { GoalCard } from './CoopGoals'
import { CodeComment } from './SectionParts'
import { personalGoals } from '../data/coopGoals'
import { milestones } from '../data/goals'
import type { Status } from '@/types'

const dotClasses: Record<Status, string> = {
  current: 'bg-primary ring-4 ring-primary/20',
  upcoming: 'bg-primary',
  future: 'bg-background border-2 border-primary',
}

const GoalsRoadmap = () => {
  return (
    <div className='w-full max-w-3xl mx-auto'>
      <header className='flex flex-col gap-3 border-b pb-6 mb-10'>
        <CodeComment className='text-xs font-medium uppercase tracking-wide'>
          Goals · Roadmap
        </CodeComment>
        <h1 className='text-3xl sm:text-4xl font-bold tracking-tight'>Where I&apos;m headed</h1>
        <p className='text-base sm:text-lg leading-relaxed text-muted-foreground'>
          My road to becoming a software engineer and the best version of myself. These are the goals I&apos;m chasing now and next, and I update my progress as I go.
        </p>
      </header>

      <div className='relative'>
        {/* Rail sits in the middle of the label column's gap on md+ (7.5rem label + half of gap-x-10). */}
        <div
          aria-hidden
          className='absolute left-4 md:left-[8.75rem] top-0 h-full w-px -translate-x-1/2 bg-border'
        />

        <HoverFocusGroup asChild>
          <ol className='space-y-10'>
            {milestones.map(({ when, status, coop, personal, goals }) => (
              <li
                key={when}
                className='relative pl-10 md:pl-0 md:grid md:grid-cols-[7.5rem_1fr] md:gap-x-10'
              >
                <span
                  aria-hidden
                  className={cn(
                    'absolute left-4 md:left-[8.75rem] top-1 md:top-6 size-3 -translate-x-1/2 rounded-full',
                    dotClasses[status]
                  )}
                />

                <div className='flex items-center gap-2 mb-3 md:mb-0 md:pt-5 md:flex-col md:items-end md:text-right'>
                  <p className='text-xs font-medium uppercase tracking-wide text-syn-constant'>{when}</p>
                  {status === 'current' && <Badge variant='secondary'>In progress</Badge>}
                </div>

                <div className='flex flex-col gap-4'>
                  {coop && <CoopGoals />}
                  {personal &&
                    personalGoals.map((competency) => (
                      <GoalCard key={competency.name} competency={competency} />
                    ))}
                  {goals.map((goal) => (
                    <HoverFocusItem key={goal.title} asChild>
                      <Card className='gap-2 p-5 hover:border-syn-function/60 hover:bg-line'>
                        <CardTitle className='text-base'>{goal.title}</CardTitle>
                        <CardDescription>{goal.description}</CardDescription>
                        <ul className='mt-1 list-disc pl-4 text-sm text-muted-foreground space-y-1'>
                          {goal.steps.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>
                      </Card>
                    </HoverFocusItem>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </HoverFocusGroup>
      </div>
    </div>
  )
}

export default GoalsRoadmap
