declare interface ILink{
  label: string,
  to: string,
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