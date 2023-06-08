import { AxiosHandler } from "./axiosHandler"

const request_url = 'pedidos/'
export class OrdersRequester{

  static async findOrders(){
    const orders = await AxiosHandler.get<IOrder[]>(request_url)
    return orders.data
  }
  
}