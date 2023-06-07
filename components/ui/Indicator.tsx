import { lightenColor, hexToRgb, rgbToHex } from "../utils/colors"

interface IndicatorProps {
  color?: string
}

export const Indicator = ({ color = '#56F000' }: IndicatorProps) => {
  
  const color1 = color
  const color2 = lightenColor(hexToRgb(color1), 0.2)

  return (
    <span className="relative flex h-3 w-3">
      <span style={{backgroundColor: color1}} className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[${color1}] opacity-75`}></span>
      <span style={{backgroundColor: rgbToHex(color2)}} className={`relative inline-flex rounded-full h-3 w-3 bg-[${rgbToHex(color2)}]`}></span>
    </span>
  )
}