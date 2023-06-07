import { AxiosHandler } from "./axiosHandler";

const request_url = 'http://localhost:8000/public/'
export class BooksRequester{

  static async getReleasedBooks(){
    const books = await AxiosHandler.get<IBook[]>(request_url + 'lancamentos/')
    return books.data
  }

  static async getBestSellers(){
    const books = await AxiosHandler.get<IBook[]>(request_url + 'mais-vendidos/')
    return books.data
  }

}