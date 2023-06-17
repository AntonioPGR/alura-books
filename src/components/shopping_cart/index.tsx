import { SectionTitle } from "components/Title"
import { ItensList } from "./itens_list"
import { styled } from "styled-components"
import { Loader } from "components/loader"
import { ContinueBar } from "./continue_bar"
import { ItensTotal } from "./itens_total"
import { useContext } from "react"
import { shopping_cart_context } from "providers/shopping_cart"


export const ShoppingCart = () => {

  const { itens, total } = useContext(shopping_cart_context)
  
  if(!itens || !total){
    return <Loader />
  }
  return(
    <StyledShoppingCart>
      <SectionTitle> Itens selecionados </SectionTitle>
      <ItensList itens={itens} />
      <ContinueBar link={'/livros'}> Continuar comprando </ContinueBar>
      <ItensTotal total={total} />
    </StyledShoppingCart>
  )
}

const StyledShoppingCart = styled.main`
  padding:  ${p => p.theme.spacing.large};
  max-width: 1038px;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  gap: ${p => p.theme.spacing.medium};
`