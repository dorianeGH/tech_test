import { BookContext } from "../contexts/bookContext";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import BookCard from "../components/BookCard";

export default function BookDetailsPage() {
  const { bookList } = useContext(BookContext);
  const { id } = useParams();
  const bookId = parseInt(id, 10);

  const [chapterList, setChapterList] = useState([]);

  useEffect(() => {
    axios({
      url: "https://api-dev.lelivrescolaire.fr/graphql",
      method: "post",
      data: {
        query: `query($bookId:Int){
          viewer {
            chapters(bookIds:[$bookId]) {
                  hits {
                  id
                  title
                  url
                  valid
                }
              }
            }
          }`,
        variables: {
          bookId,
        },
      },
    }).then((result) => {
      setChapterList(result?.data?.data?.viewer?.chapters?.hits);
    });
    console.log(chapterList);
  }, []);

  return (
    <>
      <h1 className="title">
        {bookList
          .filter(({ id }) => id === bookId)
          .map((id) => id.displayTitle)}
      </h1>
      <h3 className="title">Chapters :</h3>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        style={{ marginTop: "1em" }}
      >
        {chapterList.map(({ id, title, url, valid }) => (
          // TODO: Is key as an ID a good idea?
          <BookCard key={id} displayTitle={title} {...{ url, id, valid }} />
        ))}
      </Grid>
    </>
  );
}
