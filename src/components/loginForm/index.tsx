// COMPONENTS
import { AbBotao, AbCampoTexto } from "ds-alurabooks"
import { OverScreen } from "components/overScreen"
// REACT
import { useState } from "react"
import ImagemLogin from 'images/Login-amico.png'
import { StatewhatOverflowIsOpen } from "states/whatsOverflowIsOpen"
import { useSetRecoilState } from "recoil"
// STYLES
import { styled } from "styled-components"
// UTILS
import { createCleanForm } from "utils/createCleanForm"
import { StateIsLoggedIn } from "states/isLoggendIn"
import { SessionToken } from "utils/sessionToken"
import { UserRequester } from "requesters/usuario"
import { AxiosError } from "axios"


export const LoginForm = () => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const setWhatOverflow = useSetRecoilState(StatewhatOverflowIsOpen)
  const setIsLoggedIn = useSetRecoilState(StateIsLoggedIn)
  
  const cleanForm = createCleanForm([setEmail, setSenha])

  const handleSubmit = (ev:React.FormEvent) => {
    ev.preventDefault()
    const loginusuario : IUserLogin = {
      email: email,
      senha: senha
    }

    UserRequester.loginUsuario(loginusuario)
      .then(res => {
        setWhatOverflow('')
        SessionToken.setToken(res.data.access_token)
        setIsLoggedIn(true)
        cleanForm()
      })
      .catch((e:AxiosError) => {
        alert(`${e.status}: ${e.message}`)
      })
  }
  
  return (
    <OverScreen title="Login">
      <StyledLoginForm>
        <section className="login__image">
          <img src={ImagemLogin} alt="Pessoa realizando login através de um monitor com uma chave" />
        </section>
        <section className="login__content">
          <form onSubmit={handleSubmit} className="loginForm__form">
            <AbCampoTexto value={email} onChange={setEmail} label="Email" placeholder="seuemail@maneiro.com" />
            <AbCampoTexto value={senha} onChange={setSenha} type="password" placeholder="******" label="Senha" />
            <div className="formActions">
              <p className="formAcions__forgetPassword">Esqueci minha senha</p>
              <AbBotao texto="Entrar" />
            </div>
          </form>
          <footer className="login__footer">
            <h3 className="login__footer__title"> Ainda não tem uma conta? </h3>
            <AbBotao texto="Criar Conta" onClick={() => setWhatOverflow('signUp')} />
          </footer>
        </section>
      </StyledLoginForm>
    </OverScreen>
  )
}

const StyledLoginForm = styled.section`
  display: grid;
  grid-template-columns: 317px 600px;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.large};

  .login__content{
    display: flex;
    flex-flow: column nowrap;
    gap: ${props => props.theme.spacing.large};
  }

  .loginForm__form{
    display: flex;
    flex-flow: column nowrap;
    gap: ${props => props.theme.spacing.small};
  }
  
  .formActions{
    display: flex;
    flex-flow: row wrap;
    gap: ${props => props.theme.spacing.small};
    align-items: center;
    justify-content: space-between;
  }

  .login__footer{
    padding: ${props => props.theme.spacing.large} 0;
    border-top: 2px solid ${props => props.theme.colors.darkBlue};

    display: flex;
    flex-flow: row wrap;
    gap: ${props => props.theme.spacing.large};
    align-items: center;
    justify-content: space-between;
  }
  
  @media (max-width: ${p => p.theme.breakpoints.laptop}){
    grid-template-columns: 1fr;
    .login__image{
      display: none
    }
  }
  
  @media (max-width: ${p => p.theme.breakpoints.large_cellphone}){
    .login__footer{
      justify-content: center;
    }
    .formActions{
      justify-content: center;
    }
  }
`