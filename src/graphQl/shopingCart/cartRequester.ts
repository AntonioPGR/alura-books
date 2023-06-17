/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@apollo/client";
import { GET_CART_TOTAL_PRICE, GET_PRODUCTS } from "./queries";
import { var_shopping_cart_itens, var_shopping_cart_total } from "./state";


export class ShoppingCartRequester{

  static getProducts(){
    return useQuery<{carrinho:IShoppingCartProducts}>(GET_PRODUCTS, {
      onCompleted(data) {
        if(data.carrinho.itens){
          var_shopping_cart_itens(data.carrinho.itens)
        }
      },
    })
  }

  static getTotalPrice(){
    return useQuery<{carrinho:IShoppingCartTotalPrice}>(GET_CART_TOTAL_PRICE, {
      onCompleted(data) {
        if(data.carrinho.total){
          var_shopping_cart_total(data.carrinho.total)
        }
      },
    })
  }

}