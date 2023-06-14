/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@apollo/client";
import { AxiosHandler } from "requesters/axiosHandler";
import { GET_BEST_SELLERS, GET_BOOKS_BY_CATEGORY_AND_TITLE, GET_RELEASED_BOOKS } from "./queries";
import { var_best_sellers, var_books, var_released_books } from "./state";

export class BooksRequester{

  static getReleasedBooks(){
    return useQuery<{destaques:{lancamentos:IBook[]}}>(GET_RELEASED_BOOKS, {
      onCompleted(data) {
        if(data?.destaques?.lancamentos){
          var_released_books(data.destaques.lancamentos)
        }
      },
    })
  }

  static getBestSellers(){
    return useQuery<{destaques:{maisVendidos:IBook[]}}>(GET_BEST_SELLERS, {
      onCompleted(data) {
        if(data?.destaques?.maisVendidos){
          var_best_sellers(data.destaques.maisVendidos)
        }
      },
    })
  }
  
  static getBooksByCategoryAndTitle(category_id:number, titulo?:string){
    return useQuery<{livros:IBook[]}>(GET_BOOKS_BY_CATEGORY_AND_TITLE, {
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

  static async getBooksByCategory(category_id:number){
    const books = await AxiosHandler.get<IBook[]>(`livros`, {
      params:{
        categoria: category_id
      }
    })
    return books.data
  }

  static async getBookBySlug(slug:string){
    const book = await AxiosHandler.get<IBook[]>(`livros`, {
      params:{
        slug:slug
      }  
    })
    return book.data[0]
  }

}