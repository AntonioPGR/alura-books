import { SectionTitle } from "components/Title"
import { AbBotao } from "ds-alurabooks"
import { styled } from "styled-components"


export const MostSearchedCategories : React.FC = () => {
  return(
    <StyledMostSearchedCategories>
      <SectionTitle size="small" dark_mode='white' > CATEGORIAS MAIS BUSCADAS </SectionTitle>
      <ul className="mostSearchedCategories__categories">
        <AbBotao texto="Android" />
        <AbBotao texto="OO" />
        <AbBotao texto="Marketing Digital" />
        <AbBotao texto="Agile" />
        <AbBotao texto="Startups" />
        <AbBotao texto="HTML & CSS" />
        <AbBotao texto="Java" />
        <AbBotao texto="Python" />
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