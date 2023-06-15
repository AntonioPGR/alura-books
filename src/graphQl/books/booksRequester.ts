/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@apollo/client";
import { GET_BEST_SELLERS, GET_BOOKS_BY_CATEGORY_AND_TITLE, GET_BOOK_BY_SLUG, GET_RELEASED_BOOKS } from "./queries";
import { var_best_sellers, var_book, var_books, var_released_books } from "./state";

export class BooksRequester{

  static getReleasedBooks(){
    return useQuery<{destaques:{lancamentos:IBookResume[]}}>(GET_RELEASED_BOOKS, {
      onCompleted(data) {
        if(data?.destaques?.lancamentos){
          var_released_books(data.destaques.lancamentos)
        }
      },
    })
  }

  static getBestSellers(){
    return useQuery<{destaques:{maisVendidos:IBookResume[]}}>(GET_BEST_SELLERS, {
      onCompleted(data) {
        if(data?.destaques?.maisVendidos){
          var_best_sellers(data.destaques.maisVendidos)
        }
      },
    })
  }
  
  static getBooksByCategoryAndTitle(category_id:number, titulo?:string){
    return useQuery<{livros:IBookBasic[]}>(GET_BOOKS_BY_CATEGORY_AND_TITLE, {
      variables :{
        categoriaId:category_id,
        titulo
      },
      onCompleted(data) {
        if(data?.livros){
          var_books(data.livros)
        }
      }
    })
  }

  static getBookBySlug(slug:string){
    return useQuery<{livro:IBookComplete}>(GET_BOOK_BY_SLUG, {
      variables:{
        slug
      },
      onCompleted(data) {
        if(data.livro){
          var_book(data.livro)
        }
      }
    })
  }

}