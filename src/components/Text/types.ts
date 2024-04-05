const variants = {
  color: {
    white: "text-white",
    black: "text-black",
  },
  size: {
    11: "text-11",
    12: "text-12",
    14: "text-14",
    16: "text-16",
    18: "text-18",
    20: "text-20",
    24: "text-24",
    32: "text-32",
    30: "text-30",
    36: "text-36",
    43: "text-43",
  },
}

const colorVariant = Object.entries(variants.color).map(([key]) => key) as Array<keyof typeof variants.color>

const sizeVariant = Object.entries(variants.size).map(([key]) => Number(key)) as Array<keyof typeof variants.size>

export type ColorType = (typeof colorVariant)[number]
export type SizeType = (typeof sizeVariant)[number]
