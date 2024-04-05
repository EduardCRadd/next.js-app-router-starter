'use client'

import { type FC, HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  onClick?: () => any
}

const Button: FC<Props> = ({ onClick }) => {
  return (
    <div>
      <button className="relative w-full h-6" onClick={onClick}>
        Button
      </button>
    </div>
  )
}

export default Button
