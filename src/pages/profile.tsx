import { AccountMenu } from "components/AccountMenu/acountMenu"
import { CartTitle } from "components/cartTitle"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { SessionToken } from "utils/sessionToken"


export const Profile = () => {

  const navigate = useNavigate()
  
  useEffect(() => {
    const token = SessionToken.getToken();
    if(token === null){ 
      navigate('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <StyledProfile>
      <CartTitle title="Minha sacola" />
      <div className="orders__content">
        <AccountMenu />
        <Outlet />
      </div>
    </StyledProfile>
  )
}

const StyledProfile = styled.section`
  .orders__content{
    padding: ${props => props.theme.spacing.large};
    max-width: 1248px;
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
    gap: 56px;
  }
`