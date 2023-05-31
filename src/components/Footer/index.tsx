import { styled } from "styled-components"


export const Footer : React.FC = () => {
  return(
    <StyledFooter>
      <div className="footer__name">
        Grupo Alura
      </div>
      <div className="footer__schools">
        <article>
          <h3> educação </h3>
          <ul>
            <li> Caelum </li>
            <li> Casa do Código </li>
          </ul>
        </article>
        <article>
          <h3> educação online </h3>
          <ul>
            <li> Alura </li>
            <li> Alura Para Empresas </li>
            <li> Alura LATAM </li>
            <li> Alura Start </li>
            <li> MusicDot </li>
            <li> Alura Língua </li>
            <li> PM3 </li>
          </ul>
        </article>
        <article>
          <h3> comunidade </h3>
          <ul>
            <li> Hipsters ponto Tech </li>
            <li> Scuba Dev </li>
            <li> Layers ponto Tech </li>
            <li> Like a Boss </li>
            <li> Carreira sem Fronteira </li>
            <li> Hipsters ponto Jobs </li>
            <li> GUJ </li>
          </ul>
        </article>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${p => p.theme.spacing.large};
  border-top: 1px solid ${p => p.theme.colors.gray};

  .footer__name{
    font-size: ${p => p.theme.typography.size.largex};
  }

  .footer__schools{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    article{
      padding: ${p => p.theme.spacing.medium};
      border-left: 1px solid ${p => p.theme.colors.gray};

      h3{
        margin-bottom: ${p => p.theme.spacing.small};
        text-transform: uppercase;
        color: ${p => p.theme.colors.gray};
      }
    }
  }
  
  @media (max-width: ${p => p.theme.breakpoints.laptop}){
    .footer__schools{
      display: none;
    }
  }
`