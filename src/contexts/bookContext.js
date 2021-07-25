import { createContext, useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";

export const BookContext = createContext();

export default function EventContextProvider({ children }) {
  const [bookList, setBookList] = useState([]);
  const [selectedLevel, setselectedLevel] = useState("All");
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
    <BookContext.Provider
      value={{ bookList, setBookList, selectedLevel, setselectedLevel }}
    >
      {children}
    </BookContext.Provider>
  );
}
