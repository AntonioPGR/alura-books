declare interface IShoppingCartProduct{
  quantidade: number,
  opcaoCompra: IPurchaseOptionPrice,
  livro: IBookCart,
}

declare interface IShoppingCartTotalPrice{
  total:number
}

declare interface IShoppingCartProducts{
  itens: IShoppingCartProduct[]
}

