// APOLLO CLIENT
import { useReactiveVar } from "@apollo/client"
// COMPONENTS
import { Search } from "components/Search"
import { Bookstand } from "components/Bookstand"
import { Loader } from "components/loader"
import { ErrorMessage } from "components/ErrorMessage"
import { NewsLetter } from "components/Newsletter"
import { MostSearchedCategories } from "components/MostSearchedCategories"
// REACTIVE STATES
import { var_best_sellers, var_released_books } from "graphQl/books/state"
// REQUESTERS
import { BooksRequester } from "graphQl/books/booksRequester"



export const HomePage = () => {

  const {loading:is_released_books_loading, error:released_error} = BooksRequester.getReleasedBooks()
  const {loading:is_best_sellers_loading, error:best_sellers_error} = BooksRequester.getBestSellers()

  const released_books = useReactiveVar(var_released_books)
  const best_sellers = useReactiveVar(var_best_sellers)

  const renderBookstands = () => {
    if(is_best_sellers_loading || is_released_books_loading){
      return <Loader />
    }
    if(best_sellers_error || released_error){
      return <ErrorMessage> Algo deu errado ao carregar as sessões! Mais vendidos: {best_sellers_error?.message} && lancamentos: {released_error?.message} </ErrorMessage>
    }
    return (
      <>
        <Bookstand title="últimos lançamentos" books={released_books} />
        <Bookstand title="mais vendidos" books={best_sellers} />
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