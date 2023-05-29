import { SectionTitle } from "components/Title"
import { useState } from "react"
import { styled } from "styled-components"
import { BooksCarousel } from "./booksCarousel"
import { BookCard } from "./bookCard"


interface PropsBookstand {
  books: IBook[],
  title: string,
}
export const Bookstand = ({books, title}:PropsBookstand) => {
  const [currentBook, ] = useState(books[0])

  return(
    <StyledBookstand>
      <div className="title">
        <SectionTitle text_align="center" bold dark_mode="yellow"> {title} </SectionTitle>
      </div>
      <div className="content">
        <BooksCarousel books={books} />
        <BookCard book={currentBook} />
      </div>
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
`