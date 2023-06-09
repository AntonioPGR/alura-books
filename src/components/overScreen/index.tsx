import { SectionTitle } from "components/Title"
import { styled } from "styled-components"
import Cross from 'images/cross.svg'
import { useSetRecoilState } from "recoil"
import { StatewhatOverflowIsOpen } from "states/whatsOverflowIsOpen"


interface PropsOverScreen{
  children: children,
  title: string,
  onClose?: () => void
}
export const OverScreen = ({children, title, onClose}:PropsOverScreen) => {

  const setWhatOverscreen = useSetRecoilState(StatewhatOverflowIsOpen);

  const onCloseOverscreen = () => {
    if(onClose){
      onClose()
    }
    setWhatOverscreen('')
  }

  return(
    <StyledOverScreen>
      <section className="overScreen__board">
        <header> 
          <SectionTitle bold title_color="yellow" > {title} </SectionTitle>
          <div className="closeIconContainer" onClick={onCloseOverscreen}>
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

  .overScreen__board{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    gap: ${p => p.theme.spacing.medium};
    
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
  
  @media (max-width: ${p => p.theme.breakpoints.laptop}){
    .overScreen__board{
      min-height: 100vh;
      width: 100vw;
      border-radius: 0;
    }
  }
`