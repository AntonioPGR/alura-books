import { styled } from "styled-components"
import { Item } from "./item"

interface PropsItensList{
  itens: IShoppingCartProduct[]
}
export const ItensList = ({itens}:PropsItensList) => {
  return (
    <StyledItensList>
      {itens.map((item => <Item item={item} key={item.livro.id} />))}
    </StyledItensList>
  )
}

const StyledItensList = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: ${p => p.theme.spacing.medium};
`