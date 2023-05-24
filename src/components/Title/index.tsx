import { styled } from "styled-components"

interface PropsSectionTitle{
  children: children,
  size?: 'small' | 'large',
  bold?: boolean
  darkMode?: boolean,
}
export const SectionTitle = ({children, darkMode, bold, size}:PropsSectionTitle) => {
  return(
    <StyledSectionTitle darkMode={darkMode} bold={bold} size={size}>
      {children}
    </StyledSectionTitle>
  )
}


interface PropsStyled{
  children: children,
  darkMode?: boolean,
  bold?: boolean,
  size?: 'small' | 'large',
}
const StyledSectionTitle = styled.p<PropsStyled>`
  color: ${props => props.darkMode? props.theme.colors.text_emphasys : props.theme.colors.background_emphasys_contrast};
  font-size: ${props => props.size === 'small'? props.theme.typography.size.largex : props.theme.typography.size.titles };
  font-weight: ${props => props.bold? props.theme.weight.bold : props.theme.weight.regular};
`