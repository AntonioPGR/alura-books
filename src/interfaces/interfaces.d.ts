declare interface ILink{
  id?: number,
  label: string,
  to: string,
  target: '_Blank' | '_self'
}

declare interface IBook {
  id: number,
  title: string,
  category: string,
  description: string,
  author: string,
  price: number,
  cover: string
}

declare interface IUserSignUp{
  nome: string,
  email: string,
  senha: string,
  endereco: string,
  complemento: string,
  cep: string
}

declare interface IUserLogin{
  email: string,
  senha: string,
}

declare interface IUserResponse{
  access_token: string,
  user: {
    nome: string,
    email: string,
    endereco: string,
    complemento: string,
    cep: string
  }
}

declare interface IOrder{
  id: number,
  data: string,
  entrega: string,
  total: number
}

declare type children = ReactNode

declare type voidFunction = () => void

declare type voidFunctionWithParameter<T> = (element:T) => void