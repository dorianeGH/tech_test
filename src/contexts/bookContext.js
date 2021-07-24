import { createContext, useState } from "react";

export const BookContext = createContext();

export default function EventContextProvider({ children }) {
  const [bookList, setBookList] = useState([]);

  return (
    <BookContext.Provider value={{ bookList, setBookList }}>
      {children}
    </BookContext.Provider>
  );
}
