"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [animate, setAnimate] = React.useState(false)

  return (
    <Button
      variant="ghost"
      size="icon"
      data-theme-animate={animate ? "" : undefined}
      onClick={() => {
        setAnimate(true)
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }}
      aria-label="Toggle theme"
    >
      <Sun className="theme-icon-sun h-[1.2rem] w-[1.2rem] scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="theme-icon-moon absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
