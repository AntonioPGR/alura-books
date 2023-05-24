import 'styled-components'


declare module 'styled-components' {
  export interface DefaultTheme{
    colors: {
      action: string,
      action_contrast: string,
      background: string,
      background_contrast: string,
      background_emphasys: string,
      background_emphasys_contrast: string,
      gradient: string,
      text: string,
      text_contrast: string,
      text_emphasys: string,
      text_emphasys_contrast: string
    },
    typography:{
      primary: string,
      emphasis: string,
      size: {
        small: string,
        default: string,
        large: string,
        largex: string,
        titles: string,
        headings: string
      },
    },
    spacing:{
      small: string,
      medium: string
      large: string,
      defaultBorderRadius: string,
      largeBorderRadius: string,
    },
    weight: {
      regular: number,
      bold: number,
    },
    breakpoints: {
      small_cellphohe: string,
      large_cellphone: string,
      tablet: string,
      laptop: string
    }
  }
}