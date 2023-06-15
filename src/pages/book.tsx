// APOLLO CLIENTS
// COMPONENTS
import { BookShowDown } from "components/BookShowDown"
import { ErrorMessage } from "components/ErrorMessage"
import { InfoParagraph } from "components/InfoParagraph"
import { CartTitle } from "components/cartTitle"
import { Loader } from "components/loader"
// ROUTER
import { useParams } from "react-router-dom"
// REQUESTERS
import { BooksRequester } from "graphQl/books/booksRequester"
// STYLE
import { styled } from "styled-components"
import { useReactiveVar } from "@apollo/client"
import { var_book } from "graphQl/books/state"


export const BookPage = () => {
  const {book_slug} = useParams()

  const {loading: isBookLoading, error:bookError} = BooksRequester.getBookBySlug(book_slug || '')
  const livro = useReactiveVar(var_book)

  if(isBookLoading){
    return <Loader />
  }
  if(bookError || !livro){
    return <ErrorMessage> Algo deu errado ao tentar carregar o livro! mensagem de erro: {bookError?.message} </ErrorMessage>
  }
  return(
    <StyledBookPage>
      <CartTitle> Detalhes do livro </CartTitle>
      <div className="content">
        <BookShowDown book={livro} />
        { 
          <InfoParagraph title="Sobre o Autor">
            {livro.autor.sobre}
          </InfoParagraph>
        }
        <InfoParagraph title="Sobre o livro">
          {livro.sobre}
        </InfoParagraph>
      </div>
    </StyledBookPage>
  )
}

const StyledBookPage = styled.main`
  .content{
    max-width: 1086px;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    gap: ${p => p.theme.spacing.medium};
    padding: ${p => p.theme.spacing.large};
  }
`