import { Header } from "components/Header"
import { HomePage } from "pages/home"
import { NewsLetter } from "components/Newsletter"
import { MostSearchedCategories } from "components/MostSearchedCategories"
import { Footer } from "components/Footer"
import { Route, Routes } from "react-router"
import { ShoppingCart } from "pages/shoppingCart"


export const App = () => {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil/produtos" element={<ShoppingCart />} />
      </Routes>
      <MostSearchedCategories />
      <NewsLetter />
      <Footer />
    </>
  )
}