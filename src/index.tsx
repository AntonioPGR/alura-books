// COMPONENTS
import { App } from "./app";
// PROVIDERS
import { ReactQueryProvider } from "providers/react-query";
import { StyledComponentsProvider } from "providers/styled-components";
import { ApolloClientProvider } from "providers/apollo-client";
// REACT
import { createRoot } from "react-dom/client";
// ROOTS
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import { ShoppingCartProvider } from "providers/shopping_cart";

const Index = () => {
  return (
    <ApolloClientProvider>
      <ShoppingCartProvider>
        <ReactQueryProvider>
          <Router>
            <RecoilRoot>
              <StyledComponentsProvider>
                <App />
              </StyledComponentsProvider>
            </RecoilRoot>
          </Router>
        </ReactQueryProvider>
      </ShoppingCartProvider>
    </ApolloClientProvider>
  );
};

const html_root = document.querySelector("#root") as HTMLElement;
const root = createRoot(html_root);
root.render(<Index />);
