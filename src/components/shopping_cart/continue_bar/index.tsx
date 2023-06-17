import { Link } from "react-router-dom"
import { styled } from "styled-components"


interface PropsContinueBar{
  children: children,
  link: string
}
export const ContinueBar = ({children, link}:PropsContinueBar) => {
  return(
    <StyledContinueBar>
      <Link to={link}>{children}</Link>
    </StyledContinueBar>
  )
}

const StyledContinueBar = styled.p`
  padding:  ${p => p.theme.spacing.large};
  border-bottom: 1px solid ${p => p.theme.colors.black};
  text-underline-position: under;
  cursor: pointer;
  font-size: ${p => p.theme.typography.size.default};

  &:hover{
    text-decoration: underline;
  }
`