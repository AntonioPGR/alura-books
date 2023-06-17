import { styled } from "styled-components"

interface PropsTagList{
  tags: ITag[]
}
export const TagsList = ({tags}:PropsTagList) => {
  return(
    <StyledTag>
      {tags.map(value => {
        return <li key={value.id}> {value.nome} </li>
      })}
    </StyledTag>
  )
}

const StyledTag = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: ${props => props.theme.spacing.medium};

  li{ 
    padding: ${props => props.theme.spacing.medium};
    background-image: ${props => props.theme.colors.gradient};
    color: ${props => props.theme.colors.white};
  }

`