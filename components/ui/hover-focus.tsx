import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

function HoverFocusGroup({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="hover-focus-group"
      className={cn("hover-focus-group", className)}
      {...props}
    />
  )
}

function HoverFocusItem({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="hover-focus-item"
      className={cn("hover-focus-item", className)}
      {...props}
    />
  )
}

export { HoverFocusGroup, HoverFocusItem }
