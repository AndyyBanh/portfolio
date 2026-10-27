import React from 'react'
import { Download, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { HoverFocusGroup, HoverFocusItem } from '@/components/ui/hover-focus'
import PageLink from './PageLink'

const resumeHref = "/AndyBanh_SoftwareDeveloper_v5.pdf"

// Placeholder work samples — swap in real deliverables as you collect them.
const workSamples: {
  title: string
  company: string
  description: string
  tags: string[]
  href?: string
}[] = [
  {
    title: "Real estate platform features",
    company: "Noble Solutions via Riipen",
    description: "Features and fixes delivered for a small real estate platform, earning 5-star feedback on Riipen.",
    tags: ["Full Stack", "Client Work"],
  },
  {
    title: "Co-op work samples",
    company: "GoodLife Fitness",
    description: "Coming Fall 2026 — samples of my co-op work will be added here.",
    tags: ["Co-op"],
  },
]

const WorkPortfolio = ({ pageHref }: { pageHref?: string }) => {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-center gap-2 mb-6'>
        <h2 className='text-2xl font-bold'>Work Portfolio</h2>
        {pageHref && <PageLink href={pageHref} />}
      </div>

      <div className='flex flex-col gap-4 w-full max-w-2xl mx-auto'>
        <Card className='flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 hover:border-blue-300'>
          <div className='flex items-center gap-3'>
            <FileText className='size-8 shrink-0 text-muted-foreground' />
            <div className='flex flex-col gap-1'>
              <CardTitle>Resume</CardTitle>
              <CardDescription>Software Developer resume (PDF)</CardDescription>
            </div>
          </div>
          <div className='flex gap-2'>
            <Button variant='outline' size='sm' asChild>
              <a href={resumeHref} target='_blank' rel='noopener noreferrer'>
                <FileText /> View
              </a>
            </Button>
            <Button size='sm' asChild>
              <a href={resumeHref} download>
                <Download /> Download
              </a>
            </Button>
          </div>
        </Card>

        <HoverFocusGroup asChild>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {workSamples.map((sample) => (
              <HoverFocusItem key={sample.title} asChild>
                <Card className='p-5 hover:border-blue-300'>
                  <div className='flex flex-col gap-1'>
                    <CardTitle>{sample.title}</CardTitle>
                    <p className='text-xs text-muted-foreground'>{sample.company}</p>
                  </div>
                  <CardDescription>{sample.description}</CardDescription>
                  <div className='flex flex-wrap gap-3'>
                    {sample.tags.map((tag) => (
                      <Badge key={tag} variant='secondary' className='shadow-2xl'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {sample.href && (
                    <a href={sample.href} className='text-sm hover:text-blue-300'>
                      View sample
                    </a>
                  )}
                </Card>
              </HoverFocusItem>
            ))}
          </div>
        </HoverFocusGroup>
      </div>
    </div>
  )
}

export default WorkPortfolio
