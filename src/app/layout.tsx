import "@/styles/globals.css"

import classNames from "classnames"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import localFont from "next/font/local"
import Head from "next/head"
import React, { type FC } from "react"

import Header from "@/components/header/Header"

// Google Fonts
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-roboto",
})

// Local Fonts
const HelveticaRegular = localFont({
  src: "../../public/fonts/HelveticaNeue-Regular.otf",
  preload: true,
  variable: "--helvetica-regular",
})

const RecoletaRegular = localFont({
  src: "../../public/fonts/Recoleta-Regular.otf",
  preload: true,
  variable: "--recoleta-regular",
})

export const metadata: Metadata = {
  title: "edrdcrdd I - Portfolio",
  description: "Edaurd C. Radd is a London-based Web Developer, Web Designer and Freelancer.",

  openGraph: {
    type: "website",
    title: "edrdcrdd I - Portfolio",
    siteName: "edrdcrdd I",
    url: "https://www.eduardcradd.com/",
    description: "Edaurd C. Radd is a London-based Web Developer, Web Designer and Freelancer.",
    // images: [
    //   {
    //     url: 'https://www.eduardcradd.com/images/ogImage.webp',
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@EduardCRadd",
    creator: "@EduardCRadd",
    title: "edrdcrdd I",
    // image: 'https://www.eduardcradd.com/images/ogImage.webp',
    description: "Edaurd C. Radd is a London-based Web Developer, Web Designer and Freelancer.",
  },
}

interface Props {
  children: React.ReactNode
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      {/* SEO */}
      <Head>
        <meta
          data-n-head="ssr"
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1"
        />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <meta name="keywords" content="webdesign, web development, websites, developer, freelance" />
        <meta property="og:image" content="https://www.eduardcradd.com/images/ogImage.webp" />
        <meta name="twitter:image" content="https://www.eduardcradd.com/images/ogImage.webp" />
      </Head>

      {/*Set the base font/color on the body*/}
      <body
        className={classNames(
          "w-full h-full bg-color-bg text-color-text font-sans",
          roboto.variable,
          HelveticaRegular.variable,
          RecoletaRegular.variable,
        )}>
        <Header /> {/* Header component visible on all routes */}
        {children}
      </body>
    </html>
  )
}

export default RootLayout
