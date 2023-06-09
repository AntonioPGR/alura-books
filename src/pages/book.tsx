import { useQuery } from "@tanstack/react-query"
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

  const {data:book, isLoading: isBookLoading} = useQuery(['GetBookBySlug', book_slug], () => BooksRequester.getBookBySlug(book_slug || ''))
  const {data:autor, isLoading:isAutorLoading} = useQuery(['GetAutorById', book], () => AutorRequester.getAutorById(book?.autor || -1))

  if(!book_slug || (!isBookLoading && !book) || (!isAutorLoading && !autor)){
    return <ErrorMessage> Não foi possivel encontrar o livro desejado! verifique o nome e tente novamente </ErrorMessage>
  }

  if(isBookLoading || isAutorLoading){
    return <Loader />
  }

  return(
    <StyledBookPage>
      <CartTitle> Detalhes do livro </CartTitle>
      <div className="content">
        <BookShowDown book={book} autor={autor!} />
        <InfoParagraph title="Sobre o Autor">
          {autor?.sobre}
        </InfoParagraph>
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