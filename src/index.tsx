// COMPONENTS
import { App } from './app';
// QUERY
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// REACT
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// RECOIL
import { RecoilRoot } from 'recoil';
// ROUTER
import { BrowserRouter as Router } from 'react-router-dom'
// STYLE
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { ResetCSS } from 'styles/reset';
import { defaultTheme } from 'styles/themes';

const queryClient = new QueryClient()

const Index = () => {
  return(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router>
          <RecoilRoot>
            <ThemeProvider theme={defaultTheme}>
              <ResetCSS />
              <GlobalStyle />
              <App />
            </ThemeProvider>
          </ RecoilRoot>
        </Router>
      </QueryClientProvider>
    </StrictMode>
  )
}

const html_root = document.querySelector("#root") as HTMLElement;
const root = createRoot(html_root);
root.render( <Index /> )