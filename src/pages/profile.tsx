import { AccountMenu } from "components/AccountMenu/acountMenu"
import { CartTitle } from "components/cartTitle"
import { Outlet } from "react-router-dom"
import { styled } from "styled-components"


export const Profile = () => {
  return(
    <StyledOrders>
      <CartTitle title="Minha sacola" />
      <div className="orders__content">
        <AccountMenu />
        <Outlet />
      </div>
    </StyledOrders>
  )
}

const StyledOrders = styled.section`
  .orders__content{
    padding: ${props => props.theme.spacing.large};
    max-width: 1248px;
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
    gap: 56px;
  }
`