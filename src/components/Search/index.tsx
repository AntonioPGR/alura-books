import { Paragraph } from "components/Paragraph"
import { AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"
import styled from "styled-components"

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  
  return(
    <StyledSearch>
      <div className="search__titles">
        <h1 className="titles__maintitle"> Já sabe por onde começar? </h1>
        <Paragraph> Encontre em nossa estante o que precisa para seu desenvolvimento! </Paragraph>
      </div>
      <div className="search__input">
        <AbCampoTexto darkmode  placeholderAlign="center" placeholder="Qual será sua próxima leitura?" type="text" onChange={setSearchValue} value={searchValue} />
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
    color: ${props => props.theme.colors.white};
  }

  .search__titles{
    text-align: center;

    .titles__maintitle{
      font-size: ${props => props.theme.typography.size.titles};
      font-weight: 600;
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