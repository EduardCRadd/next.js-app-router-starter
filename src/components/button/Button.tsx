'use client'

import classNames from 'classnames'
import { type FC, HTMLAttributes } from 'react'

import styles from '@/components/button/button.module.scss'

type Props = HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & {
  onClick?: () => any
}

const Button: FC<Props> = ({ onClick }) => {
  return (
    <div>
      <button className={classNames('relative w-full h-6', styles.button)} onClick={onClick}>
        Button
      </button>
    </div>
  )
}

export default Button
