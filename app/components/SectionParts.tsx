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
