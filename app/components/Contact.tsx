import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { HoverFocusGroup, HoverFocusItem } from '@/components/ui/hover-focus'
import PageLink from './PageLink'
import { CodeComment, CodeHeading } from './SectionParts'
import { cn } from '@/lib/utils'

const contacts = [
  { icon: Mail, label: "Email", value: "andybanhab@gmail.com", href: "mailto:andybanhab@gmail.com" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/andy-banh",
    href: "https://www.linkedin.com/in/andy-banh-a643a0278/",
  },
  { icon: Github, label: "GitHub", value: "AndyyBanh", href: "https://github.com/AndyyBanh" },
]

const Contact = ({ pageHref }: { pageHref?: string }) => {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-center gap-2 mb-2'>
        <CodeHeading title='Contact' />
        {pageHref && <PageLink href={pageHref} />}
      </div>
      <CodeComment className='text-center'>
        Open to co-op and internship opportunities — reach out!
      </CodeComment>
      <CodeComment className='text-center mb-6'>
        Always happy to chat about your experiences and life, too.
      </CodeComment>

      <HoverFocusGroup asChild>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto'>
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <HoverFocusItem key={label} asChild>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel='noopener noreferrer'
                className={cn('rounded-xl', i === 0 && 'sm:col-span-2')}
              >
                <Card className='flex-row items-center gap-4 p-5 hover:border-syn-function/60 hover:bg-line'>
                  <Icon size={24} className='shrink-0' />
                  <div className='flex flex-col gap-1 min-w-0'>
                    <CardTitle>{label}</CardTitle>
                    <CardDescription className='truncate'>{value}</CardDescription>
                  </div>
                </Card>
              </a>
            </HoverFocusItem>
          ))}
        </div>
      </HoverFocusGroup>
    </div>
  )
}

export default Contact
