import { Switch as HeadlessUISwitch } from "@headlessui/react"
import classNames from "classnames"
import { forwardRef } from "react"

interface Props {
  enabled: boolean
  onChange: (state: boolean) => void
  size?: "default" | "small" | "medium" | "large" | "macOS"
  switchRing?: boolean
  switchIcon?: boolean
}

const Switch = forwardRef<HTMLButtonElement, Props>(
  ({ enabled, onChange, size = "default", switchRing, switchIcon }, ref) => {
    const { switch: switchSize, knob: knobSize, knobTranslate, svg: svgSize, color } = sizeStyles[size]

    return (
      <HeadlessUISwitch
        ref={ref}
        checked={enabled}
        onChange={onChange}
        className={classNames(
          switchSize,
          "group inline-flex items-center touch-none relative cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
          color(enabled),
          switchRing ? "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900" : "",
          enabled && switchRing ? "focus:ring-green-500" : "focus:ring-zinc-900",
        )}
        style={{ WebkitTapHighlightColor: "transparent" }}>
        <span
          aria-hidden="true"
          className={classNames(
            knobSize,
            "inline-block rounded-full bg-white shadow transform transition duration-200 ease-in-out",
            enabled ? knobTranslate : "translate-x-0",
            "flex justify-center items-center",
          )}>
          {switchIcon && (
            <span
              className={classNames(
                "absolute transition-opacity",
                enabled ? " duration-100 ease-out" : "opacity-100 duration-200 ease-in",
              )}
              aria-hidden="true">
              <svg className={svgSize} fill="none" viewBox="0 0 12 12">
                {enabled ? (
                  <path
                    d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                    stroke="currentColor"
                    fill="currentColor"
                  />
                ) : (
                  <path
                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                )}
              </svg>
            </span>
          )}
        </span>
        <span className="sr-only">Use setting</span>
      </HeadlessUISwitch>
    )
  },
)

Switch.displayName = "Switch"

export default Switch

const sizeStyles = {
  default: {
    switch: "h-[31px] w-[51px]",
    knob: "h-[27px] w-[27px]",
    knobTranslate: "translate-x-5",
    svg: "h-3 w-3 text-[#464543]",
    color: (enabled: boolean) => (enabled ? "bg-[#30D158]" : "bg-[#464543]"),
  },
  small: {
    switch: "h-[26.5px] w-[43.7px]",
    knob: "h-[23.1px] w-[23.1px]",
    knobTranslate: "translate-x-[16.5px]",
    svg: "h-2.5 w-2.5 text-[#464543]",
    color: (enabled: boolean) => (enabled ? "bg-[#30D158]" : "bg-[#464543]"),
  },
  medium: {
    switch: "h-[37.2px] w-[61.2px]",
    knob: "h-[32.4px] w-[32.4px]",
    knobTranslate: "translate-x-[24.6px]",
    svg: "h-3.5 w-3.5 text-[#464543]",
    color: (enabled: boolean) => (enabled ? "bg-[#30D158]" : "bg-[#464543]"),
  },
  large: {
    switch: "h-[46.5px] w-[76.5px]",
    knob: "h-[40.5px] w-[40.5px]",
    knobTranslate: "translate-x-[31.5px]",
    svg: "h-4 w-4 text-[#464543]",
    color: (enabled: boolean) => (enabled ? "bg-[#30D158]" : "bg-[#464543]"),
  },
  macOS: {
    switch: "h-[30px] w-[52px]",
    knob: "h-[26px] w-[26px]",
    knobTranslate: "translate-x-[22px]",
    svg: "h-2.5 w-2.5 text-[#464543]",
    color: (enabled: boolean) => (enabled ? "bg-[#478CF6]" : "bg-[#464543]"),
  },
}
