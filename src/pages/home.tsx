import { Search } from "components/Search"
import { Bookstand } from "components/Bookstand"
import { useQuery } from "@tanstack/react-query"
import { BooksRequester } from "requesters/books"
import { Loader } from "components/loader"
import { MostSearchedCategories } from "components/MostSearchedCategories"
import { NewsLetter } from "components/Newsletter"
import { ErrorMessage } from "components/ErrorMessage"
import { AxiosError } from "axios"

export const HomePage = () => {

  const {data:released_books, isLoading:is_released_books_loading, error:released_error} = useQuery<IBook[], AxiosError>(['getReleasedBooks'], () => BooksRequester.getReleasedBooks())
  const {data:best_sellers, isLoading:is_best_sellers_loading, error:best_sellers_error} = useQuery<IBook[], AxiosError>(['getBestSellers'], () => BooksRequester.getBestSellers())

  const renderBookstands = () => {
    if(is_best_sellers_loading || is_released_books_loading){
      return <Loader />
    }
    if(best_sellers_error || released_error){
      return <ErrorMessage> Algo deu errado ao carregar as sessões! Mais vendidos: {best_sellers_error?.message} && lancamentos: {released_error?.message} </ErrorMessage>
    }
    return (
      <>
        <Bookstand title="últimos lançamentos" books={released_books ?? []} />
        <Bookstand title="mais vendidos" books={best_sellers ?? []} />
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