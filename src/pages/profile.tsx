import { AccountMenu } from "components/AccountMenu/acountMenu"
import { MostSearchedCategories } from "components/MostSearchedCategories"
import { NewsLetter } from "components/Newsletter"
import { CartTitle } from "components/cartTitle"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { SessionToken } from "utils/sessionToken"


export const ProfilePage = () => {

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
      <CartTitle> Minha sacola </CartTitle>
      <div className="orders__content">
        <AccountMenu />
        <Outlet />
      </div>
      <MostSearchedCategories />
      <NewsLetter />
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