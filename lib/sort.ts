// Newest first by an ISO date string (YYYY-MM or YYYY-MM-DD), returned as a new array.
// Items without a date go after dated ones and keep their original order (sort is stable).
export function sortByDateDesc<T>(items: readonly T[], getDate: (item: T) => string | undefined): T[] {
  return [...items].sort((a, b) => {
    const da = getDate(a)
    const db = getDate(b)
    if (da && db) return db.localeCompare(da)
    if (da) return -1
    if (db) return 1
    return 0
  })
}
