import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

// Renders *phrase* segments as emphasized text.
export function Emphasized({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith('*') && part.endsWith('*') && part.length > 2 ? (
          <em key={i} className='text-blue-600 dark:text-blue-400'>
            {part.slice(1, -1)}
          </em>
        ) : (
          part
        )
      )}
    </>
  )
}

export function Logo({ src, name }: { src?: string; name: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`${name} logo`}
        width={64}
        height={64}
        className='size-12 sm:size-14 shrink-0 rounded-lg object-cover'
      />
    )
  }
  return (
    <div
      aria-hidden
      className='size-12 sm:size-14 shrink-0 rounded-lg bg-muted flex items-center justify-center text-lg sm:text-xl font-semibold text-muted-foreground'
    >
      {name.charAt(0)}
    </div>
  )
}

export function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type='button'
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 sm:py-2 text-xs font-medium uppercase tracking-wider transition-colors',
        'outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
        active
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground'
      )}
    >
      {active && <Check className='size-3.5' />}
      {children}
    </button>
  )
}

// Bulleted list of highlights; *phrases* are emphasized. Renders nothing when empty.
export function HighlightList({ items }: { items: string[] }) {
  if (items.length === 0) return null
  return (
    <ul className='mt-4 max-w-3xl list-disc pl-5 space-y-1.5 text-sm sm:text-base leading-relaxed'>
      {items.map((highlight, i) => (
        <li key={i}>
          <Emphasized text={highlight} />
        </li>
      ))}
    </ul>
  )
}

// "Filter by …" header with an "All" pill plus one pill per category (multi-select).
export function CategoryFilter<C extends string>({
  label,
  categories,
  selected,
  onToggle,
  onClear,
}: {
  label: string
  categories: readonly { id: C; label: string }[]
  selected: readonly C[]
  onToggle: (id: C) => void
  onClear: () => void
}) {
  return (
    <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6'>
      <div>
        <p className='text-sm sm:text-base font-medium'>{label}</p>
        <p className='text-xs sm:text-sm text-muted-foreground'>Choose one or more</p>
      </div>
      <div className='flex flex-wrap gap-2'>
        <FilterPill active={selected.length === 0} onClick={onClear}>
          All
        </FilterPill>
        {categories.map((cat) => (
          <FilterPill key={cat.id} active={selected.includes(cat.id)} onClick={() => onToggle(cat.id)}>
            {cat.label}
          </FilterPill>
        ))}
      </div>
    </div>
  )
}
