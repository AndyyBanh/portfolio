import Link from 'next/link'
import { ArrowRight, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { HoverFocusItem } from '@/components/ui/hover-focus'
import type { ProjectItem } from '@/types'

// Whole card opens the project page: the title link's ::after stretches over the card.
// The GitHub link sits above that overlay (relative z-10) so it stays separately clickable.
const ProjectCard = ({ project }: { project: ProjectItem }) => (
  <HoverFocusItem asChild>
    <Card className='relative p-5 hover:border-syn-function/60 hover:bg-line has-[a:focus-visible]:border-syn-function/60'>
      <CardTitle>
        <Link
          href={`/projects/${project.slug}`}
          className='outline-none after:absolute after:inset-0 after:rounded-xl'
        >
          {project.title}
        </Link>
      </CardTitle>
      <CardDescription>{project.description}</CardDescription>

      <div className='flex flex-wrap gap-3'>
        {project.skills.map((skill) => (
          <Badge key={skill} variant='code'>
            {skill}
          </Badge>
        ))}
      </div>

      <div className='mt-auto flex items-center justify-between text-sm'>
        {project.github ? (
          <a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${project.title} on GitHub`}
            className='relative z-10 flex items-center gap-1.5 transition-colors hover:text-syn-function'
          >
            <Github size='1em' /> Github
          </a>
        ) : (
          <span />
        )}
        <span aria-hidden className='flex items-center gap-1 text-syn-function'>
          Read more <ArrowRight className='size-3.5' />
        </span>
      </div>
    </Card>
  </HoverFocusItem>
)

export default ProjectCard
