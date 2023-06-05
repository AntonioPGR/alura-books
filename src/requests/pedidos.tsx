import { AxiosHandler } from "./axiosHandler"

const request_url = 'pedidos/'
export class OrdersRequester{

  static findOrders(user_token:string){
    return AxiosHandler.get<IOrder[]>(request_url)
  }
  
}