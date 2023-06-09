import { SectionTitle } from "components/Title"
import { useState } from "react"
import { styled } from "styled-components"
import { BooksCarousel } from "./booksCarousel"
import { BookCard } from "./bookCard"
import { ErrorMessage } from "components/ErrorMessage"
import { useQuery } from "@tanstack/react-query"
import { AutorRequester } from "requesters/autor"


interface PropsBookstand {
  books: IBook[],
  title: string,
}
export const Bookstand = ({books, title}:PropsBookstand) => {

  const [current_book, setCurrentBook] = useState(books[0])
  const {data:current_book_autor} = useQuery(['getAutorByBook', current_book], () => AutorRequester.getAutorById(current_book.autor))

  return(
    <StyledBookstand>
      <div className="title">
        <SectionTitle text_align="center" bold title_color="yellow"> {title} </SectionTitle>
      </div>
      { books.length === 0 && 
        <ErrorMessage> Não foram identificados livros para esta estante! tente novamente mais tarde </ErrorMessage>
      }
      {
        books.length !== 0 &&
        <div className="content">
          <BooksCarousel onSelectBook={setCurrentBook} books={books} />
          <BookCard book={current_book} autor_name={current_book_autor?.nome ?? 'loading...'} />
        </div>
      }
    </StyledBookstand>
  )
}

const StyledBookstand = styled.section`
  background-color: ${props => props.theme.colors.lightGray};
  padding-bottom: ${props => props.theme.spacing.medium};
  
  .title{
    padding: ${props => props.theme.spacing.medium};
    background-color: ${props => props.theme.colors.white};
    text-transform: uppercase;
  }

  .content{
    max-width: 1300px;
    padding: ${props => props.theme.spacing.large};
    margin: auto;
    display: grid;
    grid-template-columns: auto 550px;
    gap: ${props => props.theme.spacing.large};
  }
  
  @media (max-width: 1224px){
    .content{
      grid-template-columns: 100%;
      grid-template-rows: auto auto;
    }
  }
`