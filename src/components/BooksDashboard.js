import React from "react";

import BookShelves from "./bookshelf/BookShelves";

class BooksDashBoard extends React.Component {
  name = "MyReads";
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>{this.name}</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelves 
                books={this.props.books}
                updateBook={this.props.updateBook}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BooksDashBoard;
