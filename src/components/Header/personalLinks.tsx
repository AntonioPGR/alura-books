/* eslint-disable jsx-a11y/anchor-is-valid */
// STYLE
import { styled } from "styled-components"
// IMAGES
import Sacola from 'images/sacola.svg'
import Perfil from 'images/perfil.svg'
import Favoritos from 'images/favorito.svg'
import { useState } from "react"
import { SignUpForm } from "components/singUpForm"


export const PersonalLinks = () => {

  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  return(
    <>
      <StyledPersonalLinks>
        <span className="displayOnSmallDevice">
          <a className="personalLink__link" href="#" target="_self">
            <img src={Favoritos} alt="icone de favoritos" />
            <span> favoritos </span>
          </a>
        </span>
        <a className="personalLink__link" href="#" target="_self">
          <img src={Sacola} alt="icone sacola" />
          <span> Minha sacola </span>
        </a>
        <button className="personalLink__link" onClick={() => setIsSignUpOpen(true)}>
          <img src={Perfil} alt="icone meu perfil" />
          <span> Login </span>
        </button>
      </StyledPersonalLinks>
      {
        isSignUpOpen &&
        <SignUpForm onClose={() => setIsSignUpOpen(false)} />
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