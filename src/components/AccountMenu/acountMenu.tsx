import { Link } from "react-router-dom"
import { styled } from "styled-components"


export const AccountMenu = () => {
  return(
    <StyledAccountMenu>
      <Link className="accountMenu__link" to='/perfil/pedidos'>Pedidos</Link>
      <Link className="accountMenu__link" to='/perfil/trocas'>Trocas</Link>
      <Link className="accountMenu__link" to='/perfil/cupons'>Cupons</Link>
      <Link className="accountMenu__link" to='/perfil/dados-de-usuario'>Seus Dados</Link>
    </StyledAccountMenu>
  )
}

const StyledAccountMenu = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  max-width: 130px;
  width: 100%;

  .accountMenu__link{
    padding: ${props => props.theme.spacing.medium};
    text-align: center;
    border-bottom: 2px solid ${props => props.theme.colors.gray};

    &:hover{
      border-bottom: 2px solid ${props => props.theme.colors.darkBlue};
      color: ${props => props.theme.colors.darkBlue};
      font-weight: ${props => props.theme.weight.bold};
    }
  }
`