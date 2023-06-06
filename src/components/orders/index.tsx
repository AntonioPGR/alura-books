import { SectionTitle } from "components/Title"
import { styled } from "styled-components"
import { useEffect, useState } from "react"
import { Order } from "./order"
import { OrdersRequester } from "requests/pedidos"


export const Orders = () => {
  const [orders, setOrders] = useState<IOrder[] | null>([])
  
  useEffect(() => {
    OrdersRequester.findOrders()
      .then((orders) => setOrders(orders.data))
      .catch(() => setOrders(null))
  }, [])
  
  const renderOrders = () => {
    if (orders === null) {
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