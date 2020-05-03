import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./api/BooksAPI";
import "./App.css";

import BooksDashboard from "./components/layout/BooksDashboard";
import SearchButton from "./components/search/SearchButton";
import BookSearch from "./components/search/BookSearch";
import SearchKeywords from "./components/search/SearchKeywords";
import { useWhiteList } from "./config/Config";
import { getUpdatedBookList } from "./utils/Utils";

import URLPaths from "./common/URLPaths";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  setBooks = (books) => {
    this.setState(() => ({
      books: books,
    }));
  };

  updateBook = (bookToUpdate, newShelf) => {
    BooksAPI.update(bookToUpdate, newShelf)
      .then(() => {
        bookToUpdate.shelf = newShelf;
        this.setBooks(getUpdatedBookList(this.state.books, bookToUpdate));
      })
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setBooks(data);
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path={URLPaths.SEARCH}
          render={({ history }) => (
            <BookSearch
              updateBook={this.updateBook}
              closeSearch={() => {
                history.push(URLPaths.ROOT);
              }}
            />
          )}
        />

        <Route
          exact
          path={URLPaths.ROOT}
          render={() => (
            <div>
              <BooksDashboard
                books={this.state.books}
                updateBook={this.updateBook}
              />
              <SearchButton />
            </div>
          )}
        />

        {useWhiteList && (
          <Route exact path={URLPaths.KEYWORDS} component={SearchKeywords} />
        )}
      </div>
    );
  }
}

export default BooksApp;
