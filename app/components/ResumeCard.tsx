import React from 'react'
import { Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const resumeHref = "/AndyBanh_SoftwareDeveloper_v5.pdf"

const ResumeCard = ({ className }: { className?: string }) => (
  <Card
    className={cn(
      'flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 hover:border-blue-300',
      className
    )}
  >
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
)

export default ResumeCard
