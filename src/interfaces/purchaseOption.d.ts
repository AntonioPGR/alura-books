declare interface IPurchaseOptionComplete{
  id: number,
  titulo: string,
  preco: number,
  formatos?: string[],
}

declare interface IPurchaseOptionPrice{
  id: number,
  preco: number,
}