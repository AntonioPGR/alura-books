import { AbBotao, AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"
import ImagemLogin from 'images/Login-amico 1.png'
import { styled } from "styled-components"
import { OverScreen } from "components/overScreen"
import { logarUsuario } from "requests/usuario"
import { createCleanForm } from "utils/createCleanForm"
import { StatewhatOverflowIsOpen } from "states/whatsOverflowIsOpen"
import { useSetRecoilState } from "recoil"
import { SessionToken } from "utils/sessionToken"


interface PropsLoginForm{
  onClose: voidFunction,
  onLogin?: voidFunction
}
export const LoginForm = ({onClose, onLogin}:PropsLoginForm) => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const cleanForm = createCleanForm([setEmail, setSenha])

  const handleSubmit = (ev:React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    const loginusuario : IUserLogin = {
      email: email,
      senha: senha
    }
    const thenCallback = (acces_token:string) => {
      SessionToken.setToken(acces_token)
      cleanForm()
      onClose()
      if(onLogin){onLogin()}
      alert('Usuario logado com sucesso')
    }
    const catchCallback= (status:number, message:string) => {
      alert(`${status}: ${message}`)
    }

    logarUsuario(loginusuario, thenCallback, catchCallback)

  }
  
  const setWhatOverflow = useSetRecoilState(StatewhatOverflowIsOpen)
  
  return (
    <OverScreen onClose={onClose} title="Login">
      <StyledLoginForm>
        <section className="login__image">
          <img src={ImagemLogin} alt="Pessoa realizando login através de um monitor com uma chave" />
        </section>
        <section className="login__content">
          <form onSubmit={(ev) => handleSubmit(ev)} className="loginForm__form">
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