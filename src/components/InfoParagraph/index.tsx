import { Paragraph } from "components/Paragraph"
import { SectionTitle } from "components/Title"
import { styled } from "styled-components"


interface PropsInfoParagraph{
  children:children,
  title: string
}
export const InfoParagraph = ({children, title}:PropsInfoParagraph) => {
  return (
    <StyledInfoParagraph>
      <div className="infoParagraph__titleContainer">
        <SectionTitle bold title_color="blue" size="small">{title}</SectionTitle>
      </div>
      <Paragraph> {children} </Paragraph>
    </StyledInfoParagraph>
  )
}

const StyledInfoParagraph = styled.section`
  .infoParagraph__titleContainer{
    padding: 0 ${p => p.theme.spacing.small};
    margin-bottom: ${p => p.theme.spacing.small};
    border-bottom: 3px solid ${p => p.theme.colors.yellow};
  }
`