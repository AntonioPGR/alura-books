import { AxiosHandler } from "./axiosHandler";


const request_url = 'autores/'
export class AutorRequester{

  static async getAutorById(id:number){
    const autor = await AxiosHandler.get<IAutor>(request_url+id)
    return autor.data
  }

}