import React from "react";
import BookShelf from "./BookShelf";
import ShelfTypes from "../../common/ShelfTypes";

class BookShelves extends React.Component {
  
  categories = Object.keys(ShelfTypes)
    .filter((key) => ShelfTypes.hasOwnProperty(key) && ShelfTypes[key].show)
    .map((key) => ShelfTypes[key]);

  render() {
    return (
      <div>
        {this.categories.map((category) => {
          const booksToShow = this.props.books.filter(
            (book) => book.shelf === category.value
          );
          return (
            <BookShelf
              key={category.value}
              name={category.name}
              books={booksToShow}
              updateBook={this.props.updateBook}
            />
          );
        })}
      </div>
    );
  }
}

export default BookShelves;
