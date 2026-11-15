"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ActivityCalendar, type Activity } from 'react-activity-calendar'
import 'react-activity-calendar/tooltips.css'

/* Same pair for both schemes: --muted already flips with the site's theme toggle,
   so the calendar follows it without any theme-detection code. */
const colors = ['var(--muted)', '#2ea043']

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })

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
      theme={{ light: colors, dark: colors }}
      blockSize={12}
      blockMargin={4}
      fontSize={14}
      labels={{ totalCount: '{{count}} contributions in the last year' }}
      tooltips={{
        activity: {
          text: ({ count, date }) =>
            `${count === 0 ? 'No' : count} contribution${count === 1 ? '' : 's'} on ${formatDate(date)}`,
        },
      }}
    />
  )
}

export default ContributionCalendar
