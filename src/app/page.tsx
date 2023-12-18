'use client'

import classNames from 'classnames'

import styles from '@/app/page.module.scss'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className={classNames('absolute top-0 left-0 h-[200px] w-[100px] bg-black', styles.test_bg)}>
        <p>body local font - tailwind overwritten by .scss</p>
      </div>

      <a href="/routeName" className={classNames('', styles.a_test)}>
        Local font
      </a>

      <p className="roboto-bold">Google font</p>
    </main>
  )
}
