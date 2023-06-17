// ROUTER
import { Route, Routes } from "react-router-dom"
// PAGES
import { DefaultProfilePage } from "pages/default_profile"
import { CategoryPage } from "pages/category"
import { HomePage } from "pages/home"
import { BookPage } from "pages/book"
import { NotFoundPage } from "pages/notFound"
import { ShoppingCartPage } from "pages/shopping_cart"
// COMPONENT
import { Header } from "components/Header"
import { Footer } from "components/Footer"


export const App = () => {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<DefaultProfilePage />}>
          <Route path="pedidos" element={<></>} />
        </Route>
        <Route path='/sacola' element={<ShoppingCartPage />} />
        <Route path="/categorias/:category_slug" element={<CategoryPage />} />
        <Route path="/livro/:book_slug" element={<BookPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}