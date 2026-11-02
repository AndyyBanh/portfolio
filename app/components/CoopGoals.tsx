import React from 'react'
import { ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardTitle } from '@/components/ui/card'
import { HoverFocusItem } from '@/components/ui/hover-focus'
import { competencies, coopTerm, personalGoals, type Competency, type CoopGoal } from '../data/coopGoals'

const formatDate = (iso: string, withYear = true) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    ...(withYear && { year: 'numeric' }),
    timeZone: 'UTC',
  })

export const ProgressBar = ({ label, done, target, unit }: { label: string; done: number; target: number; unit: string }) => {
  const pct = Math.min(100, Math.round((done / target) * 100))
  return (
    <div className='flex items-center gap-3'>
      <div
        role='progressbar'
        aria-label={`${label} progress`}
        aria-valuemin={0}
        aria-valuemax={target}
        aria-valuenow={Math.min(done, target)}
        className='h-1.5 flex-1 overflow-hidden rounded-full bg-muted'
      >
        <div className='h-full rounded-full bg-primary transition-[width]' style={{ width: `${pct}%` }} />
      </div>
      <span className='shrink-0 text-xs tabular-nums text-muted-foreground'>
        {done} / {target} {unit}
      </span>
      {done >= target && <Badge variant='secondary'>Done</Badge>}
    </div>
  )
}

const GoalProgress = ({ goal }: { goal: CoopGoal }) => {
  const { title, summary, due, target, unit, done, log } = goal
  const entries = [...log].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1'>
        <p className='text-sm font-medium'>{title}</p>
        <p className='text-xs text-muted-foreground'>Due {formatDate(due)}</p>
      </div>
      <p className='text-sm text-muted-foreground'>{summary}</p>

      <ProgressBar label={title} done={done} target={target} unit={unit} />

      {entries.length > 0 && (
        <details className='group'>
          <summary className='flex w-fit cursor-pointer list-none items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground [&::-webkit-details-marker]:hidden'>
            <ChevronRight className='size-3.5 transition-transform group-open:rotate-90' />
            Progress log ({entries.length})
          </summary>
          <ol className='mt-2 space-y-1.5 border-l pl-3'>
            {entries.map((entry, i) => (
              <li key={i} className='text-xs leading-relaxed'>
                <span className='font-medium tabular-nums'>{formatDate(entry.date, false)}</span>
                <span className='text-muted-foreground'>: {entry.note}</span>
              </li>
            ))}
          </ol>
        </details>
      )}
    </div>
  )
}

const GoalCard = ({ competency }: { competency: Competency }) => (
  <HoverFocusItem asChild>
    <Card className='gap-5 p-5 hover:border-blue-300'>
      <CardTitle className='text-base'>{competency.name}</CardTitle>
      {competency.goals.map((goal, i) => (
        <React.Fragment key={goal.title}>
          {i > 0 && <hr className='border-border' />}
          <GoalProgress goal={goal} />
        </React.Fragment>
      ))}
    </Card>
  </HoverFocusItem>
)

const CoopGoals = () => (
  <>
    <p className='text-sm text-muted-foreground'>
      <span className='font-medium text-foreground'>{coopTerm.company} co-op</span> · {coopTerm.period} · SMART goals
    </p>
    {competencies.map((competency) => (
      <GoalCard key={competency.name} competency={competency} />
    ))}
    {personalGoals.map((competency) => (
      <GoalCard key={competency.name} competency={competency} />
    ))}
  </>
)

export default CoopGoals
