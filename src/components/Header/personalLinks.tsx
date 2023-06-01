/* eslint-disable jsx-a11y/anchor-is-valid */
// STYLE
import { styled } from "styled-components"
// IMAGES
import Sacola from 'images/sacola.svg'
import Perfil from 'images/perfil.svg'
import Favoritos from 'images/favorito.svg'
import Livros from 'images/books.svg'
import { StatewhatOverflowIsOpen } from "states/whatsOverflowIsOpen"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { renderOverflow } from "utils/renderOverflow"
import { SessionToken } from "utils/sessionToken"
import { Link } from "react-router-dom"
import { StateIsLoggedIn } from "states/isLoggendIn"


export const PersonalLinks = () => {

  const isLoggedIn = useRecoilValue(StateIsLoggedIn)
  const setWhatOverflow = useSetRecoilState(StatewhatOverflowIsOpen)
  const renderOver = renderOverflow()

  return(
    <>
      <StyledPersonalLinks>
        {
          isLoggedIn &&
          (
            <>
              <Link to={'/perfil/pedidos'} className="personalLink__link" target="_self">
                <img src={Sacola} alt="icone de sacola" />
                <span> Minha sacola </span>
              </Link>
              <button className="personalLink__link" onClick={() => {
                SessionToken.setToken(null)
              }}>
                <img src={Perfil} alt="icone meu perfil" />
                <span> Sair </span>
              </button>
            </>
          )
        }
        {
          !isLoggedIn &&
          <button className="personalLink__link" onClick={() => setWhatOverflow('login')}>
            <img src={Perfil} alt="icone meu perfil" />
            <span> Entrar </span>
          </button>
        }
      </StyledPersonalLinks>
      {
        renderOver()
      }
    </>
  )
}


const StyledPersonalLinks = styled.div`
  grid-area: personal_links;

  display: flex;
  flex-flow: row nowrap;
  gap: ${props => props.theme.spacing.large};
  align-items: center;
  justify-content: flex-end;

  .displayOnSmallDevice{
    display: none;
  }

  .personalLink__link{
    display: flex;
    flex-flow: row nowrap;
    gap: ${props => props.theme.spacing.small};
    align-items: center;
    justify-content: center;
    cursor: pointer;
  
    span{
      text-transform: capitalize;
    }
  
    &:hover > span{
      text-decoration: underline;
    }
    
    img{
      height: 40px;
      width: auto;
    }

  }

  @media (max-width: ${props => props.theme.breakpoints.laptop}){
    .displayOnSmallDevice{
      display: block;
    }

    .personalLink__link{
      span{
        display: none;
      }
    }
  }

  @media (max-width: 360px){
    justify-content: flex-start;
  }

`