import { SectionTitle } from "components/Title"
import { styled } from "styled-components"
import { Order } from "./order"


export const Orders = () => {
  return(
    <StyledOrders>
      <SectionTitle bold>Pedidos</SectionTitle>
      <ul className="ordersList__list">
        <Order order={{id: 89019041, order_date: '26/05/2022', cost: 48, delivery_date: '30/03/2022'}} />
      </ul>
    </StyledOrders>
  )
}

const StyledOrders = styled.div`
  width: 100%;

  .ordersList__list{
    margin-top: ${props => props.theme.spacing.medium};
  }
`