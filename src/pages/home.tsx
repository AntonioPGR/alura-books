import { Search } from "components/Search"
import { Bookstand } from "components/Bookstand"
import { useQuery } from "@tanstack/react-query"
import { BooksRequester } from "requesters/books"
import { Loader } from "components/loader"
import { MostSearchedCategories } from "components/MostSearchedCategories"
import { NewsLetter } from "components/Newsletter"

export const HomePage = () => {

  const {data:released_books, isLoading:is_released_books_loading} = useQuery(['getReleasedBooks'], () => BooksRequester.getReleasedBooks())
  const {data:best_sellers, isLoading:is_best_sellers_loading} = useQuery(['getBestSellers'], () => BooksRequester.getBestSellers())

  const renderBookstands = () => {
    if(is_best_sellers_loading || is_released_books_loading){
      return <Loader />
    }
    return (
      <>
        <Bookstand title="últimos lançamentos" books={released_books || []} />
        <Bookstand title="mais vendidos" books={best_sellers || []} />
        <MostSearchedCategories />
        <NewsLetter />
      </>
    )
  }

  return(
    <>
      <Search />
      {renderBookstands()}
    </>
  )
}