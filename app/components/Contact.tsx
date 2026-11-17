import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { HoverFocusGroup, HoverFocusItem } from '@/components/ui/hover-focus'
import PageLink from './PageLink'
import { cn } from '@/lib/utils'

const contacts = [
  { icon: FaEnvelope, label: "Email", value: "andybanhab@gmail.com", href: "mailto:andybanhab@gmail.com" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "in/andy-banh",
    href: "https://www.linkedin.com/in/andy-banh-a643a0278/",
  },
  { icon: FaGithub, label: "GitHub", value: "AndyyBanh", href: "https://github.com/AndyyBanh" },
]

const Contact = ({ pageHref }: { pageHref?: string }) => {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-center gap-2 mb-2'>
        <h2 className='text-2xl font-bold'>Contact</h2>
        {pageHref && <PageLink href={pageHref} />}
      </div>
      <p className='text-center text-muted-foreground mb-6'>
        Open to co-op and internship opportunities — reach out!
      </p>

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
                <Card className='flex-row items-center gap-4 p-5 hover:border-blue-300'>
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
