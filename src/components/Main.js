import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookPage from "../screens/BookPage";
import BookDetailsPage from "../screens/BookDetailsPage";
// import ChapterPage from "../screens/ChapterPage";

export default function Main() {
  return (
    <main className='p-6'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={BookPage} />
          <Route exact path='/books/:id' component={BookDetailsPage} />
          {/* <Route exact path='/chapters' component={ChapterPage} /> */}
        </Switch>
      </BrowserRouter>
    </main>
  );
}
