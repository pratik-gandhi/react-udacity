import React from "react";
import PropTypes from "prop-types";

import BookShelf from "./BookShelf";
import ShelfTypes from "../../common/ShelfTypes";

const BookShelves = (props) => {
  const categories = Object.keys(ShelfTypes)
    .filter((key) => ShelfTypes.hasOwnProperty(key) && ShelfTypes[key].show)
    .map((key) => ShelfTypes[key]);

  return (
    <div>
      {categories.map((category) => {
        const booksToShow = props.books.filter(
          (book) => book.shelf === category.value
        );
        return (
          <BookShelf
            key={category.value}
            name={category.name}
            books={booksToShow}
            updateBook={props.updateBook}
          />
        );
      })}
    </div>
  );
};

BookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default BookShelves;
