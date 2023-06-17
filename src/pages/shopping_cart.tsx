import { MostSearchedCategories } from "components/MostSearchedCategories"
import { NewsLetter } from "components/Newsletter"
import { CartTitle } from "components/cartTitle"
import { ShoppingCart } from "components/shopping_cart"


export const ShoppingCartPage = () => {
  return(
    <>
      <CartTitle> Minha sacola </CartTitle>
      <ShoppingCart />
      <MostSearchedCategories />
      <NewsLetter />
    </>
  )
}