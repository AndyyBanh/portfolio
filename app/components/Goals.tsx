import React from 'react'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { HoverFocusGroup, HoverFocusItem } from '@/components/ui/hover-focus'
import PageLink from './PageLink'
import { CodeHeading } from './SectionParts'
import { ProgressBar } from './CoopGoals'
import { competencies, coopTerm, personalGoals } from '../data/coopGoals'
import { milestones } from '../data/goals'

const trackedGoals = competencies.flatMap((c) => c.goals)
const personalTrackedGoals = personalGoals.flatMap((c) => c.goals)
const otherMilestones = milestones.filter((m) => !m.coop)

const eyebrow = 'text-xs font-medium uppercase tracking-wide text-syn-constant'

const Goals = ({ pageHref }: { pageHref?: string }) => {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-center gap-2 mb-6'>
        <CodeHeading title='Goals' />
        {pageHref && <PageLink href={pageHref} />}
      </div>

      <HoverFocusGroup asChild>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl mx-auto'>
          <HoverFocusItem asChild>
            <Card className='sm:col-span-2 gap-4 p-5 hover:border-syn-function/60 hover:bg-line'>
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

          {otherMilestones.map(({ when, personal, goals }) => (
            <HoverFocusItem key={when} asChild>
              <Card className='gap-4 p-5 hover:border-syn-function/60 hover:bg-line'>
                <p className={eyebrow}>{when}</p>
                {personal &&
                  personalTrackedGoals.map((goal) => (
                    <div key={goal.title} className='flex flex-col gap-1.5'>
                      <CardTitle className='text-base'>{goal.title}</CardTitle>
                      <ProgressBar label={goal.title} done={goal.done} target={goal.target} unit={goal.unit} />
                    </div>
                  ))}
                {goals.map((goal) => (
                  <div key={goal.title} className='flex flex-col gap-1.5'>
                    <CardTitle className='text-base'>{goal.title}</CardTitle>
                    <CardDescription>{goal.description}</CardDescription>
                    {goal.progress && <ProgressBar label={goal.title} {...goal.progress} />}
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
