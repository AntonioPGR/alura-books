import { Header } from "components/Header"
import { HomePage } from "pages/home"
import { NewsLetter } from "components/Newsletter"
import { MostSearchedCategories } from "components/MostSearchedCategories"
import { Footer } from "components/Footer"
import { Route, Routes } from "react-router-dom"
import { Profile } from "pages/profile"
import { Orders } from "components/Orders"


export const App = () => {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<Profile />}>
          <Route path="pedidos" element={<Orders />} />
        </Route>
      </Routes>
      <MostSearchedCategories />
      <NewsLetter />
      <Footer />
    </>
  )
}