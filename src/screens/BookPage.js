import BookList from "../components/BookList";
import Dropdown from "../components/Dropdown";

export default function BookPage({ bookList }) {
  return (
    <>
      <h2>Book Lists</h2>
      <Dropdown />
      <BookList bookList={bookList} />
    </>
  );
}
