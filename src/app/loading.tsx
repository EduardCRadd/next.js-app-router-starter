// export default function Loading() {
//   return (
//     <div className="absolute top-0 left-0 h-full w-full bg-purple-600">
//       <h1 className="text-4xl">Loading...</h1>
//     </div>
//   )
// }

"use client"

import { Transition } from "@headlessui/react"
import { useEffect, useState } from "react"

export default function Loading() {
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    setIsShowing(true) // Show the loading component
    const timeoutId = setTimeout(() => {
      setIsShowing(false) // Hide the component after 1000ms
    }, 1000)

    // Cleanup function to hide the loading component when the component unmounts
    return () => {
      clearTimeout(timeoutId)
      setIsShowing(false)
    }
  }, [])

  return (
    <Transition
      show={isShowing}
      enter="transition ease-out duration-1000 transform"
      enterFrom="translate-y-full"
      enterTo="translate-y-0"
      leave="transition ease-in duration-1000 transform"
      leaveFrom="translate-y-0"
      leaveTo="translate-y-full"
      className="absolute top-0 left-0 h-full w-full bg-purple-600">
      <div>
        <h1 className="text-4xl">Loading...</h1>
      </div>
    </Transition>
  )
}
