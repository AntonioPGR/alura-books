import { styled } from "styled-components"

interface PropsParagraph{
  children: children,
  darkMode?: boolean
}
export const Paragraph = ({children, darkMode}:PropsParagraph) => {

  return(
    <StyledParagraph darkMode={darkMode}>
      {children}
    </StyledParagraph>
  )
}

const StyledParagraph = styled.p<{darkMode?:boolean}>`
  color: ${props => props.darkMode? props.theme.colors.white : props.theme.colors.black};
`