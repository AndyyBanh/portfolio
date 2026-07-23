"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/* Literal map, not `delay-${n}` — Tailwind extracts class names statically, so a
   template string would silently compile to no CSS. */
const delayClasses = {
  0: "",
  100: "delay-100",
  200: "delay-200",
  300: "delay-300",
} as const

function Reveal({
  className,
  delay = 0,
  children,
  ...props
}: React.ComponentProps<"div"> & { delay?: keyof typeof delayClasses }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        observer.disconnect() // one-shot, so scrolling back up doesn't replay it
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-slot="reveal"
      className={cn(
        shown
          ? cn(
              "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards",
              delayClasses[delay]
            )
          : "opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Reveal }
