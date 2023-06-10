import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { SectionTitle } from "components/Title"
import { AbBotao } from "ds-alurabooks"
import { Link } from "react-router-dom"
import { CategoriesRequester } from "requesters/categories"
import { styled } from "styled-components"


export const MostSearchedCategories : React.FC = () => {

  const {data:categories, isLoading, error} = useQuery<ICategory[], AxiosError>(['getCategories'], () => CategoriesRequester.getCategories())

  if(!categories || isLoading || error){
    return <></>
  }

  return(
    <StyledMostSearchedCategories>
      <SectionTitle size="small" title_color='white' > CATEGORIAS MAIS BUSCADAS </SectionTitle>
      <ul className="mostSearchedCategories__categories">
        {
          categories.map(category => (
            <Link key={category.id} to={`/categorias/${category.slug}`}>
              <AbBotao texto={category.nome} />
            </Link>
          ))
        }
      </ul>
    </StyledMostSearchedCategories>
  )
}


const StyledMostSearchedCategories = styled.section`
  min-height: 418px;
  background-image: ${props => props.theme.colors.gradient};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.large};
  padding: ${props => props.theme.spacing.large};

  .mostSearchedCategories__categories{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: ${props => props.theme.spacing.medium};
    max-width: 685px;
  }
  
  @media (max-width: ${p => p.theme.breakpoints.tablet}){
    .mostSearchedCategories__categories{
      grid-template-columns: 1fr 1fr;
      display: grid;
    
      button{
        height: 100%;
      }
    }
  }

`