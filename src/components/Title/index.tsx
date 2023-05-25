import { styled } from "styled-components"

interface PropsSectionTitle{
  children: children,
  size?: 'small' | 'large',
  bold?: boolean,
  darkMode?: 'white' | 'yellow',
}
export const SectionTitle = ({children, darkMode, bold, size}:PropsSectionTitle) => {
  return(
    <StyledSectionTitle darkMode={darkMode} bold={bold? 1 : 0} size={size}>
      {children}
    </StyledSectionTitle>
  )
}


interface PropsStyled{
  children: children,
  darkMode?: 'white' | 'yellow'
  bold?: 1 | 0,
  size?: 'small' | 'large',
}
const StyledSectionTitle = styled.p<PropsStyled>`
  color: ${props => {
    if(!props.darkMode){
      return props.theme.colors.black
    } 
    return props.darkMode === 'white'? props.theme.colors.white : props.theme.colors.yellow;
  }};
  font-size: ${props => props.size === 'small'? props.theme.typography.size.largex : props.theme.typography.size.titles };
  font-weight: ${props => props.bold? props.theme.weight.bold : props.theme.weight.regular};
`