import "./App.css";
// import Header from "./components/Header";
import Main from "./components/Main";
import BookContextProvider from "./contexts/bookContext";

import "./index.css";

function App() {
  return (
    <>
      <BookContextProvider>
        <Main />
      </BookContextProvider>
    </>
  );
}

export default App;
