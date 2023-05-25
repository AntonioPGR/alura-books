import { Search } from "components/Search"
import { NewsLetter } from "components/Newsletter"
import { MostSearchedCategories } from "components/MostSearchedCategories"


export const HomePage = () => {
  return(
    <>
      <Search />
      <MostSearchedCategories />
      <NewsLetter />
    </>
  )
}