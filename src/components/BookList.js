import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BookContext } from "../contexts/bookContext";

export default function BookList() {
  const { bookList } = useContext(BookContext);

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
