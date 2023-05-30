import styled from "styled-components"
import { Logo } from "./logo"
import { PagesLinks } from "./pagesLinks"
import { PersonalLinks } from "./personalLinks"
import { SingUpForm } from "components/singUpForm"


export const Header = () => {
  return(
    <StyledHeader>
      <Logo />
      <PagesLinks />
      <PersonalLinks />
      <OverScreen title="opa" onClose={() => console.log('f')}>
        <SingUpForm />
      </OverScreen>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  max-width: 1728px;
  margin: auto;
  gap: 24px;
  display: grid;
  grid-template-columns: 205px auto auto;
  grid-template-areas: "logo pages_links personal_links";
  align-items: center;
  padding: 0 ${props => props.theme.spacing.large};
  height: 80px;

  @media (max-width: ${props => props.theme.breakpoints.laptop}){
    grid-template-areas: "logo personal_links pages_links";
    grid-template-columns: 40px auto 80px ;
  }

  @media (max-width: 360px){
    grid-template-areas: "personal_links pages_links";
    grid-template-columns: auto 80px;
  }
`