import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function BookDetailsPage({ bookList }) {
  const { id } = useParams();
  const bookId = parseInt(id, 10);
  console.log(bookId);

  const selectedBook = bookList[bookId];
  return (
    <div>
      <h1>{selectedBook.displayTitle}</h1>
    </div>
  );
}
