"use client"

import Link from "next/link"
import React, { type FC } from "react"

import TransitionLink from "@/components/TransitionLink"

interface Props {}

const Navigation: FC<Props> = ({}) => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between bg-color-brand">
      <div className="flex mx-auto gap-5">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/recipies" label="Recipies" />
        <TransitionLink href="/routeName" label="About" />
      </div>
    </nav>
  )
}

export default Navigation
