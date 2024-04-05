'use client'

import React, { type FC, useState } from 'react'

import DialogModal from '@/components/overlays/modal/DialogModal'
import Text from '@/components/Text/Text'

interface Props {}

const RouteHomePage: FC<Props> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DialogModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 text-white bg-blue-500 rounded-md">
        <Text fluidText={[8, 28]}>Open Modal</Text>
      </button>
    </main>
  )
}

export default RouteHomePage
