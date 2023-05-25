import { DefaultTheme } from "styled-components/dist/types";

export const defaultTheme : DefaultTheme = {
  colors: {
    yellow: "#EB9B00",
    white: "#FFFFFF",
    black: "rgba(0, 0, 0, 0.85)",
    darkBlue: "",
    gradient: "linear-gradient(to bottom right, #002F52 60%, #326589)",
  },
  typography:{
    primary: "Poppins, serif",
    emphasis: "Poppins, serif;",
    size: {
      small: '14px',
      default: '16px',
      large: '18px',
      largex: '24px',
      titles: '32px',
      headings: '36px'
    },
  },
  spacing:{
    small: '8px',
    medium: '16px',
    large: '24px',
    defaultBorderRadius: '8px',
    largeBorderRadius: '16px',
  },
  weight: {
    regular: 400,
    bold: 600,
  },
  breakpoints: {
    small_cellphohe: '364px',
    large_cellphone: '575px',
    tablet: '768px',
    laptop: '1024px'
  }
}