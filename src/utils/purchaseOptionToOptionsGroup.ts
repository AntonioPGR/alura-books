import { AbGrupoOpcao } from "ds-alurabooks"
import { PriceFormatterToBRL } from "./priceFormatter"

export const purchaseOptionToGrupoOpcoes = (purchase_options:IPurchaseOptionComplete[]):AbGrupoOpcao[] => {
  return purchase_options.map(purchase_option => {
    const grupoDeOpcao : AbGrupoOpcao = {
      id: purchase_option.id,
      titulo: purchase_option.titulo,
      corpo: PriceFormatterToBRL.format(purchase_option.preco),
      rodape: purchase_option.formatos? purchase_option.formatos.reduce((prev, current) => prev + current) : ""
    }
    return grupoDeOpcao
  }) 
}