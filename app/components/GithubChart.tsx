import type { Activity } from 'react-activity-calendar'
import ContributionCalendar from './ContributionCalendar'

/* github-contributions-api reads the public GitHub profile and returns daily counts.
   Fetched on the server and cached for a day, so visitors never wait on it. */
async function getContributions(user: string): Promise<Activity[] | null> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return null
    const json: { contributions?: Activity[] } = await res.json()
    return json.contributions?.length ? json.contributions : null
  } catch {
    return null
  }
}

const GithubChart = async ({ user }: { user: string }) => {
  const data = await getContributions(user)
  // Service down → no chart; the rest of the page is unaffected.
  if (!data) return null
  return <ContributionCalendar data={data} />
}

export default GithubChart
