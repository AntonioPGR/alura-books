import { CartTitle } from "components/cartTitle"
import { Orders } from "components/orders"


export const ShoppingCart = () => {
  return(
    <>
      <CartTitle title="Minha sacola" />
      <Orders />
    </>
  )
}