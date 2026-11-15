"use client"

import { useState } from 'react'

// Multi-select category filter. With nothing selected, every item is visible;
// otherwise an item is visible if it has at least one selected category.
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
