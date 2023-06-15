import { makeVar } from "@apollo/client";

export const var_book = makeVar<IBookComplete | undefined>(undefined)

export const var_books = makeVar<IBookBasic[]>([])

export const var_released_books = makeVar<IBookResume[]>([])

export const var_best_sellers = makeVar<IBookResume[]>([])