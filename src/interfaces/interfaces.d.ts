declare interface IBook {
  id: number,
  categoria: number,
  titulo: string,
  slug: string,
  descricao: string,
  isbn: string,
  numeroPaginas: number,
  publicacao: string,
  imagemCapa: string,
  autor: number,
  opcoesCompra: IPurchaseOption[],
  sobre: string,
}

declare interface PropsProvider{
  children:children
}

declare interface IAutor{
  id: number,
  nome: string,
  sobre: string
}

declare interface IPurchaseOption{
  id: number,
  titulo: string,
  preco: number,
  formatos?: string[],
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
    cep: string,
  }
}

declare interface IOrder{
  id: number,
  data: string,
  entrega: string,
  total: number
}

declare interface ICategory{
  id: number,
	nome: string,
	slug: string
}

declare type children = ReactNode

declare type voidFunction = () => void

declare type voidFunctionWithParameter<T> = (element:T) => void