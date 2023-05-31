import { styled } from "styled-components"
import { AccountMenu } from "./acountMenu"
import { OrdersList } from "./ordersList"


export const Orders = () => {
  return (
    <StyledOrders>
      <AccountMenu />
      <OrdersList />
    </StyledOrders>
  )
}

const StyledOrders = styled.section`
  padding: ${props => props.theme.spacing.large};
  min-height: 778px;
  max-width: 1248px;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  gap: 56px;
`