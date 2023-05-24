import { Paragraph } from "components/Paragraph"
import { SectionTitle } from "components/Title"
import { AbCampoTexto } from "ds-alurabooks"
import { styled } from "styled-components"


export const NewsLetter = () => {

  return(
    <StyledNewsLetter>
      <div className="newsletter__titles">
        <SectionTitle bold size="small"> Fique por dentro das novidades! </SectionTitle>
        <Paragraph>
          Atualizações de e-books, novos livros, promoções e outros.
        </Paragraph>
      </div>
      <div>
        <AbCampoTexto placeholder="Cadastre seu e-mail"  value="" onChange={() => console.log()} />
      </div>
    </StyledNewsLetter>
  )
}

const StyledNewsLetter = styled.section`
  max-width: 774px;
  width: 100%;
  height: 200px;
  display: flex;
  gap: ${props => props.theme.spacing.large};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .newsletter__titles{
    max-width: 400px;
  }
`