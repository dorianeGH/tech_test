import { BookContext } from "../contexts/bookContext";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function BookDetailsPage() {
  const { bookList } = useContext(BookContext);
  const { id } = useParams();
  const bookId = parseInt(id, 10);

  const [chapterList, setChapterList] = useState([]);

  useEffect(() => {
    axios({
      url: "https://api-dev.lelivrescolaire.fr/graphql",
      method: "post",
      data: {
        query: `{
          viewer {
            chapters(bookIds:[$bookId]) {
                  hits {
                  id
                  title
                  url
                  valid
                }
              }
            }
          }`,
        variables: {
          bookId: bookId,
        },
      },
    }).then((result) => {
      console.log(result.data);
    });
  }, [chapterList]);
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
