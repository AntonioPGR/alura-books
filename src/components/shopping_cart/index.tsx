import { SectionTitle } from "components/Title"
import { ShoppingCartRequester } from "graphQl/shopingCart/cartRequester"
import { ItensList } from "./itens_list"
import { styled } from "styled-components"
import { Loader } from "components/loader"
import { useReactiveVar } from "@apollo/client"
import { var_shopping_cart_itens, var_shopping_cart_total } from "graphQl/shopingCart/state"
import { ContinueBar } from "./continue_bar"
import { ItensTotal } from "./itens_total"


export const ShoppingCart = () => {

  const {loading: is_products_loading} = ShoppingCartRequester.getProducts()
  const {loading: is_total_loading} = ShoppingCartRequester.getTotalPrice()
  const itens = useReactiveVar(var_shopping_cart_itens)
  const total = useReactiveVar(var_shopping_cart_total)
  
  if(is_products_loading || is_total_loading){
    return <Loader />
  }
  if ((!itens && !is_products_loading) || (!total && !is_total_loading)) {
    return <p> Algo deu errado ao carregar seus pedidos! </p>
  }
  if (itens.length === 0){
    return <p> Sem pedidos encontrados! </p>
  }
  return(
    <StyledShoppingCart>
      <SectionTitle> Itens selecionados </SectionTitle>
      <ItensList itens={itens} />
      <ContinueBar link={'/livros'}> Continuar comprando </ContinueBar>
      <ItensTotal total={total!} />
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