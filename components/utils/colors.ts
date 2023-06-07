// Function to convert hexadecimal color to RGB
function hexToRgb(hex: string) {
  // Remove the "#" symbol if present
  hex = hex.replace("#", "");
  
  // Convert the hexadecimal color to RGB components
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return { r, g, b };
}

// Function to convert RGB color to hexadecimal
function rgbToHex(rgb: { r: any; g: any; b: any; }) {
  const { r, g, b } = rgb;
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

// Function to lighten the color
function lightenColor(rgb: { r: any; g: any; b: any; }, amount: number) {
  const { r, g, b } = rgb;
  
  // Increase the brightness of each RGB component
  const newR = Math.round(r + (255 - r) * amount);
  const newG = Math.round(g + (255 - g) * amount);
  const newB = Math.round(b + (255 - b) * amount);
  
  return { r: newR, g: newG, b: newB };
}

export {
  lightenColor,
  rgbToHex,
  hexToRgb
}