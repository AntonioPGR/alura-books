import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
    font-size: ${props => props.theme.typography.size.default};
    font-family: 'Poppins', sans-serif;
  }
`