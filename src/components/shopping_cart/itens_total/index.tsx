import { AbBotao } from "ds-alurabooks"
import { styled } from "styled-components"
import { PriceFormatterToBRL } from "utils/priceFormatter"


interface PropsItensTotal{
  total: number
}
export const ItensTotal = ({total}:PropsItensTotal) => {
  
  return(
    <StyledItensTotal>
      <span className="total__label">Total da compra:</span>
      <span className="total__price">{PriceFormatterToBRL.format(total)}</span>
      <AbBotao texto="Finalizar compra" />
    </StyledItensTotal>
  )
}

const StyledItensTotal = styled.section`
  width: 100%;
  padding:  ${p => p.theme.spacing.medium};
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  align-items: center;
  gap: ${p => p.theme.spacing.medium};

  .total__label{
    color: ${p => p.theme.colors.yellow};
    font-weight:  ${p => p.theme.weight.bold};
    font-size:  ${p => p.theme.typography.size.large};
  }

  .total__price{
    color: ${p => p.theme.colors.darkBlue};
    font-weight:  ${p => p.theme.weight.bold};
    font-size:  ${p => p.theme.typography.size.largex};
  }
`