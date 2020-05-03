import React from "react";
import PropTypes from "prop-types";
import BookGrid from "../layout/BookGrid";

class BookShelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <BookGrid
            books={this.props.books}
            updateBook={this.props.updateBook}
          />
        </div>
      </div>
    );
  }
}

export default BookShelf;
