"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-neutral-950 group-[.toaster]:text-white group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-white",
          actionButton:
            "group-[.toast]:bg-bg-neutral-950 group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-bg-neutral-950 group-[.toast]:text-white",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
