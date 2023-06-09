declare interface IBookComplete{
  id: number,
  categoria: number,
  titulo: string,
  slug: string,
  descricao: string,
  imagemCapa: string,
  autor: IAutorComplete,
  opcoesCompra: IPurchaseOptionComplete[],
  sobre: string,
  tags: ITag[]
}

declare interface IBookResume{
  id: number,
  titulo: string,
  slug: string,
  descricao: string,
  imagemCapa: string,
  sobre: string,
  autor: IAutorName,
  opcoesCompra: IPurchaseOptionPrice[],
}

declare interface IBookCart{
  id: number,
  titulo: string,
  slug: string,
  descricao: string,
  imagemCapa: string,
  sobre: string,
  autor: IAutorName,
}

declare interface IBookBasic{
  id: number,
  titulo: string,
  slug: string,
  imagemCapa: string,
  opcoesCompra: IPurchaseOptionPrice[],
}