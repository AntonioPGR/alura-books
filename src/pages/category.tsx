/* eslint-disable react-hooks/exhaustive-deps */
// APOLLO CLIENT
// COMPONENTS
import { CartTitle } from "components/cartTitle"
import { Loader } from "components/loader"
import { BooksList } from "components/BooksList"
import { ErrorMessage } from "components/ErrorMessage"
// REACT QUERY
import { useQuery } from '@tanstack/react-query'
// REQUESTERS
import { CategoriesRequester } from "requesters/categories"
// ROUTER
import { useParams } from "react-router-dom"
// STYLES
import { styled } from "styled-components"


export const CategoryPage = () => {

  const {category_slug} = useParams()
  const {data:category, isLoading:isCategoryLoading } = useQuery(['cagoryBySlug', category_slug], () => CategoriesRequester.findCategoryBySlug(category_slug || ""))  
  return(
    <>
      { isCategoryLoading &&
        <StyledCategoryWithAlert> 
          <Loader />
        </StyledCategoryWithAlert> 
      }

      {!isCategoryLoading && !category &&
        <StyledCategoryWithAlert>
          <ErrorMessage> Não foi possivel encontrar a categoria desejada! verifique se o nome está correto e tente novamente </ErrorMessage>
        </StyledCategoryWithAlert> 
      }

      {
        category &&
        <StyledCategory>
          <CartTitle> {category.nome} </CartTitle>
          <BooksList category_id={category.id} />
        </StyledCategory>
      }
    </>
  )
}

const StyledCategory = styled.main`
  min-height: clamp(200px, 70vh, 70vh);
`

const StyledCategoryWithAlert = styled(StyledCategory)`
  display: flex;
  align-items: center;
  justify-content: center;
`