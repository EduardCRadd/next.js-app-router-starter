'use client'

import classNames from 'classnames'
import Image from 'next/image'

import styles from '@/app/routeName/page.module.scss'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={classNames('absolute top-0 left-0 h-[200px] w-[100px] bg-black', styles.test_bg)}>
        <p>route route route</p>
      </div>
    </main>
  )
}
