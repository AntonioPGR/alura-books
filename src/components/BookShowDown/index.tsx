import { Paragraph } from "components/Paragraph";
import { SectionTitle } from "components/Title";
import { AbBotao, AbGrupoOpcoes, AbInputQuantidade } from "ds-alurabooks";
import { shopping_cart_context } from "providers/shopping_cart";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"
import { purchaseOptionToGrupoOpcoes } from "utils/purchaseOptionToOptionsGroup";


interface PropsBookShowDown{
  book: IBookComplete,
}
export const BookShowDown = ({book}:PropsBookShowDown) => {

  const [purchaseOptionID, setPurchaseOption] = useState<number>(book.opcoesCompra[0].id)
  const [amout, setAmout] = useState<number>(1)
  const {add_item_to_shopping_cart} = useContext(shopping_cart_context)
  const grupoDeOpcoes = purchaseOptionToGrupoOpcoes(book.opcoesCompra)
  const navigate = useNavigate()

  const setBookAmout = (number:number) => {
    if(number >= 1){
      setAmout(number)
    }
  }

  const handleAdicionarItem = () => {
    add_item_to_shopping_cart(book.id, purchaseOptionID, amout)
    navigate('/sacola')
  }


  return (
    <StyledBookShowDown>
      <div className="showdown__bookCover">
        <img src={book.imagemCapa} alt={`Capa do livro ${book.titulo}`} />
      </div>
      <article className="showdown__bookInfo">
        <section className="bookInfo__textInfoContainer">
          <SectionTitle title_color="blue" bold>{book.titulo}</SectionTitle>
          <Paragraph> {book.descricao} </Paragraph>
          <Paragraph> Por: {book.autor.nome} </Paragraph>
        </section>
        <section className="bookInfo__purchaseOptionsContainer">
          <h3 className="bookInfo__sectTitle">Selecione o formato de seu livro:</h3>
          <ul className="bookInfo__purchaseOptionsList">
            {
              <AbGrupoOpcoes valorPadrao={grupoDeOpcoes[0]} opcoes={grupoDeOpcoes} onChange={(opcao) => setPurchaseOption(opcao.id)} />
            }
          </ul>
          <Paragraph>*Você terá acesso às futuras atualizações do livro.</Paragraph>
        </section>
        <AbInputQuantidade onChange={setBookAmout} value={amout} />
        <div className="bookInfo__button">
          <AbBotao texto="Comprar" onClick={handleAdicionarItem} />
        </div>
      </article>
    </StyledBookShowDown>
  )
}

const StyledBookShowDown = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${p => p.theme.spacing.large};

  .showdown__bookCover{
    flex: 1;
    height: 100%;
    width: auto;
    img{
      height: 100%;
      width: auto;
    }
  }

  .showdown__bookInfo{
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    gap: ${p => p.theme.spacing.large};
  }

  .bookInfo__textInfoContainer{

  }
  
  .bookInfo__sectTitle{
    font-size: ${p => p.theme.typography.size.default};
    font-weight:  ${p => p.theme.weight.bold};
    color:  ${p => p.theme.colors.darkBlue};
  }

  .bookInfo__purchaseOptionsList{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .bookInfo__button{
    max-width: 152px;
  }
`