import Image404 from 'images/404Image.svg'
import { styled } from 'styled-components'

export const NotFoundPage = () => {
  return(
    <StyledNotFound>
      <img src={Image404} alt="Big letters written 404 with a cute cat inside" />
    </StyledNotFound>
  )
}

const StyledNotFound = styled.section`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    max-height: 100%;
  }
`