import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import BookList from "../components/BookList";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { useForm } from "react-hook-form";
import qs from "query-string";
import Dropdown from "../components/Dropdown";
// Defines the styles in use for this component (MUI)
const useStyles = makeStyles((theme) => ({
  filters: {
    width: "15ch",
  },
  formControl: {
    display: "flex",
    background: "var(--bg-secondary)",
  },
  selectEmpty: {
    color: "var(--text-primary)",
  },
  label: {
    color: "var(--text-primary)",
  },
  button: {
    color: "var(--text-primary)",
    borderColor: "var(--text-primary)",
  },
}));

export default function BookPage({ bookList, levels }) {
  const { formControl, selectEmpty, label, filters } = useStyles();
  // const history = useHistory();
  // const location = useLocation();
  // const {
  //   level: defaultLevel = "",
  //   // with_genres: defaultWith_genres = "",
  //   query: defaultQuery = "",
  // } = qs.parse(location.search);

  // the default values of the filters come from the querystring in the URL
  const { register, watch, control, reset } = useForm({
    defaultValues: {
      level: levels,
      // with_genres: defaultWith_genres,
      // query: defaultQuery,
    },
  });
  console.log(levels);
  // watch for input changes
  const level = watch("level");
  // const with_genres = watch("with_genres");
  // const query = watch("query");
  return (
    <>
      <h2>Book Lists</h2>
      <Dropdown />
      <BookList bookList={bookList} />
    </>
  );
}
