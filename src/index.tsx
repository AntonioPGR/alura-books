
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
import { BrowserRouter as Router } from 'react-router-dom'

const Index = () => {
  return(
    <StrictMode>
      <Router>
        <RecoilRoot>
          <ThemeProvider theme={defaultTheme}>
            <ResetCSS />
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </ RecoilRoot>
      </Router>
    </StrictMode>
  )
}

const html_root = document.querySelector("#root") as HTMLElement;
const root = createRoot(html_root);
root.render( <Index /> )