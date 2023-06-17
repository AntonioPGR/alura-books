declare interface IShoppingCartContext {
  total?: number,
  itens?: IShoppingCartItem[],
  add_item_to_shopping_cart: (livroID:number, opcaoCompraID:number, quantidade:number) => void
}

declare interface IShoppingCart{
  total: number,
  itens: IShoppingCartItem[],
}

declare interface IShoppingCartTotalPrice{
  total:number
}

declare interface IShoppingCartItens{
  itens: IShoppingCartItem[]
}

declare interface IShoppingCartItem{
  quantidade: number,
  opcaoCompra: IPurchaseOptionPrice,
  livro: IBookCart,
}

declare interface IShoppingCartAddItem{
  item: {
    quantidade: number,
    opcaoCompraId: number,
    livroId: number,
  }
    
}