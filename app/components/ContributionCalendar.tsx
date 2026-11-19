"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ActivityCalendar, type Activity } from 'react-activity-calendar'

/* Orange intensity ramp: empty days use the raised surface, the busiest days use the keyword
   orange. Built from CSS vars, so it follows the site's theme toggle without theme detection.
   Explicit steps (not the library's 25/50/75% default) so level 1, the most common, still
   stands out clearly from empty days. */
const mix = (pct: number) => `color-mix(in oklab, var(--syn-keyword) ${pct}%, var(--muted))`
const theme = ['var(--muted)', mix(40), mix(60), mix(80), 'var(--syn-keyword)']

const ContributionCalendar = ({ data }: { data: Activity[] }) => {
  // The library tints block outlines by colour scheme. The server can't know the visitor's theme,
  // so render 'light' until mounted (matches the server HTML), then follow the site's toggle.
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const colorScheme = mounted && resolvedTheme === 'dark' ? 'dark' : 'light'

  return (
    <ActivityCalendar
      data={data}
      colorScheme={colorScheme}
      theme={{ light: theme, dark: theme }}
      blockSize={12}
      blockMargin={4}
      blockRadius={6}
      fontSize={16}
      labels={{
        totalCount: '{{count}} contributions in the last year',
        legend: { less: 'Less', more: 'More' },
      }}
      /* No `tooltips`: the library lazy-loads one tooltip per day square, and resolving ~370
         Suspense boundaries re-renders the calendar per square, freezing the page ~4 s on load. */
    />
  )
}

export default ContributionCalendar
