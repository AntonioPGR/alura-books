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
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.warnings};
  padding: ${p => p.theme.spacing.large};
  min-height: 40vh;
`
