import { styled } from "styled-components"

interface PropsErrorMessage{
  children: children,
}
export const ErrorMessage = ({children}:PropsErrorMessage) => {
  return (
    <StyledMessageContainer>
      {children}
    </StyledMessageContainer>
  )
}

const StyledMessageContainer = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.warnings};
  padding: ${p => p.theme.spacing.large};
`
