
// COMPONENTS
import { App } from './app';
// REACT
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// STYLE
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { ResetCSS } from 'styles/reset';
import { defaultTheme } from 'styles/themes';
import { RecoilRoot } from 'recoil';

const Index = () => {
  return(
    <StrictMode>
      <RecoilRoot>
        <ThemeProvider theme={defaultTheme}>
          <ResetCSS />
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </ RecoilRoot>
    </StrictMode>
  )
}

const html_root = document.querySelector("#root") as HTMLElement;
const root = createRoot(html_root);
root.render( <Index /> )