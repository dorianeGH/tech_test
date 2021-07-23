import { useState } from "react";
import BookList from "../components/BookList";

export default function BookPage({ bookList }) {
  return (
    <>
      <h2>Book Lists</h2>
      <BookList bookList={bookList} />
    </>
  );
}
