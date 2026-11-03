import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { HoverFocusGroup, HoverFocusItem } from '@/components/ui/hover-focus'
import { FaGithub } from "react-icons/fa";
import PageLink from './PageLink'
import { projects } from '../data/projects'

import React from 'react'

const Project = ({ pageHref }: { pageHref?: string }) => {
  return (
    <div>
        <div className='flex flex-wrap items-center justify-center gap-2 mb-5'>
          <h2 className='text-2xl font-bold'>Projects</h2>
          {pageHref && <PageLink href={pageHref} />}
        </div>

        <HoverFocusGroup asChild>
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-center gap-4 w-full max-w-2xl mx-auto'>
          {projects.map((project) => (
            <HoverFocusItem key={project.title} asChild><Card className='p-5 hover:border-blue-300'>
              <CardTitle>
                {project.title}
              </CardTitle>
              <CardDescription>
                {project.description}
              </CardDescription>

              <div className='flex flex-wrap gap-3'>
                {project.skills.map((skill) => (
                  <Badge key={skill} variant='secondary' className='shadow-2xl'>
                    {skill}
                  </Badge>
                ))}
              </div>

              {(project.github || project.demo) && (
                <div className='flex justify-between'>
                  {project.github && (
                    <a
                      href={project.github}
                      aria-label={`${project.title} Project`}
                      className='flex items-center gap-1.5 hover:text-blue-300'
                    >
                      <FaGithub /> Github
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      aria-label={`${project.title} Demo`}
                      className='items-center hover:text-blue-300'
                    >
                      Demo
                    </a>
                  )}
                </div>
              )}
            </Card></HoverFocusItem>
          ))}
        </div>
        </HoverFocusGroup>
    </div>
  )
}

export default Project
