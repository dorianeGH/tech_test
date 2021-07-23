import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BookList() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    axios({
      url: "https://api-dev.lelivrescolaire.fr/graphql",
      method: "post",
      data: {
        query: `
       {
        viewer {
            books {
              hits {
                id
                displayTitle
                url
                subjects{name}
                levels{name}
                valid
              }
            }
          }
        }`,
      },
    }).then((result) => {
      setBookList(result.data.data.viewer.books.hits);
    });
    console.log(bookList);
  }, []);

  return (
    <div>
      <button>Graph me</button>
      {bookList.map((book) => (
        <div key={book.id}>{book.displayTitle}</div>
      ))}
    </div>
  );
}
