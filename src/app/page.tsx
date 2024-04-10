"use client"

import Link from "next/link"
import React, { type FC } from "react"

interface Props {}

const HomePage: FC<Props> = ({}) => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <div className="absolute top-0 left-0 h-[200px] w-[100px] bg-blue-500">
        <p>body local font</p>
        <p>body local font</p>
      </div>

      <Link href="/routeName/" className="underline underline-offset-4 font-sans">
        Local font
      </Link>

      <p className="font-roboto font-bold">Google font</p>

      <Link
        href="/recipies/"
        className="decoration-0 text-2xl font-serif transition-all duration-300 bg-purple-600 border-2 active:border-4 hover:border-purple-500 border-purple-400 p-2">
        Ready to use Components
      </Link>
    </main>
  )
}

export default HomePage
