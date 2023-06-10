import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { BookShowDown } from "components/BookShowDown"
import { ErrorMessage } from "components/ErrorMessage"
import { InfoParagraph } from "components/InfoParagraph"
import { CartTitle } from "components/cartTitle"
import { Loader } from "components/loader"
import { useParams } from "react-router-dom"
import { AutorRequester } from "requesters/autor"
import { BooksRequester } from "requesters/books"
import { styled } from "styled-components"


export const BookPage = () => {
  const {book_slug} = useParams()

  const {data:book, isLoading: isBookLoading, error:bookError} = useQuery<IBook, AxiosError>(['GetBookBySlug', book_slug], () => BooksRequester.getBookBySlug(book_slug || ''))
  const {data:autor, isLoading:isAutorLoading} = useQuery<IAutor, AxiosError>(['GetAutorById', book], () => AutorRequester.getAutorById(book?.autor || -1))

  if(isBookLoading || isAutorLoading){
    return <Loader />
  }

  if(bookError || !book){
    return <ErrorMessage> Algo deu errado ao tentar carregar o livro! mensagem de erro: {bookError.status}: {bookError.message} </ErrorMessage>
  }

  return(
    <StyledBookPage>
      <CartTitle> Detalhes do livro </CartTitle>
      <div className="content">
        <BookShowDown book={book} autor_name={autor?.nome ?? 'não foi possivel encontrar o autor!'} />
        {
          autor && 
          <InfoParagraph title="Sobre o Autor">
            {autor.sobre}
          </InfoParagraph>
        }
        <InfoParagraph title="Sobre o livro">
          {book.sobre}
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