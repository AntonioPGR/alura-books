import { AxiosHandler } from "./axiosHandler"

const request_url = 'pedidos/'
export class OrdersRequester{

  static findOrders(){
    return AxiosHandler.get<IOrder[]>(request_url)
  }
  
}