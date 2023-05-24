import { DefaultTheme } from "styled-components/dist/types";

export const defaultTheme : DefaultTheme = {
  colors: {
    action: "#EB9B00",
    action_contrast: "#B87900",
    background: "#FFFFFF",
    background_contrast: "#EBECEE",
    background_emphasys: "#002F52",
    background_emphasys_contrast: "#326589",
    text: "rgba(0, 0, 0, 0.85)",
    text_contrast: "#FFFFFF",
    text_emphasys: "#EB9B00",
    text_emphasys_contrast: "#002F52"
  },
  typography:{
    primary: "'Roboto Slab', serif",
    emphasis: "'Roboto Slab', serif;",
    size: {
      small: '16px',
      default: '20px',
      large: '24spx',
      largex: '40px',
      titles: '56px',
      headings: '156px'
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