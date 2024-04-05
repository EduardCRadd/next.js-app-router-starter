import React, { FC } from "react"
import { tv, VariantProps } from "tailwind-variants"

import { fuildFontSize } from "@/utils/typography"

const text = tv({
  base: "font-regular",
  variants: {
    size: {
      h1xl: "desktop-l:text-21 text-20",
      h1: "text-h1-desktop",
      h2: "text-h2-desktop",
      h3: "text-h3-desktop",
      h4: "text-h4-desktop",
      h5: "text-h5-desktop",
      pxl: "text-para-xl-desktop",
      ps: "text-para-s-desktop",
      micro01: "text-micro-01-desktop",
      micro02: "text-micro-02-desktop",
      micro03: "text-micro-03-desktop",
      stat: "text-15 desktop-s:tracking-n desktop-s:text-17 desktop-m:text-18 desktop-l:text-20",
    },
  },
  defaultVariants: {
    size: "ps",
  },
})

export type TextProps = {
  children?: React.ReactNode
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "small" | "blockquote" | "div" | "li"
  size?: VariantProps<typeof text>["size"]
  className?: string
  fluidText?: [number, number]
}

const Text: FC<TextProps> = (props) => {
  const { as = "p", children, size, className, fluidText } = props
  const fluidTextSize = fluidText && fuildFontSize(fluidText)
  const Component = as

  return (
    <Component
      data-name="Text"
      className={text({ size, class: className })}
      style={{
        fontSize: fluidTextSize?.clamp,
      }}>
      {children}
    </Component>
  )
}

export default Text
