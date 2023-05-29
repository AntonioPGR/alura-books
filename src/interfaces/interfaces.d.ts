declare interface ILink{
  id?: number,
  label: string,
  to: string,
  target: '_Blank' | '_self'
}

declare type children = ReactNode

declare interface IBook {
  id: number,
  title: string,
  category: string,
  description: string,
  author: string,
  price: number,
  cover: string
}