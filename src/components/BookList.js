import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BookContext } from "../contexts/bookContext";

export default function BookList() {
  const { bookList, setBookList } = useContext(BookContext);

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
    <>
      <Grid
        container
        spacing={2}
        direction='row'
        justify='center'
        style={{ marginTop: "1em" }}
      >
        {bookList.map((book) => (
          <BookCard
            key={book.id}
            displayTitle={book.displayTitle}
            url={book.url}
            id={book.id}
            valid={book.valid}
          />
        ))}
      </Grid>
    </>
  );
}
