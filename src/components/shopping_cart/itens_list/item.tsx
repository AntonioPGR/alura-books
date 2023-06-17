import { AbInputQuantidade } from "ds-alurabooks"
import { styled } from "styled-components"
import { PriceFormatterToBRL } from "utils/priceFormatter"
import TrashCanIcon from "images/delete.svg"
import {useState} from 'react'


interface PropsOrder{
  item: IShoppingCartItem
}
export const Item = ({item}:PropsOrder) => {

  const [amout, setAmout] = useState(item.quantidade)

  const handleAmoutChange = (value:number) => {
    if(value >= 1){
      setAmout(value)
    }
  }

  return(
    <StyledOrder>
      <section className="item__bookinfo">
        <div className="bookinfo__image">
          <img alt={`capa do livro ${item.livro.titulo}`} src={item.livro.imagemCapa} />
        </div>
        <div className="bookinfo__text">
          <h3 className="text__title">{item.livro.titulo}</h3>
          <p>{item.livro.descricao}</p>
          <p>Por: {item.livro.autor.nome}</p>
        </div>
      </section>
      <div className="item__price">
        <p className="price__label">Preço</p>
        <p>{PriceFormatterToBRL.format(item.opcaoCompra.preco)}</p>
      </div>
      <div className="item__amount">
        <AbInputQuantidade value={amout} onChange={handleAmoutChange} />
      </div>
      <div className="item__trashcan">
        <img src={TrashCanIcon} alt={`icone de lixeira disponivel para clique e que possibilita a deleção do item do carrinho`} />
      </div>
    </StyledOrder>
  )
}

const StyledOrder = styled.article`
  height: 162px;
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 1fr;
  justify-content: space-between;
  align-items: center;

  .item__bookinfo{
    height: 162px;
    display: flex;
    flex-flow: row nowrap;
    gap: ${p => p.theme.spacing.medium};

    .bookinfo__image{
      width: min-content;
      height: 162px;
      
      img{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        width: auto;
        height: 100%;
        object-fit: cover;
      }
    }

    .bookinfo__text{
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      gap: ${p => p.theme.spacing.medium};
    }
  }

  .bookinfo__text{
    .text__title{
      color: ${p => p.theme.colors.darkBlue};
      font-weight:  ${p => p.theme.weight.bold};
      font-size:  ${p => p.theme.typography.size.largex};
    }
  }

  .item__price{
    .price__label{
      color: ${p => p.theme.colors.darkBlue};
      font-weight:  ${p => p.theme.weight.bold};
      font-size:  ${p => p.theme.typography.size.default};
    }
  }

  .item__price, .item__amount{
    height: 100%;
  }

  .item__trashcan{
    cursor: pointer;
  }

`