import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./api/BooksAPI";
import "./App.css";

import BooksDashboard from "./components/BooksDashboard";
import SearchButton from "./components/search/SearchButton";
import BookSearch from "./components/search/BookSearch";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  addBook = (book) => {
    this.setState((currentState) => ({
      books: [...currentState, book],
    }));
  };

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState(() => ({
        books: data,
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={({ history }) => (
            <BookSearch
              updateBook={this.updateBook}
              closeSearch={() => {
                history.push("/");
              }}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div>
              <BooksDashboard books={this.state.books} updateBook={this.updateBook}/>
              <SearchButton addBook={this.addBook}/>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
