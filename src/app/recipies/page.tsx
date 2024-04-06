"use client"

import React, { type FC, useState } from "react"

import Switch from "@/components/button/Switch"
import { PlayIcon } from "@/components/Icons/Play"
import DialogModal from "@/components/overlays/modal/DialogModal"
import Text from "@/components/Text/Text"

interface Props {}

const RouteHomePage: FC<Props> = ({}) => {
  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Switch
  const [switchEnabled, setSwitchEnabled] = useState(false)
  const handleSwitchChange = (newState: boolean) => {
    setSwitchEnabled(newState)
    // additional logic that should happen when the switch changes
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      {/*Modal*/}
      <DialogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        icon={<PlayIcon className="h-6 w-6 text-green-600" aria-hidden="true" />}
        title="Payment successful"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore."
        buttonText="Go back to dashboard"
      />
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 text-white bg-blue-500 rounded-md">
        <Text fluidText={[8, 28]}>Open Modal</Text>
      </button>

      {/*Switch*/}
      <Switch enabled={switchEnabled} onChange={handleSwitchChange} size="small" />
      <Switch enabled={switchEnabled} onChange={handleSwitchChange} />
      <Switch enabled={switchEnabled} onChange={handleSwitchChange} size="medium" switchRing={true} />
      <Switch enabled={switchEnabled} onChange={handleSwitchChange} size="large" switchRing={true} />
    </main>
  )
}

export default RouteHomePage
