import { styled } from "styled-components";
import { BookCardCategory} from "./bookCardCartegory";
import { Loader } from "components/loader";
import { ErrorMessage } from "components/ErrorMessage";
import { AbCampoTexto } from "ds-alurabooks";
import { useState } from "react";
import { BooksRequester } from "graphQl/books/booksRequester";
import { useReactiveVar } from "@apollo/client";
import { var_books } from "graphQl/books/state";

interface PropsBooksList{
  category_id: number;
}
export const BooksList = ({category_id}:PropsBooksList) => {

  const [search, setSearch] = useState('')

  const books = useReactiveVar(var_books)
  const {loading:isBooksLoading, refetch} = BooksRequester.getBooksByCategoryAndTitle(category_id, search)

  const handleInputChange = (value:string) => {
    setSearch(value)
    // refetch({
    //   variables: {
    //     categoriaId: category_id,
    //     titulo: search
    //   }
    // })
  }

  const renderBooksList = () => {
    if(isBooksLoading){
    return <Loader />
  }
  if(!books){
    return <ErrorMessage> Não foi possivel encontrar os livros desejados! verifique se o nome está correto e tente novamente </ErrorMessage>
  }
  if(books.length === 0){
    return <ErrorMessage> Ainda não temos livros disponiveis nesta categoria! mas fique a vontade para explorar outras! </ErrorMessage>
  }
    return (
      <ul className="booklist__books">
        {books.map(book => <BookCardCategory key={book.id} book={book} />)}
      </ul>
    )
  }

  return (
    <StyledBooksList>
      <form className="booklist__search">
        <AbCampoTexto value={search} onChange={(value) => handleInputChange(value)} />
      </form>
      {
        renderBooksList()
      }
    </StyledBooksList>
  )
}

const StyledBooksList = styled.section`
  max-width: 1560px;
  padding: ${p => p.theme.spacing.large};
  margin: auto;

  .booklist__search{
    margin-bottom: ${p => p.theme.spacing.large};
  }

  .booklist__books{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    gap: ${props => props.theme.spacing.medium};
  }
`