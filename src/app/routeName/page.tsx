'use client'

import { type FC } from 'react'

interface Props {}

const RouteHomePage: FC<Props> = ({}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute top-0 left-0 h-[200px] w-[100px] bg-purple-600">
        <p>route route route</p>
      </div>
    </main>
  )
}

export default RouteHomePage
