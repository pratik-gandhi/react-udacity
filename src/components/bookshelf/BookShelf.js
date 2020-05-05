import React from "react";
import PropTypes from "prop-types";
import BookGrid from "../layout/BookGrid";

const BookShelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.name}</h2>
    <div className="bookshelf-books">
      <BookGrid books={props.books} updateBook={props.updateBook} />
    </div>
  </div>
);

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default BookShelf;
