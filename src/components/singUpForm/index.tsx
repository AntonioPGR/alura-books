import { AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"


export const SingUpForm = () => {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [endereco, setEndereco] = useState("")
  const [complemento, setComplemento] = useState("")
  const [cep, setCep] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("")

  return (
    <form>
      <AbCampoTexto value={nome} onChange={setNome}  label="Nome" placeholder="seu nome completo" />
      <AbCampoTexto value={email} onChange={setEmail} label="Email" placeholder="seuemail@maneiro.com" />
      <AbCampoTexto value={endereco} onChange={setEndereco} label="Endereço" placeholder="sua rua e número" />
      <div className="form__complementsInput">
        <AbCampoTexto value={complemento} onChange={setComplemento} label="Complemento" placeholder="Apto/casa, bloco, referência" />
        <AbCampoTexto value={cep} onChange={setCep} label="CEP" placeholder="Apto/casa, bloco, referência" />
      </div>
      <AbCampoTexto value={senha} onChange={setSenha} type="password" label="Senha" />
      <AbCampoTexto value={confirmacaoSenha} onChange={setConfirmacaoSenha} type="password" label="Confirmar senha"/>
    </form>
  )
}