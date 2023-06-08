/* eslint-disable react-hooks/exhaustive-deps */
import { CartTitle } from "components/cartTitle"
import { Loader } from "components/loader"
import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import { useQuery } from '@tanstack/react-query'
import { CategoriesRequester } from "requesters/categories"
import { BooksRequester } from "requesters/books"
import { BooksList } from "components/BooksList"
import { ErrorMessage } from "components/ErrorMessage"


export const Category = () => {

  const {category_slug} = useParams()
  const {data:category, isLoading:isCategoryLoading, isFetching:isCategoryFetching} = useQuery(['cagoryBySlug', category_slug], () => CategoriesRequester.findCategoryBySlug(category_slug || ""))
  const {data:books_list, isLoading:isBooksListLoading} = useQuery(['getBooksByCategory', category], () => BooksRequester.getBooksByCategory(category!.id))
  
  return(
    <>
      {(isCategoryLoading && isBooksListLoading) || isCategoryFetching?
        <StyledCategoryWithAlert> 
          <Loader />
        </StyledCategoryWithAlert> 
        : ""
      }

      {!isCategoryLoading && !category &&
        <StyledCategoryWithAlert>
          <ErrorMessage> Não foi possivel encontrar a categoria desejada! verifique se o nome está correto e tente novamente </ErrorMessage>
        </StyledCategoryWithAlert> 
      }

      {
        category &&
        <StyledCategory>
          <CartTitle title={category.nome} />
          { isBooksListLoading && <Loader />}
          {!isBooksListLoading && !books_list &&
            <StyledCategoryWithAlert>
              <ErrorMessage> Não foi possivel encontrar os livros desejados! verifique se o nome está correto e tente novamente </ErrorMessage>
            </StyledCategoryWithAlert> 
          }
          { books_list && books_list.length === 0 &&  
            <StyledCategoryWithAlert>
              <ErrorMessage> Ainda não temos livros disponiveis nesta categoria! mas fique a vontade para explorar outras! </ErrorMessage>
            </StyledCategoryWithAlert> 
          }
          { books_list && books_list.length !== 0 && <BooksList books={books_list} /> }
        </StyledCategory>
      }
    </>
  )
}

const StyledCategory = styled.main`
  min-height: clamp(200px, 60vh, 400px);
`

const StyledCategoryWithAlert = styled(StyledCategory)`
  display: flex;
  align-items: center;
  justify-content: center;
`