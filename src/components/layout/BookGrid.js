import React from "react";
import PropTypes from "prop-types";

import Book from "../book/Book";

const BookGrid = (props) => (
  <ol className="books-grid">
    {props.books.map((book) => (
      <li key={book.id}>
        <Book
          updateBook={(newShelf) => props.updateBook(book, newShelf)}
          title={book.title}
          authors={book.authors}
          url={book.imageLinks ? book.imageLinks.thumbnail : null}
          shelf={book.shelf}
        />
      </li>
    ))}
  </ol>
);

BookGrid.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default BookGrid;
