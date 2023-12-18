// 'use client'

import type { Metadata } from 'next'
import React from 'react'

import Footer from '@/components/footer/Footer'

// The Next.js 'metadata' API is not allowed in a client component.
export const metadata: Metadata = {
  title: 'Tab Title - Route',
  description: 'Route description',
}
export default function routeNameLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
