import { gql } from "@apollo/client";


export const GET_PRODUCTS = gql`
  query getProducts{
    carrinho{
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

export const GET_CART_TOTAL_PRICE = gql`
  query getProducts{
    carrinho{
      total,
    }
  }
`