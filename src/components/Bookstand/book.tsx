import { styled } from "styled-components"


interface PropsBook {
  book: IBook,
  onClick: (book:IBook) => void
}
export const Book = ({book, onClick}:PropsBook) => {
  return(
    <StyledBook onClick={() => onClick(book)}>
      <img src={book.cover}  alt={`Capa do livro ${book.title}`} />
    </StyledBook>
  )
}

const StyledBook = styled.article`
  img{
    max-width: 100%;
  }

  &:hover{
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`