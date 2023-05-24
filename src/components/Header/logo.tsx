import AluraBooks from 'images/aluraBooks.svg'
import IconeLogo from 'images/iconeLogo.svg'
import { styled } from 'styled-components'


export const Logo = () => {
  return(
    <StyledLogo>
      <img className='logo__icon' src={IconeLogo} alt="logo" />
      <img className='logo__name' src={AluraBooks} alt="nome da loja" />
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  grid-area: logo;

  display: flex;
  flex-flow: row nowrap;
  gap: ${props => props.theme.spacing.small};
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.laptop}){
    .logo__name{
      display: none;
    }
  }

  @media (max-width: 360px){
    display: none;
  }
`