import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    borderRadius: "1em",
    position: "relative",
    margin: "1em",
    width: 200,
    height: 300,
    "&:after": {
      content: '""',
      bottom: 0,
      zIndex: 1,
    },
  },
  media: {
    height: 140,
  },
});

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
          />
        ))}
      </Grid>
    </>
  );
}
