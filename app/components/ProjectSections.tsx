import React from 'react'
import { HoverFocusGroup } from '@/components/ui/hover-focus'
import ProjectCard from './ProjectCard'
import { CodeComment, CodeHeading } from './SectionParts'
import { sortedProjects } from '../data/projects'

const ProjectSections = () => (
  <div className='w-full max-w-4xl mx-auto'>
    <div className='mb-8 flex flex-col items-center gap-2 text-center'>
      <CodeHeading title='Projects' className='text-3xl' />
      <CodeComment>Click a project to see what it does, how it&apos;s built, and why.</CodeComment>
    </div>

    <HoverFocusGroup asChild>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {sortedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </HoverFocusGroup>
  </div>
)

export default ProjectSections
