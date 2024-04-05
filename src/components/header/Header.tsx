'use client'

import React, { type FC } from 'react'
import Link from 'next/link'

interface Props {}

const Header: FC<Props> = ({}) => {
  return (
    <section className="w-full h-28 font-serif bg-color-brand">
      <div className="relative top-10 mx-auto w-fit p-4 bg-color-bg">
        <Link href="/" className="text-blue-500 text-3xl">
          header
        </Link>
      </div>
    </section>
  )
}

export default Header
