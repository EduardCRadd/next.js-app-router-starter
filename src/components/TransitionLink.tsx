"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { animatePageOut } from "@/utils/animations"

interface Props {
  href: string
  label: string
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <button className="text-xl text-color-text hover:text-neutral-700" onClick={handleClick}>
      {label}
    </button>

    // <Link href={href} className="text-xl text-color-text hover:text-neutral-700" onClick={handleClick}>
    //   {label}
    // </Link>
  )
}

export default TransitionLink
