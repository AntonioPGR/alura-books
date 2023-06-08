import { styled } from "styled-components";
import { BookCardCategory} from "./bookCard";

interface PropsBooksList{
  books: IBook[];
}
export const BooksList = ({books}:PropsBooksList) => {
  return (
    <StyledBooksList numberOfItems={books.length}>
      {books.map(book => <BookCardCategory key={book.id} book={book} />)}
    </StyledBooksList>
  )
}

const StyledBooksList = styled.section<{numberOfItems:number}>`
  max-width: 1560px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  gap: ${props => props.theme.spacing.medium};
  margin: auto;
  padding: ${p => p.theme.spacing.large};
`