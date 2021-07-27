import Grid from "@material-ui/core/Grid"
import BookCard from "./BookCard"
import React, { useContext } from "react"
import { BookContext } from "../contexts/bookContext"

const BookList = () => {
  const { bookList } = useContext(BookContext)

  return (
    <>
      <Grid container spacing={2} direction="row" justify="center" style={{ marginTop: "1em" }}>
        {bookList.map(({ id, displayTitle, url, valid }) => (
          <BookCard key={id} {...{ id, displayTitle, url, valid }} />
        ))}
      </Grid>
    </>
  )
}

export default BookList
