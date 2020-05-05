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

  updateBook = async (bookToUpdate, newShelf) => {
    try {
      await BooksAPI.update(bookToUpdate, newShelf);
      bookToUpdate.shelf = newShelf;
      this.setBooks(getUpdatedBookList(this.state.books, bookToUpdate));
    } catch (err) {
      console.error(`Error occurred when updating shelf for book ${bookToUpdate.name} : ${err}`);
    }
  };

  async componentDidMount() {
    try {
      const books = await BooksAPI.getAll();
      this.setState({ books });
    } catch (err) {
      console.error(`Error occurred when loading books : ${err}`);
    }
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
              currentBooks={this.state.books}
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