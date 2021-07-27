import BookList from "../components/BookList";
import Dropdown from "../components/Dropdown";
import React, { useState, useEffect } from "react";
import { BookContext } from "../contexts/bookContext";
import { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import BookCard from "../components/BookCard";

const BookPage = () => {
  const { selectedLevel, bookList } = useContext(BookContext);

  const filteredBookByLevel = bookList
    .filter((book) => book.levels.map((l) => l?.name).includes(selectedLevel))
    .sort((a, b) => b - a);

  console.log(filteredBookByLevel);
  return (
    <>
      <h1 className="title">Book Lists</h1>
      <Dropdown />
      {!filteredBookByLevel.length ? (
        <BookList bookList={bookList} />
      ) : (
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          style={{ marginTop: "1em" }}
        >
          {filteredBookByLevel.map((book) => (
            <BookCard
              key={book.id}
              displayTitle={book.displayTitle}
              url={book.url}
              id={book.id}
              valid={book.valid}
            />
          ))}
        </Grid>
      )}
    </>
  );
};
export default BookPage;
