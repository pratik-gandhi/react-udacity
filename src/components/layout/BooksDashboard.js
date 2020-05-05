import React from "react";
import PropTypes from "prop-types";

import BookShelves from "../bookshelf/BookShelves";
import { appName } from "../../config/Config";

const BooksDashBoard = (props) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>{appName}</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelves books={props.books} updateBook={props.updateBook} />
      </div>
    </div>
  </div>
);

BooksDashBoard.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default BooksDashBoard;
