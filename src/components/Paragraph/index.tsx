import { styled } from "styled-components"

interface PropsParagraph{
  children: children,
  dark_mode?: boolean
}
export const Paragraph = ({children, dark_mode}:PropsParagraph) => {

  return(
    <StyledParagraph dark_mode={dark_mode}>
      {children}
    </StyledParagraph>
  )
}

const StyledParagraph = styled.p<{dark_mode?:boolean}>`
  color: ${props => props.dark_mode? props.theme.colors.white : props.theme.colors.black};
`