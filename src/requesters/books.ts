import { AxiosHandler } from "./axiosHandler";

export class BooksRequester{

  static async getReleasedBooks(){
    const books = await AxiosHandler.get<IBook[]>('public/lancamentos/')
    return books.data
  }

  static async getBestSellers(){
    const books = await AxiosHandler.get<IBook[]>('public/mais-vendidos/')
    return books.data
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