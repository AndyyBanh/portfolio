import React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { ArtifactCaption as ArtifactCaptionData } from '../data/artifacts'

const ArtifactCaption = ({
  source,
  caption,
  competencies,
  className,
}: ArtifactCaptionData & { className?: string }) => (
  <aside
    aria-label='Artifact caption'
    className={cn('flex flex-col gap-3 rounded-xl border p-4 sm:p-5', className)}
  >
    <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
      Artifact · {source}
    </p>
    <p className='text-sm sm:text-base leading-relaxed'>{caption}</p>
    <div className='flex flex-col gap-2'>
      <p className='text-sm font-semibold'>Competencies</p>
      <ul className='flex flex-wrap gap-2'>
        {competencies.map((name) => (
          <li key={name}>
            <Badge variant='secondary' className='whitespace-normal text-left'>
              {name}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  </aside>
)

export default ArtifactCaption
