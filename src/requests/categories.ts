import { AxiosHandler } from "./axiosHandler"


const request_url = 'categorias'
export class CategoriesRequester{

  static getCategories(){
    return AxiosHandler.get<ICategory[]>(request_url)
  }

  static findCategoryBySlug(slug:string){
    return AxiosHandler.get<ICategory[]>(request_url, {
      params:{
        slug: slug
      }
    })
  }
  
}