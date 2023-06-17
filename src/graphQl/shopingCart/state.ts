import { makeVar } from "@apollo/client";


export const var_shopping_cart_itens = makeVar<IShoppingCartProduct[]>([])

export const var_shopping_cart_total = makeVar<number | undefined>(undefined)