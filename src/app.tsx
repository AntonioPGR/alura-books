// ROUTER
import { Route, Routes } from "react-router-dom"
// PAGES
import { ProfilePage } from "pages/profile"
import { CategoryPage } from "pages/category"
import { HomePage } from "pages/home"
import { BookPage } from "pages/book"
import { NotFoundPage } from "pages/notFound"
// COMPONENT
import { Header } from "components/Header"
import { Footer } from "components/Footer"
import { Orders } from "components/orders"


export const App = () => {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<ProfilePage />}>
          <Route path="pedidos" element={<Orders />} />
        </Route>
        <Route path="/categorias/:category_slug" element={<CategoryPage />} />
        <Route path="/livro/:book_slug" element={<BookPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}