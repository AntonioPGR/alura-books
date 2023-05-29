import { styled } from "styled-components"

interface PropsSectionTitle{
  children: children,
  size?: 'small' | 'large',
  bold?: boolean,
  dark_mode?: 'white' | 'yellow',
  text_align?: 'left' | 'center' | 'right',
}
export const SectionTitle = ({children, dark_mode, bold, size, text_align}:PropsSectionTitle) => {
  console.log(text_align)
  return(
    <StyledSectionTitle dark_mode={dark_mode} bold={bold? 1 : 0} size={size} text_align={text_align}>
      {children}
    </StyledSectionTitle>
  )
}


interface PropsStyled{
  children: children,
  dark_mode?: 'white' | 'yellow'
  bold?: 1 | 0,
  size?: 'small' | 'large',
  text_align?: 'left' | 'center' | 'right',
}
const StyledSectionTitle = styled.h2<PropsStyled>`
  color: ${props => {
    if(!props.dark_mode){
      return props.theme.colors.black
    } 
    return props.dark_mode === 'white'? props.theme.colors.white : props.theme.colors.yellow;
  }};
  font-size: ${props => props.size === 'small'? props.theme.typography.size.largex : props.theme.typography.size.titles };
  font-weight: ${props => props.bold? props.theme.weight.bold : props.theme.weight.regular};
  text-align: ${props => props.text_align? props.text_align : 'left'};
`