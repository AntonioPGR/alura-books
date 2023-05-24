/* eslint-disable jsx-a11y/anchor-is-valid */
// STYLE
import { styled } from "styled-components"
// IMAGES
import Sacola from 'images/sacola.svg'
import Perfil from 'images/perfil.svg'
import Favoritos from 'images/favorito.svg'


export const PersonalLinks = () => {
  return(
    <StyledPersonalLinks>
      <span className="displayOnSmallDevice">
        <a href="#" target="_self">
          <img src={Favoritos} alt="icone de favoritos" />
          <span> favoritos </span>
        </a>
      </span>
      <a href="#" target="_self">
        <img src={Sacola} alt="icone sacola" />
        <span> Minha sacola </span>
      </a>
      <a href="#" target="_self">
        <img src={Perfil} alt="icone meu perfil" />
        <span> Meu perfil </span>
      </a>
    </StyledPersonalLinks>
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

  a{
    display: flex;
    flex-flow: row nowrap;
    gap: ${props => props.theme.spacing.small};
    align-items: center;
    justify-content: center;
  
    span{
      text-transform: capitalize;
    }
  
    &:hover > span{
      text-decoration: underline;
    }

  }

  @media (max-width: ${props => props.theme.breakpoints.laptop}){
    .displayOnSmallDevice{
      display: block;
    }

    a{
      span{
        display: none;
      }
    }
  }

  @media (max-width: 360px){
    justify-content: flex-start;
  }

`