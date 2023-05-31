import { SectionTitle } from "components/Title"
import { styled } from "styled-components"
import Cross from 'images/cross.svg'


interface PropsOverScreen{
  children: children,
  title: string,
  onClose: () => void
}
export const OverScreen = ({children, title, onClose}:PropsOverScreen) => {

  return(
    <StyledOverScreen>
      <section>
        <header> 
          <SectionTitle bold dark_mode="yellow" > {title} </SectionTitle>
          <div className="closeIconContainer" onClick={onClose}>
            <img src={Cross} alt="Fechar menu flutuante"/>
          </div>
        </header>
        { children }
      </section>
    </StyledOverScreen>
  )

}

const StyledOverScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #000000aa;

  display: flex;
  align-items: center;
  justify-content: center;

  section{
    background-color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.spacing.large};
    border-radius: ${props => props.theme.spacing.largeBorderRadius};

    header{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: ${props => props.theme.spacing.large};
    }

    .closeIconContainer{
      cursor: pointer;
    }

  }
`