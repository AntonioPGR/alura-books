import { styled } from "styled-components"


interface PropsBook {
  book: IBook
}
export const Book = ({book}:PropsBook) => {
  return(
    <StyledBook>
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