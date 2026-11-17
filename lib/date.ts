// Formats a YYYY-MM-DD date as e.g. "Nov 14, 2026" (or "Nov 14" without the year).
// Parsed and printed in UTC so the day never shifts with the viewer's timezone.
export const formatDate = (iso: string, withYear = true) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    ...(withYear && { year: 'numeric' }),
    timeZone: 'UTC',
  })
