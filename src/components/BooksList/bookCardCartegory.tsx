import { AbBotao } from "ds-alurabooks";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { PriceFormatterToBRL } from "utils/priceFormatter";


interface PropsBookCard{
  book: IBook;
}
export const BookCardCategory = ({book}:PropsBookCard) => {
  return (
    <StyledBookCardCategory>
      <img className="cardCategory__cover" src={book.imagemCapa} alt={"Capa do livro" + book.imagemCapa} />
      <h2 className="cardCategory__title">{book.titulo}</h2>
      <p className="cardCategory__info">A partir de:</p>
      <p className="cardCategory__price" >{PriceFormatterToBRL.format(book.opcoesCompra[0].preco)}</p>
      <Link className="cardCategory__button" to={`/livro/${book.slug}`}>
        <AbBotao texto="Comprar" />
      </Link>
    </StyledBookCardCategory>
  )
}

const StyledBookCardCategory = styled.article`
  width: 250px;
  display: flex;
  flex-flow: column nowrap;
  gap: 2px;
  align-items: center;
  text-align: center;

  .cardCategory__cover{
    width: 100%;
  }

  .cardCategory__title{
    font-size: ${p => p.theme.typography.size.large};
    color: ${p => p.theme.colors.darkBlue};
    font-weight: ${p => p.theme.weight.bold};
  }

  .cardCategory__info{
    font-size: ${p => p.theme.typography.size.default};
  }

  .cardCategory__price{
    font-size: ${p => p.theme.typography.size.largex};
    color: ${p => p.theme.colors.darkBlue};
    font-weight: ${p => p.theme.weight.bold};
  }

  .cardCategory__button{
    width: 100%;
    button{
      width: 100%;
    }
  }
`