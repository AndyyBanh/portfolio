"use client"

import { cloneElement, useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import { ActivityCalendar, type Activity } from 'react-activity-calendar'

/* Only the empty-day colour from the theme is actually shown: --muted flips with the site's
   theme toggle, so empty blocks follow it without any theme-detection code. */
const theme = ['var(--muted)', '#15803d']

/* Christmas palette. Active days take these in turn (by date, not by activity level),
   so the chart is an even green/red/gold mix. */
const festive = [
  '#15803d', // evergreen
  '#c8102e', // crimson
  '#e0a100', // rich gold
]

const ContributionCalendar = ({ data }: { data: Activity[] }) => {
  // The library tints block outlines by colour scheme. The server can't know the visitor's theme,
  // so render 'light' until mounted (matches the server HTML), then follow the site's toggle.
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const colorScheme = mounted && resolvedTheme === 'dark' ? 'dark' : 'light'

  const fills = useMemo(() => {
    const map = new Map<string, string>()
    let i = 0
    for (const day of data) {
      if (day.count > 0) map.set(day.date, festive[i++ % festive.length])
    }
    return map
  }, [data])

  return (
    <ActivityCalendar
      data={data}
      colorScheme={colorScheme}
      theme={{ light: theme, dark: theme }}
      renderBlock={(block, activity) => {
        const fill = fills.get(activity.date)
        return fill ? cloneElement(block, { fill }) : block
      }}
      blockSize={12}
      blockMargin={4}
      blockRadius={6}
      showColorLegend={false}
      fontSize={16}
      labels={{ totalCount: '{{count}} contributions in the last year' }}
      /* No `tooltips`: the library lazy-loads one tooltip per day square, and resolving ~370
         Suspense boundaries re-renders the calendar per square, freezing the page ~4 s on load. */
    />
  )
}

export default ContributionCalendar
