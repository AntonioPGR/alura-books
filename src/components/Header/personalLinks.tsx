/* eslint-disable jsx-a11y/anchor-is-valid */
// STYLE
import { styled } from "styled-components"
// IMAGES
import Sacola from 'images/sacola.svg'
import Perfil from 'images/perfil.svg'
import Favoritos from 'images/favorito.svg'
import { StatewhatOverflowIsOpen } from "states/whatsOverflowIsOpen"
import { useSetRecoilState } from "recoil"
import { renderOverflow } from "utils/renderOverflow"


export const PersonalLinks = () => {

  const setWhatOverflow = useSetRecoilState(StatewhatOverflowIsOpen)
  const renderOver = renderOverflow()

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
        <button className="personalLink__link" onClick={() => setWhatOverflow('login')}>
          <img src={Perfil} alt="icone meu perfil" />
          <span> Cadastrar </span>
        </button>
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