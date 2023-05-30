import { AbBotao, AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"
import ImagemLogin from 'images/Login-amico 1.png'
import { styled } from "styled-components"
import { OverScreen } from "components/overScreen"


interface PropsSignUpForm{
  onClose: () => void
}
export const SignUpForm = ({onClose}:PropsSignUpForm) => {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [endereco, setEndereco] = useState("")
  const [complemento, setComplemento] = useState("")
  const [cep, setCep] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("")

  return (
    <OverScreen onClose={onClose} title="Cadastro">
      <StyledSignUpForm>
        <div>
          <img src={ImagemLogin} alt="Pessoa realizando login através de um monitor com uma chave" />
        </div>
        <form className="signUpForm__form">
          <AbCampoTexto value={nome} onChange={setNome}  label="Nome" placeholder="seu nome completo" />
          <AbCampoTexto value={email} onChange={setEmail} label="Email" placeholder="seuemail@maneiro.com" />
          <AbCampoTexto value={endereco} onChange={setEndereco} label="Endereço" placeholder="sua rua e número" />
          <div className="form__complementsInput">
            <AbCampoTexto value={complemento} onChange={setComplemento} label="Complemento" placeholder="Apto/casa, bloco, referência" />
            <AbCampoTexto value={cep} onChange={setCep} label="CEP" placeholder="Apto/casa, bloco, referência" />
          </div>
          <AbCampoTexto value={senha} onChange={setSenha} type="password" label="Senha" />
          <AbCampoTexto value={confirmacaoSenha} onChange={setConfirmacaoSenha} type="password" label="Confirmar senha"/>
          <AbBotao texto="cadastrar" />
        </form>
      </StyledSignUpForm>
    </OverScreen>
  )
}

const StyledSignUpForm = styled.section`
  display: grid;
  grid-template-columns: 317px 600px;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.medium};

  .signUpForm__form{
    display: flex;
    flex-flow: column nowrap;
    gap: ${props => props.theme.spacing.small};

    .form__complementsInput{
      display: grid;
      gap: ${props => props.theme.spacing.small};
      grid-template-columns: 4fr 3fr;
    }
  }
`