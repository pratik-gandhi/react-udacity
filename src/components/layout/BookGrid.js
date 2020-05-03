import React from "react";

import Book from "../book/Book";

class BookGrid extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <li key={book.id}>
            <Book
              updateBook={this.props.updateBook}  
              title={book.title}
              author={book.authors[0]}
              url={book.imageLinks ? book.imageLinks.thumbnail : null}
            />
          </li>
        ))}
      </ol>
    );
  }
}

export default BookGrid;
