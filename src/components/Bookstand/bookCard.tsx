import { SectionTitle } from "components/Title"
import { AbBotao } from "ds-alurabooks"
import { styled } from "styled-components"
import Sacola from 'images/sacola.svg'
import Favoritos from 'images/favorito.svg'


interface PropsBookCard {
  book: IBook
}
export const BookCard = ({book}:PropsBookCard) => {
  const priceFormatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

  return(
    <StyledBookCard>
      <div className="book__header">
        <div className="book__about">
          <SectionTitle dark_mode="yellow" bold> Sobre o livro: </SectionTitle>
          <div className="book__actions">
            <img src={Sacola} alt="icone sacola" />
            <img src={Favoritos} alt="icone de favoritos" />
          </div>
        </div>
        <h3 className="book__title"> {book.title} </h3>
      </div>
      <div className="book__info">
        <p className="book__description"> {book.description} </p>
        <p className="book__author"> Por: {book.author} </p>
      </div>
      <div className="book__priceContainer">
        <div className="book__price">
          <span>A partir de</span>
          <p>{priceFormatter.format(book.price)}</p>
        </div>
        <div className="book__button">
          <AbBotao texto="Comprar" />
        </div>
      </div>
    </StyledBookCard>
  )
}


const StyledBookCard = styled.article`
  min-height: 396px;
  border-radius: ${props => props.theme.spacing.largeBorderRadius};
  box-shadow: 1px 1px 10px ${props => props.theme.colors.black};
  padding: 48px;
  display: grid;

  .book__about{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    .book__actions{
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      gap: ${props => props.theme.spacing.large};
    }
  }

  .book__title{
    color: ${props => props.theme.colors.darkBlue};
    font-size: ${props => props.theme.typography.size.large};
    font-weight: ${props => props.theme.weight.bold};
    
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 55px;
    overflow: hidden;
  }

  .book__info{
    font-size: ${props => props.theme.typography.size.small};
    display: grid;
    grid-template-rows: 1fr auto;
    max-height: 100%;
    
    .book__description{ 
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      -webkit-box-orient: vertical;
      max-height: 80px;
    }
  }

  .book__priceContainer{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: end;
    gap: ${p => p.theme.spacing.medium};

    .book__price{
      span{
        font-size: ${props => props.theme.typography.size.small};
        color: ${props => props.theme.colors.gray};
      }
      p{
        font-size: ${props => props.theme.typography.size.headings};
        color: ${props => props.theme.colors.darkBlue};
      }
    }

    .book__button{
      max-width: 169px;
      max-height: 86px;
    }
  }
  
  @media (max-width: ${p => p.theme.breakpoints.large_cellphone}){
    padding: ${props => props.theme.spacing.medium};
    min-height: 334px;
    
    .book__priceContainer{
      align-items: flex-start;
      flex-direction: column;
      gap: 2px;
    }
    
    .book__header{
      display: flex;
      flex-flow: row-reverse nowrap;
      justify-content: space-between;
      gap: ${p => p.theme.spacing.medium};
      .book__about{
        h2{
          display:none;
        }
      }
    }
  }
`