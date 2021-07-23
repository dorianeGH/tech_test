import { BookContext } from "../contexts/bookContext";
import { useContext } from "react";
import { useParams } from "react-router";

export default function BookDetailsPage() {
  const { bookList } = useContext(BookContext);
  const { id } = useParams();
  const bookId = parseInt(id, 10);

  return (
    <>
      <h1>
        {bookList
          .filter((book) => book.id === bookId)
          .map((id) => id.displayTitle)}
      </h1>
    </>
  );
}
