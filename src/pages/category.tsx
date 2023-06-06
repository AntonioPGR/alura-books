/* eslint-disable react-hooks/exhaustive-deps */
import { CartTitle } from "components/cartTitle"
import { Loader } from "components/loader"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CategoriesRequester } from "requests/categories"
import { styled } from "styled-components"


export const Category = () => {

  const {category_slug} = useParams()
  const [categoryInfo, setCategoryInfo] = useState<ICategory | undefined | null>(undefined)

  useEffect(() => {
    if(!category_slug){
      setCategoryInfo(null)
      return
    }
    CategoriesRequester.findCategoryBySlug(category_slug)
      .then(res => {
        const categoria = res.data[0]
        if (!categoria) {
          setCategoryInfo(null)
          return
        }
        setCategoryInfo(res.data[0])
      })
      .catch(e => {
        setCategoryInfo(null)
        alert(`${e.status}: ${e.message}`)
      })
  }, [category_slug])

  
  if(categoryInfo === null){
    return <StyledMessageContainer><p className="alert">Não foi possivel carregar informações sobre essa categoria! verifique se ela está correta</p></StyledMessageContainer>
  }
  if(categoryInfo === undefined){
    return <StyledMessageContainer>
      <Loader />
    </StyledMessageContainer>
  }
  return(
    <>
      <CartTitle title={categoryInfo.nome} />
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