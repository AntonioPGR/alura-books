import { styled } from "styled-components"
import { DefaultTheme } from "styled-components/dist/types"

type title_color = 'gray' | 'blue' | 'white' | 'yellow'
interface PropsSectionTitle{
  children: children,
  size?: 'small' | 'large',
  bold?: boolean,
  title_color?: title_color,
  text_align?: 'left' | 'center' | 'right',
  text_style?: 'uppercase' | '' | 'lowercase',
}
export const SectionTitle = ({children, title_color, bold, size, text_align}:PropsSectionTitle) => {
  return(
    <StyledSectionTitle title_color={title_color || 'gray'} bold={bold? 1 : 0} size={size} text_align={text_align}>
      {children}
    </StyledSectionTitle>
  )
}


const getTitleColor = (color:title_color, theme:DefaultTheme) => {
  switch(color){
    case 'blue':
      return theme.colors.darkBlue
    case 'gray':
      return theme.colors.gray
    case 'white':
      return theme.colors.white
    case 'yellow':
      return theme.colors.yellow
  }
}
interface PropsStyled{
  title_color: title_color
  bold?: 1 | 0,
  size?: 'small' | 'large',
  text_align?: 'left' | 'center' | 'right',
}
const StyledSectionTitle = styled.h2<PropsStyled>`
  color: ${props => getTitleColor(props.title_color, props.theme)};
  font-size: ${props => props.size === 'small'? props.theme.typography.size.largex : props.theme.typography.size.titles };
  font-weight: ${props => props.bold? props.theme.weight.bold : props.theme.weight.regular};
  text-align: ${props => props.text_align? props.text_align : 'left'};
`