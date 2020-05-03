import React from "react";

import Book from "../book/Book";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.results &&
            this.props.results.length > 0 &&
            this.props.results.map((book) => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  author={book.authors && book.authors.length > 0 ? book.authors[0] : ''}
                  url={book.imageLinks ? book.imageLinks.thumbnail : null}
                />
              </li>
            ))}
        </ol>
      </div>
    );
  }
}

export default SearchResults;
