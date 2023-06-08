import { AxiosHandler } from "./axiosHandler"


const request_url = 'categorias'
export class CategoriesRequester{

  static getCategories(){
    return AxiosHandler.get<ICategory[]>(request_url)
  }

  static async findCategoryBySlug(slug:string){
    const response = await AxiosHandler.get<ICategory[]>(request_url, {params:{slug: slug}})
    return response.data[0]
  }
  
}