/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from "@apollo/client";
import { ADD_ITEM_IN_CART, GET_CART } from "./queries";

export class ShoppingCartRequester{

  static useGetShoppingCart(){
    return useQuery<{carrinho:IShoppingCart}>(GET_CART)
  }

  static useAddItemInShoppingCart(){
    return useMutation<boolean, IShoppingCartAddItem>(ADD_ITEM_IN_CART)
  }

}