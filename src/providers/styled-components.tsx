import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { ResetCSS } from 'styles/reset';
import { defaultTheme } from 'styles/themes';

export const StyledComponentsProvider = ({children}:PropsProvider) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ResetCSS />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}