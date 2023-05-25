import { Search } from "components/Search"
import { NewsLetter } from "components/Newsletter"
import { MostSearchedCategories } from "components/MostSearchedCategories"
import { Footer } from "components/Footer"


export const HomePage = () => {
  return(
    <>
      <Search />
      <MostSearchedCategories />
      <NewsLetter />
      <Footer />
    </>
  )
}