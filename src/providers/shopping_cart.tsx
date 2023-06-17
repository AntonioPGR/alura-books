import { ShoppingCartRequester } from "graphQl/shopingCart/cartRequester";
import { createContext } from "react";


export const shopping_cart_context = createContext<IShoppingCartContext>({
  add_item_to_shopping_cart: () => null
})

export const ShoppingCartProvider = ({children}:{children:children}) => {
  const {data} = ShoppingCartRequester.useGetShoppingCart()

  const [adicionar_item] = ShoppingCartRequester.useAddItemInShoppingCart()

  const add_item_to_shopping_cart = (livroId:number, opcaoCompraId:number, quantidade:number) => {
    adicionar_item({
      variables: {
        item: {
          livroId,
          opcaoCompraId,
          quantidade,
        }
      }
    })
  }

  return (
    <shopping_cart_context.Provider value={{itens: data?.carrinho.itens, total: data?.carrinho.total, add_item_to_shopping_cart}}>
      {children}
    </shopping_cart_context.Provider>
  )

}