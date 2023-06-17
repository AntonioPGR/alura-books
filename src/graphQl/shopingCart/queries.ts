import { gql } from "@apollo/client";

export const GET_CART = gql`
  query getProducts{
    carrinho{
      total,
      itens{
        quantidade,
        opcaoCompra{
          preco,
        }
        livro{
          id,
          titulo,
          imagemCapa,
          descricao,
          autor{
            nome
          }
        }
      }
    }
  }
`

export const ADD_ITEM_IN_CART = gql`
  mutation adicionarItem($item: ItemCarrinhoInput!){
    adicionarItem(item: $item)
  }
`