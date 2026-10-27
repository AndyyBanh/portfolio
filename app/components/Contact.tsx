import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { HoverFocusGroup, HoverFocusItem } from '@/components/ui/hover-focus'
import PageLink from './PageLink'

const contacts = [
  { icon: FaEnvelope, label: "Email", value: "andybanhab@gmail.com", href: "mailto:andybanhab@gmail.com" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "in/andy-banh",
    href: "https://www.linkedin.com/in/andy-banh-a643a0278/",
  },
  { icon: FaGithub, label: "GitHub", value: "AndyyBanh", href: "https://github.com/AndyyBanh" },
  { icon: FaFileAlt, label: "Resume", value: "View PDF", href: "/AndyBanh_SoftwareDeveloper_v5.pdf" },
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
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <HoverFocusItem key={label} asChild>
              <a
                href={href}
                target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
                rel='noopener noreferrer'
                className='rounded-xl'
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
