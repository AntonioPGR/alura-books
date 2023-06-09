import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

interface PropsDropDownMenu{
    links: ICategory[],
    title: children | string,
    titleClassName: string
}

export const DropDownMenu = ({links, title, titleClassName}:PropsDropDownMenu) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  useEffect(() => {
        document.addEventListener('click', () => setIsMenuOpen(false), true);
        return () => {
            document.removeEventListener('click', () => setIsMenuOpen(false), true);
        };
    }, []);

  return(
    <StyledPagesLinks is_menu_open={isMenuOpen? 1 : 0} onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <div className={titleClassName} >
          {title}
      </div>
      <div className="menu__links">
        {
          links.map((link) => {
            return(
              <Link className="menu__link" to={`categorias/${link.slug}`} key={link.id} target='_self'> {link.nome} </Link>
            )
          })
        }
      </div>
    </StyledPagesLinks>
  )
}


interface PropsStyle{
  is_menu_open: 1 | 0
}
const StyledPagesLinks = styled.div<PropsStyle>`
  cursor: pointer;

  .menu__title{
    font-size: ${props => props.theme.typography.size.small};
    text-transform: uppercase;
    text-align: center;
    padding: 10px;
    background-color: ${props => props.is_menu_open? props.theme.colors.darkBlue : 'none'};
    color: ${props => props.is_menu_open? props.theme.colors.white : props.theme.colors.black};

    &:hover{
      ${props => props.is_menu_open?
        '' :
        `background-image: ${props.theme.colors.gradient};`
      }
      color: ${props => props.theme.colors.white};
    }
  }

  .menu__links{
      display: ${props => props.is_menu_open? 'flex' : 'none'};
      flex-flow: column nowrap;
      gap: ${props => props.theme.spacing.small};
      padding: ${props => props.theme.spacing.small};
      position: absolute;
      background-color: ${props => props.theme.colors.white};
  }
`