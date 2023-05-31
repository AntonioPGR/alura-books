import { SectionTitle } from "components/Title"
import { styled } from "styled-components"


interface PropsCartTitle{
  title: string
}
export const CartTitle = ({title}:PropsCartTitle) => {
  return (
    <StyledCartTitle>
      <SectionTitle text_align="center" bold dark_mode="white" >{title}</SectionTitle>
    </StyledCartTitle>
  )
}

const StyledCartTitle = styled.h1`
  background-image: ${props => props.theme.colors.gradient};
  padding: ${props => props.theme.spacing.large} 0;
`