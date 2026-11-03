"use client"

import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import { Emphasized, FilterPill } from './SectionParts'
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from '../data/projects'

// Newest first by `start`; undated projects keep array order after dated ones (sort is stable).
const sorted = [...projects].sort((a, b) => {
  if (a.start && b.start) return b.start.localeCompare(a.start)
  if (a.start) return -1
  if (b.start) return 1
  return 0
})

const linkClass =
  'inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'

const ProjectSections = () => {
  const [selected, setSelected] = useState<ProjectCategory[]>([])

  const toggle = (id: ProjectCategory) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )

  const visible =
    selected.length === 0
      ? sorted
      : sorted.filter((item) => item.categories.some((c) => selected.includes(c)))

  return (
    <div className='w-full max-w-5xl mx-auto'>
      <h2 className='text-3xl font-bold text-center mb-8'>Projects</h2>

      <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6'>
        <div>
          <p className='text-sm sm:text-base font-medium'>Filter by type</p>
          <p className='text-xs sm:text-sm text-muted-foreground'>Choose one or more</p>
        </div>
        <div className='flex flex-wrap gap-2'>
          <FilterPill active={selected.length === 0} onClick={() => setSelected([])}>
            All
          </FilterPill>
          {projectCategories.map((cat) => (
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
          <li key={item.title} className='py-8 sm:py-10'>
            <div className='min-w-0'>
              <h3 className='text-xl sm:text-2xl font-semibold leading-tight'>{item.title}</h3>
              {item.period && (
                <p className='mt-0.5 text-xs sm:text-sm text-muted-foreground'>{item.period}</p>
              )}
              {item.highlights.length > 0 && (
                <ul className='mt-4 max-w-3xl list-disc pl-5 space-y-1.5 text-sm sm:text-base leading-relaxed'>
                  {item.highlights.map((highlight, i) => (
                    <li key={i}>
                      <Emphasized text={highlight} />
                    </li>
                  ))}
                </ul>
              )}

              {item.skills.length > 0 && (
                <div className='mt-4 flex flex-wrap gap-2'>
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant='secondary'>
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}

              {(item.github || item.demo) && (
                <div className='mt-3 flex flex-wrap gap-4 text-sm'>
                  {item.github && (
                    <a
                      href={item.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`${item.title} on GitHub`}
                      className={linkClass}
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {item.demo && (
                    <a
                      href={item.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`${item.title} demo`}
                      className={linkClass}
                    >
                      <ExternalLink className='size-3.5' /> Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ProjectSections
