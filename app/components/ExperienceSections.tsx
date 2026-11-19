"use client"

import React from 'react'
import { useCategoryFilter } from '@/hooks/useCategoryFilter'
import { sortByDateDesc } from '@/lib/sort'
import { CategoryFilter, CodeHeading, HighlightList, Logo } from './SectionParts'
import ResumeCard from './ResumeCard'
import { experiences, experienceCategories } from '../data/experience'

const sorted = sortByDateDesc(experiences, (item) => item.start)

const ExperienceSections = () => {
  const { selected, toggle, clear, visible } = useCategoryFilter(sorted)

  return (
    <div className='w-full max-w-5xl mx-auto'>
      <CodeHeading title='Experience' className='text-3xl text-center mb-8' />

      <ResumeCard className='max-w-2xl mx-auto mb-8' />

      <CategoryFilter
        label='Filter by discipline'
        categories={experienceCategories}
        selected={selected}
        onToggle={toggle}
        onClear={clear}
      />

      <ol className='divide-y divide-border'>
        {visible.map((item) => (
          <li key={`${item.company}-${item.role}`} className='flex gap-4 sm:gap-6 py-8 sm:py-10'>
            <Logo src={item.logo} name={item.company} />
            <div className='min-w-0 flex-1'>
              <h3 className='text-xl sm:text-2xl font-semibold leading-tight text-syn-function'>{item.role}</h3>
              <p className='mt-1 text-sm sm:text-base'>{item.company}</p>
              <p className='mt-0.5 text-xs sm:text-sm text-muted-foreground'>
                <span className='text-syn-constant'>{item.period}</span>
                {item.location && <> · {item.location}</>}
              </p>
              <HighlightList items={item.highlights} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ExperienceSections
