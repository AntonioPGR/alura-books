import { AbBotao } from "ds-alurabooks"
import { styled } from "styled-components"
import { PriceFormatterToBRL } from "utils/priceFormatter"


interface PropsOrder{
  order: IOrder
}
export const Order = ({order}:PropsOrder) => {
  return(
    <StyledOrder>
      <section className="order__infoContainer">
        <p>Pedido: <strong className="order__info">{order.id}</strong> </p>
        <p>Data do pedido: <strong className="order__info">{order.order_date}</strong> </p>
        <p>Valor total: <strong className="order__info">{PriceFormatterToBRL.format(order.cost)}</strong> </p>
        <p>Entrega realizada em: <strong className="order__info">{order.delivery_date}</strong> </p>
      </section>
      <div className="order__viewButton">
        <AbBotao texto="Detalhes" />
      </div>
    </StyledOrder>
  )
}

const StyledOrder = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.darkBlue};
  padding: ${props => props.theme.spacing.medium};

  .order__info{
    font-weight: ${props => props.theme.weight.bold};
  }

  .order__viewButton{
    max-height: 100px;
  }
`