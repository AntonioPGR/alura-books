/* eslint-disable react-hooks/exhaustive-deps */
import { CartTitle } from "components/cartTitle"
import { Loader } from "components/loader"
import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import { useQuery } from '@tanstack/react-query'
import { CategoriesRequester } from "requests/categories"


export const Category = () => {

  const {category_slug} = useParams()
  const {data:category, isLoading} = useQuery(['cagoryBySlug', category_slug], () => CategoriesRequester.findCategoryBySlug(category_slug || ""))
  
  if(isLoading){
    return <StyledMessageContainer>
      <Loader />
    </StyledMessageContainer>
  }
  if(!category){
    return <StyledMessageContainer><p className="alert">Não foi possivel carregar informações sobre essa categoria! verifique se ela está correta</p></StyledMessageContainer>
  }
  return(
    <>
      <CartTitle title={category.nome} />
    </>
  )
}


const StyledMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  height: 70vh;

  .alert{

  }
`
