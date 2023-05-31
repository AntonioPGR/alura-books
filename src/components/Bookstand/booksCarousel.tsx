import { styled } from "styled-components"
import { Book } from "./book"


interface PropsBooksCarousel {
  books: IBook[],
  onSelectBook: (book:IBook) => void
}
export const BooksCarousel = ({books, onSelectBook}:PropsBooksCarousel) => {
  return(
    <StyledBookCarousel>
      {
        books.map((book) => <Book onClick={onSelectBook} key={book.id} book={book} />)
      }
    </StyledBookCarousel>
  )
}

const StyledBookCarousel = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${p => p.theme.spacing.large};
  align-items: center;
  justify-content: space-between;
`