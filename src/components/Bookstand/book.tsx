import { styled } from "styled-components"


interface PropsBook {
  book: IBook,
  onClick: (book:IBook) => void
}
export const Book = ({book, onClick}:PropsBook) => {
  return(
    <StyledBook onClick={() => onClick(book)}>
      <img className='book__cover' src={book.cover}  alt={`Capa do livro ${book.title}`} />
    </StyledBook>
  )
}

const StyledBook = styled.article`
  max-width: 300px;
  height: 100%;
  margin: auto;

  .book__cover{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  &:hover{
    transform: scale(1.05, 1.05);
    cursor: pointer;
  }
`