import { makeVar } from "@apollo/client";


export const var_books = makeVar<IBook[]>([])

export const var_released_books = makeVar<IBook[]>([])

export const var_best_sellers = makeVar<IBook[]>([])