import { Search } from "components/Search"
import { Bookstand } from "components/Bookstand"
import { books_data } from "data/books"

export const HomePage = () => {
  return(
    <>
      <Search />
      <Bookstand title="últimos lançamentos" books={books_data} />
      <Bookstand title="mais vendidos" books={books_data} />
    </>
  )
}