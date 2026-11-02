import React from 'react'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { HoverFocusGroup, HoverFocusItem } from '@/components/ui/hover-focus'
import PageLink from './PageLink'
import { ProgressBar } from './CoopGoals'
import { competencies, coopTerm, personalGoals } from '../data/coopGoals'
import { milestones } from '../data/goals'

// Homepage snippet of /goals. Reads the same data as the goals page, so update
// app/data/coopGoals.ts (progress) and app/data/goals.ts (milestones) only.
const trackedGoals = [...competencies, ...personalGoals].flatMap((c) => c.goals)
const otherMilestones = milestones.filter((m) => !m.coop)

const eyebrow = 'text-xs font-medium uppercase tracking-wide text-muted-foreground'

const Goals = ({ pageHref }: { pageHref?: string }) => {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-center gap-2 mb-6'>
        <h2 className='text-2xl font-bold'>Goals</h2>
        {pageHref && <PageLink href={pageHref} />}
      </div>

      <HoverFocusGroup asChild>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mx-auto'>
          <HoverFocusItem asChild>
            <Card className='sm:col-span-2 gap-4 p-5 hover:border-blue-300'>
              <p className={eyebrow}>Now · {coopTerm.company} co-op</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4'>
                {trackedGoals.map((goal) => (
                  <div key={goal.title} className='flex flex-col gap-1.5'>
                    <CardTitle className='text-sm font-medium'>{goal.title}</CardTitle>
                    <ProgressBar label={goal.title} done={goal.done} target={goal.target} unit={goal.unit} />
                  </div>
                ))}
              </div>
            </Card>
          </HoverFocusItem>

          {otherMilestones.map(({ when, goals }) => (
            <HoverFocusItem key={when} asChild>
              <Card className='gap-4 p-5 hover:border-blue-300'>
                <p className={eyebrow}>{when}</p>
                {goals.map((goal) => (
                  <div key={goal.title} className='flex flex-col gap-1'>
                    <CardTitle className='text-base'>{goal.title}</CardTitle>
                    <CardDescription>{goal.description}</CardDescription>
                  </div>
                ))}
              </Card>
            </HoverFocusItem>
          ))}
        </div>
      </HoverFocusGroup>
    </div>
  )
}

export default Goals
