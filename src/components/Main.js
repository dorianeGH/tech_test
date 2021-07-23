import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookPage from "../screens/BookPage";
import BookDetailsPage from "../screens/BookDetailsPage";

export default function Main() {
  return (
    <main className='p-6'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={BookPage} />
          <Route exact path='/books/:id' component={BookDetailsPage} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}
