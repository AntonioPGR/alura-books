/* eslint-disable jsx-a11y/anchor-is-valid */
// STYLE
import { styled } from "styled-components"
// IMAGES
import MenuIcon from 'images/menu.svg'
import MenuIconWhite from 'images/menuWhite.svg'
import { useState } from "react"
import { DropDownMenu } from "./dropDownMenu"
import { categories_data } from "data/categories"


export const PagesLinks = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return(
    <StyledPagesLinks is_menu_open={isMenuOpen? 1 : 0}>
      <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={isMenuOpen? MenuIconWhite : MenuIcon} alt="Menu de links" className="pages__menu" />
      <div className="pages__links">
        <DropDownMenu title={"Categorias"} links={categories_data} />
        <a href="#" target="_self">
          favoritos
        </a>
        <a href="#" target="_self">
          minha estante
        </a>
      </div>
    </StyledPagesLinks>
  )
}

interface PropsStyle{
  is_menu_open: 1 | 0
}
const StyledPagesLinks = styled.div<PropsStyle>`
  grid-area: pages_links;

  .pages__menu{
    display: none;
  }

  .pages__links{
    display: flex;
    flex-flow: row nowrap;
    gap: ${props => props.theme.spacing.small};
    align-items: center;
    justify-content: flex-start;

    a{
      font-size: ${props => props.theme.typography.size.small};
      text-transform: uppercase;
      text-align: center;
      padding: 10px;
    
      &:hover{
        background-image: ${props => props.theme.colors.gradient};
        color: #FFF;
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.laptop}){
    background-image: ${props => props.is_menu_open? props.theme.colors.gradient : 'none'};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;

    .pages__menu{
      display: block;
      height: 40px;
      width: 40px;
    }
    
    .pages__links{
      display: ${props => props.is_menu_open? 'flex' : 'none'};
      min-width: 300px;
      position: absolute;
      top: 80px;
      right: ${props => props.theme.spacing.large};
      flex-flow: column nowrap;
      align-items: flex-end;
      gap: 0;
      background-color: #FFF;
      a{
        padding: 16px 24px;
      }
    }
  }
`