import { SectionTitle } from "components/Title"
import { styled } from "styled-components"
import { Order } from "./order"
import { OrdersRequester } from "requests/orders"
import { useQuery } from "@tanstack/react-query"


export const Orders = () => {
  
  const {data:orders} = useQuery(['getOrders'], () => OrdersRequester.findOrders())
  
  const renderOrders = () => {
    if (!orders) {
      return <p> Algo deu errado ao carregar seus pedidos! </p>
    }
    if (orders.length === 0){
      return <p> Sem pedidos encontrados! </p>
    }
    return orders.map((order) => <Order key={order.id} order={order} />)
  }

  return(
    <StyledOrders>
      <SectionTitle bold>Pedidos</SectionTitle>
      <ul className="ordersList__list">
        {
          renderOrders()
        }
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