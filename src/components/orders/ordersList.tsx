import { SectionTitle } from "components/Title"
import { styled } from "styled-components"


export const OrdersList = () => {
  return(
    <StyledOrdersList>
      <SectionTitle bold>Pedidos</SectionTitle>
    </StyledOrdersList>
  )
}

const StyledOrdersList = styled.ul`
  width: 100%;
`