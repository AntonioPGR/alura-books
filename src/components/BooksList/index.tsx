import { styled } from "styled-components";
import { BookCardCategory} from "./bookCardCartegory";
import { Loader } from "components/loader";
import { ErrorMessage } from "components/ErrorMessage";
import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react";


const OBTER_LIVROS = gql`
  query getBook{
    livros{
      id,
      titulo,
      slug,
      imagemCapa,
      opcoesCompra {
        id,
        preco
      }
    }
  }
`

interface PropsBooksList{
  category_id: number;
}
export const BooksList = ({category_id}:PropsBooksList) => {

  const {data:books, loading:isBooksLoading} = useQuery<{livros:IBook[]}>(OBTER_LIVROS) 

  if(isBooksLoading){
    return <Loader />
  }
  if(!books){
    return <ErrorMessage> Não foi possivel encontrar os livros desejados! verifique se o nome está correto e tente novamente </ErrorMessage>
  }
  if(books.livros.length === 0){
    return <ErrorMessage> Ainda não temos livros disponiveis nesta categoria! mas fique a vontade para explorar outras! </ErrorMessage>
  }
  return (
    <>
      <StyledBooksList number_of_items={books.livros.length}>
        {books.livros.map(book => <BookCardCategory key={book.id} book={book} />)}
      </StyledBooksList>
    </>
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