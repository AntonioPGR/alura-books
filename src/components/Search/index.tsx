import { AbCampoTexto } from "ds-alurabooks"
import styled from "styled-components"

export const Search = () => {
  return(
    <StyledSearch>
      <div className="search__titles">
        <h1 className="titles__maintitle"> Já sabe por onde começar? </h1>
        <p className="titles__subtitle"> Encontre em nossa estante o que precisa para seu desenvolvimento! </p>
      </div>
      <div className="search__input">
        <AbCampoTexto darkmode placeholderAlign="center" placeholder="Qual será sua próxima leitura?" type="text" onChange={() => console.log('opa')} value="" />
      </div>
    </StyledSearch>
  )
}

const StyledSearch = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.large};
  background-image: ${props => props.theme.colors.gradient};
  height: 330px;

  * > *, *{
    color: ${props => props.theme.colors.text_contrast};
  }

  .search__titles{
    text-align: center;

    .titles__maintitle{
      font-size: ${props => props.theme.typography.size.titles};
    }
  }

  .search__input{
    max-width: 586px;
    width: 100%;

    div{
      width: 100%;
    }
  }
`