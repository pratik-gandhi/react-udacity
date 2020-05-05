import React from "react";

import Book from "../book/Book";
import { getShelf } from "../../utils/Utils"

class SearchResults extends React.Component {
  render() {
    const { currentBooks, results } = this.props;
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
                    shelf={getShelf(book, currentBooks)}
                    updateBook={(newShelf) =>
                      this.props.updateBook(book, newShelf)
                    }
                  />
                </li>
            ))}
        </ol>
      </div>
    );
  }
}

export default SearchResults;
