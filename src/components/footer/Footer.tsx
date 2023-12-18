import classNames from 'classnames'
import React, { FC } from 'react'

import styles from '@/components/footer/footer.module.scss'

type Props = {}

const Footer: FC<Props> = ({}) => {
  return (
    <section className={classNames('relative w-full h-[300px]', styles.footer)}>
      <div className={classNames('absolute top-12 left-1/2 w-32 h-14', styles.main_box)}>
        <p className={classNames('', styles.paragraph)}>footer</p>
      </div>
    </section>
  )
}

export default Footer
