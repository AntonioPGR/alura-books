import { styled } from "styled-components"


interface PropsCartTitle{
  children:children
}
export const CartTitle = ({children}:PropsCartTitle) => {
  return (
    <StyledCartTitle>
      { children }
    </StyledCartTitle>
  )
}

const StyledCartTitle = styled.h1`
  background-image: ${props => props.theme.colors.gradient};
  padding: ${props => props.theme.spacing.large} 0;
  font-size: ${p => p.theme.typography.size.headings};
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.weight.bold};
`