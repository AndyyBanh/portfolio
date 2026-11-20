"use client"

import { useState } from 'react'

export function useCategoryFilter<T extends { categories: readonly string[] }>(items: readonly T[]) {
  type C = T['categories'][number]
  const [selected, setSelected] = useState<C[]>([])

  const toggle = (id: C) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]))

  const clear = () => setSelected([])

  const visible =
    selected.length === 0
      ? items
      : items.filter((item) => item.categories.some((c) => selected.includes(c)))

  return { selected, toggle, clear, visible }
}
