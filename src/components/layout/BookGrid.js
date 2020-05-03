import React from "react";

import Book from "../book/Book";

class BookGrid extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <li key={book.id}>
            <Book
              updateBook={(newShelf) => this.props.updateBook(book, newShelf)}
              title={book.title}
              authors={book.authors}
              url={book.imageLinks ? book.imageLinks.thumbnail : null}
              shelf={book.shelf}
            />
          </li>
        ))}
      </ol>
    );
  }
}

export default BookGrid;
