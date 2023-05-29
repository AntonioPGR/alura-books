import { Search } from "components/Search"
import { NewsLetter } from "components/Newsletter"
import { MostSearchedCategories } from "components/MostSearchedCategories"
import { Footer } from "components/Footer"
import { Bookstand } from "components/Bookstand"

const books: IBook[] = [
  {
    id: 1,
    title: "Book 1",
    category: "Fiction",
    description: "A thrilling fiction book.",
    author: "John Doe",
    price: 19.99,
    cover: 'https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg'
  },
  {
    id: 2,
    title: "Book 2",
    category: "Non-Fiction",
    description: "An informative non-fiction book.",
    author: "Jane Smith",
    price: 14.99,
    cover: 'https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg'
  },
  {
    id: 3,
    title: "Book 3",
    category: "Fantasy",
    description: "A captivating fantasy book.",
    author: "Mike Johnson",
    price: 24.99,
    cover: 'https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg'
  },
];

export const HomePage = () => {
  return(
    <>
      <Search />
      <Bookstand title="últimos lançamentos" books={books} />
      <Bookstand title="mais vendidos" books={books} />
      <MostSearchedCategories />
      <NewsLetter />
      <Footer />
    </>
  )
}