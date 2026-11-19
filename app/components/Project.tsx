import React from 'react'
import { HoverFocusGroup } from '@/components/ui/hover-focus'
import PageLink from './PageLink'
import ProjectCard from './ProjectCard'
import { CodeHeading } from './SectionParts'
import { projects } from '../data/projects'

const Project = ({ pageHref }: { pageHref?: string }) => {
  return (
    <div>
        <div className='flex flex-wrap items-center justify-center gap-2 mb-6'>
          <CodeHeading title='Projects' />
          {pageHref && <PageLink href={pageHref} />}
        </div>

        <HoverFocusGroup asChild>
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-center gap-4 w-full max-w-3xl mx-auto'>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        </HoverFocusGroup>
    </div>
  )
}

export default Project
