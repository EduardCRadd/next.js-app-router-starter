import '@/styles/globals.scss'

import classNames from 'classnames'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head'
import React from 'react'

import Header from '@/components/header/Header'

// Google Fonts
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// Local Fonts
const HelveticaRegular = localFont({
  src: '../../public/fonts/HelveticaNeue-Regular.otf',
  variable: '--helvetica-regular',
})

const RecoletaRegular = localFont({
  src: '../../public/fonts/Recoleta-Regular.otf',
  variable: '--recoleta-regular',
})

export const metadata: Metadata = {
  title: 'edrdcrdd I - Portfolio',
  description: 'Edaurd C. Radd is a London-based Web Developer, Web Designer and Freelancer.',

  openGraph: {
    type: 'website',
    title: 'edrdcrdd I - Portfolio',
    siteName: 'edrdcrdd I',
    url: 'https://www.eduardcradd.com/',
    description: 'Edaurd C. Radd is a London-based Web Developer, Web Designer and Freelancer.',
    // images: [
    //   {
    //     url: 'https://www.eduardcradd.com/images/ogImage.webp',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EduardCRadd',
    creator: '@EduardCRadd',
    title: 'edrdcrdd I',
    // image: 'https://www.eduardcradd.com/images/ogImage.webp',
    description: 'Edaurd C. Radd is a London-based Web Developer, Web Designer and Freelancer.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* SEO */}
      <Head>
        <meta
          data-n-head="ssr"
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <meta name="keywords" content="webdesign, web development, websites, developer, freelance" />
        <meta property="og:image" content="https://www.eduardcradd.com/images/ogImage.webp" />
        <meta name="twitter:image" content="https://www.eduardcradd.com/images/ogImage.webp" />
      </Head>

      <body className={classNames(HelveticaRegular.variable, RecoletaRegular.variable, '')}>
        <Header /> {/* Header component visible on all routes */}
        {children}
      </body>
    </html>
  )
}
