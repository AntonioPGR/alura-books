import { Search } from "components/Search"
import { NewsLetter } from "components/Newsletter"
import { MostSearchedCategories } from "components/MostSearchedCategories"
import { Footer } from "components/Footer"
import { Bookstand } from "components/Bookstand"
import { books_data } from "data/books"

export const HomePage = () => {
  return(
    <>
      <Search />
      <Bookstand title="últimos lançamentos" books={books_data} />
      <Bookstand title="mais vendidos" books={books_data} />
      <MostSearchedCategories />
      <NewsLetter />
      <Footer />
    </>
  )
}