/* eslint-disable jsx-a11y/anchor-is-valid */
// STYLE
import { styled } from "styled-components"
// IMAGES
import MenuIcon from 'images/menu.svg'
import MenuIconWhite from 'images/menuWhite.svg'
import { useState } from "react"
import { DropDownMenu } from "./dropDownMenu"
import { CategoriesRequester } from "requesters/categories"
import { useQuery } from "@tanstack/react-query"


export const PagesLinks = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {data:categories, error} = useQuery(['getCategories'], () => CategoriesRequester.getCategories())

  if(error){
    alert('Não foi possivel carregar as categorias!')
    return <></>
  }
  
  if(!categories){
    return <></>
  }

  return(
    <StyledPagesLinks is_menu_open={isMenuOpen? 1 : 0}>
      <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={isMenuOpen? MenuIconWhite : MenuIcon} alt="Menu de links" className="pages__menuIcon" />
      <div className="pages__links">
        <DropDownMenu title={"Categorias"} titleClassName="personalLink__link" links={categories} />
        <a className="personalLink__link" href="#" target="_self">
          favoritos
        </a>
        <a className="personalLink__link" href="#" target="_self">
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
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  
  .pages__menuIcon{
    display: none;
    width: 100%;
    height: auto;
  }
  
  .pages__links{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
  }
  
  .personalLink__link{
    padding: ${p => p.theme.spacing.small} ${p => p.theme.spacing.medium};
    text-transform: uppercase;
    &:hover{
      background-image: ${p => p.theme.colors.gradient};
      color: ${p => p.theme.colors.white};
    }
  }
  
  @media (max-width: ${p => p.theme.breakpoints.laptop}){
    .pages__menuIcon{
      display: block;
    }
    
    .pages__links{
      display: ${p => p.is_menu_open? 'flex' : 'none'};
      flex-flow: column nowrap;
      align-items: center;
      justify-content: flex-end;
      position: absolute;
      top: 200px;
      left: 200px;
    }
  }
  
`