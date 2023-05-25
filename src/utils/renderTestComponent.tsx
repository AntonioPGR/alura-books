import { ReactNode } from "react";
import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components";
import { defaultTheme } from 'styles/themes';


export const renderTestComponent = (children:ReactNode) => {
  return render(
      <ThemeProvider theme={defaultTheme}>
        {children}
      </ThemeProvider>
    )
}