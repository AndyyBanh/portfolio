import React from 'react'
import Link from 'next/link'
import { Layers } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { artifactIndex } from '../data/artifacts'

const Artifacts = () => {
  return (
    <Card className='w-full max-w-3xl mx-auto gap-3 p-5 hover:border-syn-function/60'>
      <div className='flex items-center justify-between gap-3'>
        <h2 className='flex items-center gap-2 font-semibold'>
          <Layers aria-hidden className='size-4 text-syn-keyword' />
          Artifacts
        </h2>
        <span className='font-mono text-xs text-syn-constant'>[{artifactIndex.length}]</span>
      </div>

      <ul className='-mx-2 flex flex-col'>
        {artifactIndex.map(({ kind, title, href, competencies }) => (
          <li key={`${kind}-${title}`}>
            <Link
              href={href}
              className='flex flex-col gap-0.5 rounded-md px-2 py-1.5 text-sm hover:bg-line hover:text-syn-function transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-4'
            >
              <span className='shrink-0'>
                <span className='font-semibold'>{kind}:</span>{' '}
                <span className='text-muted-foreground'>{title}</span>
              </span>
              <span className='text-xs text-syn-string sm:text-right'>
                {competencies.join(' · ')}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className='text-xs text-muted-foreground'>
        Full caption and competencies on each artifact&apos;s page.
      </p>
    </Card>
  )
}

export default Artifacts
