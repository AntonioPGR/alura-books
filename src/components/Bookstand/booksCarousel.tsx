import { styled } from "styled-components"
import { Book } from "./book"


interface PropsBooksCarousel {
  books: IBook[]
}
export const BooksCarousel = ({books}:PropsBooksCarousel) => {
  return(
    <StyledBookCarousel>
      {
        books.map((book) => <Book key={book.id} book={book} />)
      }
    </StyledBookCarousel>
  )
}

const StyledBookCarousel = styled.section`
  max-width: 100%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: auto auto auto;
  gap: ${props => props.theme.spacing.medium};
`