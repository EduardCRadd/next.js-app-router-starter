// 'use client'

import type { Metadata } from 'next'
import React, { FC } from 'react'

import Footer from '@/components/footer/Footer'

// The Next.js 'metadata' API is not allowed in a client component.
export const metadata: Metadata = {
  title: 'Tab Title - Route',
  description: 'Route description',
}

interface Props {
  children: React.ReactNode
}

const RouteLayout: FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default RouteLayout
