export const convertToRem = (fontSize?: string) => {
  if (!fontSize) return 0
  return parseInt(fontSize.replace("px", ""), 10) / 16
}

export const fluidify = (minFsRaw: string, maxFsRaw: string) => {
  const minVw = convertToRem("375px")
  const maxVw = convertToRem("1728px")

  const minFs = convertToRem(minFsRaw)
  const maxFs = convertToRem(maxFsRaw)
  const factor = (1 / (maxVw - minVw)) * (maxFs - minFs)
  const calcRem = minFs - minVw * factor
  const calcVw = 100 * factor
  const calc = `${calcRem}rem + ${calcVw}vw`
  const min = Math.min(minFs, maxFs)
  const max = Math.max(minFs, maxFs)

  return {
    calc,
    min,
    max,
  }
}

export const fuildFontSize = (value: [number, number]) => {
  const [minValue, maxValue] = value

  const minFsRaw = String(minValue)
  const maxFsRaw = String(maxValue)

  const { calc, min, max } = fluidify(minFsRaw, maxFsRaw)
  const clamp = `clamp(${min}rem, ${calc}, ${max}rem)`

  return {
    clamp,
  }
}
