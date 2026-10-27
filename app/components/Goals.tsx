import React from 'react'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { HoverFocusGroup, HoverFocusItem } from '@/components/ui/hover-focus'
import PageLink from './PageLink'

// Placeholder goals — swap in your own.
const goals = [
  {
    term: "Short-term",
    items: [
      { title: "Complete GoodLife co-op term", description: "Ship production features and learn how a large engineering team works." },
      { title: "Grow my LeetCode practice", description: "Solve problems consistently to sharpen data structures and algorithms." },
    ],
  },
  {
    term: "Long-term",
    items: [
      { title: "Graduate from York University", description: "Finish my BSc in Computer Science with strong co-op experience." },
      { title: "Become a full-stack engineer", description: "Build and own products end to end, from database to UI." },
    ],
  },
  {
    term: "Learning",
    items: [
      { title: "Go deeper on system design", description: "Understand how to build scalable, reliable distributed systems." },
      { title: "Explore cloud & DevOps", description: "Get hands-on with AWS, CI/CD and containerized deployments." },
    ],
  },
]

const Goals = ({ pageHref }: { pageHref?: string }) => {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-center gap-2 mb-6'>
        <h2 className='text-2xl font-bold'>Goals</h2>
        {pageHref && <PageLink href={pageHref} />}
      </div>

      <HoverFocusGroup asChild>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto'>
          {goals.map(({ term, items }) => (
            <HoverFocusItem key={term} asChild>
              <Card className='gap-4 p-5 hover:border-blue-300'>
                <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>{term}</p>
                {items.map((goal) => (
                  <div key={goal.title} className='flex flex-col gap-1'>
                    <CardTitle className='text-base'>{goal.title}</CardTitle>
                    <CardDescription>{goal.description}</CardDescription>
                  </div>
                ))}
              </Card>
            </HoverFocusItem>
          ))}
        </div>
      </HoverFocusGroup>
    </div>
  )
}

export default Goals
