import 'styled-components'


declare module 'styled-components' {
  export interface DefaultTheme{
    colors: {
      yellow: string,
      white: string,
      black: string,
      darkBlue: string,
      gray: string,
      lightGray: string,
      gradient: string
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