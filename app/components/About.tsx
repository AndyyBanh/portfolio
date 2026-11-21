import React, { Suspense } from 'react'
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import PageLink from './PageLink'
import GithubChart from './GithubChart'
import { Skeleton } from '@/components/ui/skeleton'
import { CodeComment } from './SectionParts'

const socials = [
  { icon: Github, href: "https://github.com/AndyyBanh", label: "Github" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/andy-banh-a643a0278/",
    label: "Linkedin",
  },
  { icon: Mail, href: "mailto:andybanhab@gmail.com", label: "Email" },
]

const About = ({ pageHref }: { pageHref?: string }) => {
  return (
    <div className='w-full flex flex-col items-start gap-6 text-left'>
        <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
          <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight'>
            hi i&apos;m <span className='text-syn-keyword'>andy</span>
            <span aria-hidden className='caret ml-1 font-normal text-syn-keyword'>▍</span>
          </h1>
          <span className='flex items-center gap-1 text-sm text-syn-string'>
            <MapPin size="1em" /> Toronto, Canada
          </span>
          {pageHref && <PageLink href={pageHref} />}
        </div>

        <CodeComment as='h2' className='text-lg sm:text-2xl font-medium'>
          typical cs student who spends countless hours on leetcode and building
        </CodeComment>

        <p className='text-base sm:text-lg max-w-2xl'>
          Current Software Developer Co-op at <span className='text-syn-function'>GoodLife Fitness</span>, studying @ <span className='text-syn-function'>YorkU</span>
        </p>

        <div className='flex items-center gap-6'>
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className='text-muted-foreground transition hover:scale-120 hover:text-foreground'
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <Suspense fallback={<Skeleton className='w-full h-[161px]' />}>
          <GithubChart user="AndyyBanh" />
        </Suspense>
    </div>

  )
}

export default About
