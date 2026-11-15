"use client"

import React from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import { useCategoryFilter } from '@/hooks/useCategoryFilter'
import { sortByDateDesc } from '@/lib/sort'
import { CategoryFilter, HighlightList } from './SectionParts'
import { projects, projectCategories } from '../data/projects'

// Undated projects keep array order after dated ones.
const sorted = sortByDateDesc(projects, (item) => item.start)

const linkClass =
  'inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'

const ProjectSections = () => {
  const { selected, toggle, clear, visible } = useCategoryFilter(sorted)

  return (
    <div className='w-full max-w-5xl mx-auto'>
      <h2 className='text-3xl font-bold text-center mb-8'>Projects</h2>

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
              <h3 className='text-xl sm:text-2xl font-semibold leading-tight'>{item.title}</h3>
              {item.period && (
                <p className='mt-0.5 text-xs sm:text-sm text-muted-foreground'>{item.period}</p>
              )}
              <HighlightList items={item.highlights} />

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
