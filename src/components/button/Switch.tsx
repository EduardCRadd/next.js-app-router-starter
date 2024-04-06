import { Switch as HeadlessUISwitch } from "@headlessui/react"
import classNames from "classnames"
import { forwardRef } from "react"

interface Props {
  enabled: boolean
  onChange: (state: boolean) => void
  size?: "default" | "small" | "medium" | "large"
  switchRing?: boolean
}

const Switch = forwardRef<HTMLButtonElement, Props>(({ enabled, onChange, size, switchRing }, ref) => {
  const { switch: switchSize, knob: knobSize, knobTranslate } = sizeStyles[size || "default"]

  return (
    <HeadlessUISwitch
      ref={ref}
      checked={enabled}
      onChange={onChange}
      className={classNames(
        switchSize,
        "group inline-flex items-center touch-none relative cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
        enabled ? "bg-[#4cd964]" : "bg-[#464543]",
        // Conditionally apply ring styles based on 'switchRing' prop
        switchRing ? "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900" : "",
        enabled && switchRing ? "focus:ring-green-500" : "focus:ring-zinc-900",
        switchRing ? "ring-offset-zinc-900" : "",
      )}
      style={{ WebkitTapHighlightColor: "transparent" }}>
      <span
        aria-hidden="true"
        className={classNames(
          knobSize,
          "inline-block rounded-full bg-white shadow transform transition duration-200 ease-in-out",
          enabled ? "bg-white" : "bg-[#CBCBCA]",
          enabled ? knobTranslate : "translate-x-0",
        )}
      />
      <span className="sr-only">Use setting</span>
    </HeadlessUISwitch>
  )
})

Switch.displayName = "Switch"

export default Switch

const sizeStyles = {
  default: {
    switch: "h-[31px] w-[51px]",
    knob: "h-[27px] w-[27px]",
    knobTranslate: "translate-x-5",
  },
  small: {
    switch: "h-[26.5px] w-[43.7px]",
    knob: "h-[23.1px] w-[23.1px]",
    knobTranslate: "translate-x-[16.5px]",
  },
  medium: {
    switch: "h-[37.2px] w-[61.2px]",
    knob: "h-[32.4px] w-[32.4px]",
    knobTranslate: "translate-x-[24.6px]",
  },
  large: {
    switch: "h-[46.5px] w-[76.5px]",
    knob: "h-[40.5px] w-[40.5px]",
    knobTranslate: "translate-x-[31.5px]",
  },
}
