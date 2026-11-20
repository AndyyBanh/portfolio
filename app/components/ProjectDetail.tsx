import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { CodeComment, CodeHeading, Emphasized, HighlightList } from './SectionParts'
import type { ProjectItem } from '@/types'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='font-mono text-xl font-bold'>
        <span aria-hidden className='text-syn-comment'>## </span>
        {title}
      </h2>
      {children}
    </section>
  )
}

function CardGrid({ items }: { items: { title: string; description: string }[] }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      {items.map((item) => (
        <Card key={item.title} className='gap-2 p-5'>
          <CardTitle className='text-base leading-snug'>{item.title}</CardTitle>
          <CardDescription className='leading-relaxed'>
            <Emphasized text={item.description} />
          </CardDescription>
        </Card>
      ))}
    </div>
  )
}

const ProjectDetail = ({
  project,
  prev,
  next,
}: {
  project: ProjectItem
  prev?: ProjectItem
  next?: ProjectItem
}) => {
  const { details } = project

  return (
    <article className='w-full max-w-3xl mx-auto flex flex-col gap-12'>
      <header className='flex flex-col gap-4 border-b pb-8'>
        <CodeComment className='text-xs sm:text-sm'>projects / {project.slug}</CodeComment>
        <CodeHeading title={project.title} as='h1' className='text-3xl sm:text-4xl' />
        <p className='text-base sm:text-lg leading-relaxed'>{project.description}</p>
        {project.period && <p className='text-sm text-syn-constant'>{project.period}</p>}

        <div className='flex flex-wrap gap-2'>
          {project.skills.map((skill) => (
            <Badge key={skill} variant='code'>
              {skill}
            </Badge>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className='flex flex-wrap gap-3'>
            {project.github && (
              <Button asChild size='sm'>
                <a href={project.github} target='_blank' rel='noopener noreferrer'>
                  <Github /> View on GitHub
                </a>
              </Button>
            )}
            {project.demo && (
              <Button asChild size='sm' variant='outline'>
                <a href={project.demo} target='_blank' rel='noopener noreferrer'>
                  <ExternalLink /> Demo
                </a>
              </Button>
            )}
          </div>
        )}
      </header>

      {details.about.length > 0 && (
        <Section title='About'>
          <div className='flex flex-col gap-4 text-sm sm:text-base leading-relaxed'>
            {details.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>
                <Emphasized text={paragraph} />
              </p>
            ))}
          </div>
        </Section>
      )}

      {details.features.length > 0 && (
        <Section title='Key features'>
          <CardGrid items={details.features} />
        </Section>
      )}

      {details.stack.length > 0 && (
        <Section title='Stack'>
          <dl className='flex flex-col divide-y divide-border border-y border-border'>
            {details.stack.map(({ name, why }) => (
              <div key={name} className='flex flex-col gap-1 py-3 sm:flex-row sm:gap-6'>
                <dt className='shrink-0 font-medium text-syn-function sm:w-52'>{name}</dt>
                <dd className='text-sm sm:text-base leading-relaxed text-muted-foreground'>
                  <Emphasized text={why} />
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {details.images && details.images.length > 0 && (
        <Section title='Architecture & screenshots'>
          {details.images.map((image) => (
            <figure key={image.src} className='flex flex-col gap-2'>
              {/* White backing: the diagrams are transparent PNGs drawn in black. */}
              <div className='overflow-hidden rounded-xl border bg-white p-2'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes='(max-width: 768px) 100vw, 768px'
                  className='h-auto w-full'
                />
              </div>
              {image.caption && (
                <CodeComment as='span' className='text-xs sm:text-sm'>
                  {image.caption}
                </CodeComment>
              )}
            </figure>
          ))}
        </Section>
      )}

      {project.highlights.length > 0 && (
        <Section title='Results'>
          <div className='-mt-4'>
            <HighlightList items={project.highlights} />
          </div>
        </Section>
      )}

      {details.limitations.length > 0 && (
        <Section title='Limitations'>
          <ul className='list-disc pl-5 space-y-1.5 text-sm sm:text-base leading-relaxed'>
            {details.limitations.map((item) => (
              <li key={item}>
                <Emphasized text={item} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      {(details.future.length > 0 || details.futureNote) && (
        <Section title='Future plans'>
          {details.futureNote && (
            <CodeComment className='text-sm sm:text-base'>{details.futureNote}</CodeComment>
          )}
          {details.future.length > 0 && (
          <ul className='flex flex-col gap-2 text-sm sm:text-base leading-relaxed'>
            {details.future.map((item) => (
              <li key={item} className='flex gap-2'>
                <span className='shrink-0 font-bold text-syn-constant'>TODO:</span>
                <span>
                  <Emphasized text={item} />
                </span>
              </li>
            ))}
          </ul>
          )}
        </Section>
      )}

      {(prev || next) && (
        <nav aria-label='More projects' className='grid grid-cols-2 gap-4 border-t pt-8 text-sm'>
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className='group flex flex-col gap-1 rounded-lg p-2 -m-2 hover:bg-line'
            >
              <span className='flex items-center gap-1 text-muted-foreground'>
                <ArrowLeft className='size-3.5' /> Previous
              </span>
              <span className='font-medium text-syn-function'>{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className='flex flex-col items-end gap-1 rounded-lg p-2 -m-2 text-right hover:bg-line'
            >
              <span className='flex items-center gap-1 text-muted-foreground'>
                Next <ArrowRight className='size-3.5' />
              </span>
              <span className='font-medium text-syn-function'>{next.title}</span>
            </Link>
          )}
        </nav>
      )}
    </article>
  )
}

export default ProjectDetail
