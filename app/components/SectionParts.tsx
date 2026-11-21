import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Emphasized({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith('*') && part.endsWith('*') && part.length > 2 ? (
          <em key={i} className='text-syn-string'>
            {part.slice(1, -1)}
          </em>
        ) : (
          part
        )
      )}
    </>
  )
}

// "Tech Stack" -> "techStack"
function toCamelCase(title: string) {
  const words = title.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean)
  return words
    .map((w, i) => (i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()))
    .join('')
}

export function CodeHeading({
  title,
  as: Tag = 'h2',
  keyword = 'fn',
  className,
}: {
  title: string
  as?: 'h1' | 'h2' | 'h3'
  keyword?: string
  className?: string
}) {
  return (
    <Tag className={cn('font-mono text-2xl font-bold tracking-tight', className)}>
      <span aria-hidden>
        <span className='text-syn-keyword'>{keyword}</span>{' '}
        <span className='text-foreground'>{toCamelCase(title)}</span>
        <span className='font-normal text-muted-foreground'>()</span>
      </span>
      <span className='sr-only'>{title}</span>
    </Tag>
  )
}

export function CodeComment({
  as: Tag = 'p',
  className,
  children,
}: {
  as?: 'p' | 'h2' | 'span'
  className?: string
  children: React.ReactNode
}) {
  return (
    <Tag className={cn('font-mono italic text-syn-comment', className)}>
      <span aria-hidden className='not-italic select-none'>{'// '}</span>
      {children}
    </Tag>
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
