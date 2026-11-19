"use client"

import React from 'react'
import { ExternalLink } from 'lucide-react'
import { Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useCategoryFilter } from '@/hooks/useCategoryFilter'
import { sortByDateDesc } from '@/lib/sort'
import { CategoryFilter, CodeHeading, HighlightList } from './SectionParts'
import { projects, projectCategories } from '../data/projects'

// Undated projects keep array order after dated ones.
const sorted = sortByDateDesc(projects, (item) => item.start)

const linkClass =
  'inline-flex items-center gap-1.5 hover:text-syn-function transition-colors'

const ProjectSections = () => {
  const { selected, toggle, clear, visible } = useCategoryFilter(sorted)

  return (
    <div className='w-full max-w-5xl mx-auto'>
      <CodeHeading title='Projects' className='text-3xl text-center mb-8' />

      <CategoryFilter
        label='Filter by type'
        categories={projectCategories}
        selected={selected}
        onToggle={toggle}
        onClear={clear}
      />

      <ol className='divide-y divide-border'>
        {visible.map((item) => (
          <li key={item.title} className='py-8 sm:py-10'>
            <div className='min-w-0'>
              <h3 className='text-xl sm:text-2xl font-semibold leading-tight text-syn-function'>{item.title}</h3>
              {item.period && (
                <p className='mt-0.5 text-xs sm:text-sm text-syn-constant'>{item.period}</p>
              )}
              <HighlightList items={item.highlights} />

              {item.skills.length > 0 && (
                <div className='mt-4 flex flex-wrap gap-2'>
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant='code'>
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
                      <Github size="1em" /> GitHub
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
