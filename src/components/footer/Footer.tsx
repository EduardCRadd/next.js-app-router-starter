"use client"

import React, { type FC } from "react"

interface Props {}

const Footer: FC<Props> = ({}) => {
  return (
    <section className="relative w-full h-[300px] bg-color-brand">
      <div className="absolute top-12 left-1/2 w-32 h-14 bg-color-bg">
        <p className="text-3xl">footer</p>
      </div>
    </section>
  )
}

export default Footer
