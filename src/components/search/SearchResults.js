import React from "react";

import Book from "../book/Book";

class SearchResults extends React.Component {
  render() {
    const { results } = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {results &&
            results.length > 0 &&
            results.map((book) => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  url={book.imageLinks ? book.imageLinks.thumbnail : null}
                  updateBook={(newShelf) =>this.props.updateBook(book, newShelf)}
                />
              </li>
            ))}
        </ol>
      </div>
    );
  }
}

export default SearchResults;
