import { gql } from "@apollo/client";

export const GET_BOOKS_BY_CATEGORY_AND_TITLE = gql`
  query getBooksByCategoryAndTitle($categoriaId:Int, $titulo:String){
    livros(categoriaId: $categoriaId, titulo:$titulo){
      id,
      titulo,
      slug,
      imagemCapa,
      opcoesCompra {
        id,
        preco
      }
    }
  }
`

export const GET_RELEASED_BOOKS = gql`
  query getReleasedBooks{
    destaques{
      lancamentos{
        id,
        imagemCapa,
        titulo,
        slug,
        descricao,
        opcoesCompra{
          preco,
        }
        autor{
          nome,
        }
      }
    }
  }
`

export const GET_BEST_SELLERS = gql`
  query getBestSellers{
    destaques{
      maisVendidos{
        id,
        imagemCapa,
        titulo,
        slug,
        descricao,
        opcoesCompra{
          preco,
        }
        autor{
          nome,
        }
      }
    }
  }
`

export const GET_BOOK_BY_SLUG = gql`
query getBookBySlug($slug:String!){
  livro(slug:$slug){
    autor{
      nome,
      sobre
    }
    imagemCapa,
    titulo,
    opcoesCompra{
      titulo,
      formatos,
      preco,
      id
    },
    descricao,
    sobre
  }
}
`
