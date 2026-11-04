"use client"

import React, { useState } from 'react'
import { Emphasized, FilterPill, Logo } from './SectionParts'
import ResumeCard from './ResumeCard'
import {
  experiences,
  experienceCategories,
  type ExperienceCategory,
} from '../data/experience'

const sorted = [...experiences].sort((a, b) => b.start.localeCompare(a.start))

const ExperienceSections = () => {
  const [selected, setSelected] = useState<ExperienceCategory[]>([])

  const toggle = (id: ExperienceCategory) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )

  const visible =
    selected.length === 0
      ? sorted
      : sorted.filter((item) => item.categories.some((c) => selected.includes(c)))

  return (
    <div className='w-full max-w-5xl mx-auto'>
      <h2 className='text-3xl font-bold text-center mb-8'>Experience</h2>

      <ResumeCard className='max-w-2xl mx-auto mb-8' />

      <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6'>
        <div>
          <p className='text-sm sm:text-base font-medium'>Filter by discipline</p>
          <p className='text-xs sm:text-sm text-muted-foreground'>Choose one or more</p>
        </div>
        <div className='flex flex-wrap gap-2'>
          <FilterPill active={selected.length === 0} onClick={() => setSelected([])}>
            All
          </FilterPill>
          {experienceCategories.map((cat) => (
            <FilterPill
              key={cat.id}
              active={selected.includes(cat.id)}
              onClick={() => toggle(cat.id)}
            >
              {cat.label}
            </FilterPill>
          ))}
        </div>
      </div>

      <ol className='divide-y divide-border'>
        {visible.map((item) => (
          <li key={`${item.company}-${item.role}`} className='flex gap-4 sm:gap-6 py-8 sm:py-10'>
            <Logo src={item.logo} name={item.company} />
            <div className='min-w-0 flex-1'>
              <h3 className='text-xl sm:text-2xl font-semibold leading-tight'>{item.role}</h3>
              <p className='mt-1 text-sm sm:text-base'>{item.company}</p>
              <p className='mt-0.5 text-xs sm:text-sm text-muted-foreground'>
                {item.period}
                {item.location && <> · {item.location}</>}
              </p>
              {item.highlights.length > 0 && (
                <ul className='mt-4 max-w-3xl list-disc pl-5 space-y-1.5 text-sm sm:text-base leading-relaxed'>
                  {item.highlights.map((highlight, i) => (
                    <li key={i}>
                      <Emphasized text={highlight} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ExperienceSections
