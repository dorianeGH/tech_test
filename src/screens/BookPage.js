import BookList from "../components/BookList";
import Dropdown from "../components/Dropdown";
import React, { useState, useEffect } from "react";
import { BookContext } from "../contexts/bookContext";
import { useContext } from "react";

export default function BookPage() {
  const { selectedLevel, bookList } = useContext(BookContext);

  return (
    <>
      <h2>Book Lists</h2>
      <Dropdown />
      <BookList bookList={bookList} />
    </>
  );
}
