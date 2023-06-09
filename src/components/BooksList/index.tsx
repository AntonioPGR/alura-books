import { styled } from "styled-components";
import { BookCardCategory} from "./bookCardCartegory";

interface PropsBooksList{
  books: IBook[];
}
export const BooksList = ({books}:PropsBooksList) => {
  return (
    <StyledBooksList number_of_items={books.length}>
      {books.map(book => <BookCardCategory key={book.id} book={book} />)}
    </StyledBooksList>
  )
}

const StyledBooksList = styled.section<{number_of_items:number}>`
  max-width: 1560px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  gap: ${props => props.theme.spacing.medium};
  margin: auto;
  padding: ${p => p.theme.spacing.large};
`