import React from "react";
import ShelfChanger from "./BookActions";
import { Thumbnail, Author, Title } from "./BookDetails";

class Book extends React.Component {
  render() {
    const { title, authors, url, shelf } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <Thumbnail url={`url(${url})`} />
          <ShelfChanger currentShelf={shelf} updateBook={this.props.updateBook}/>
        </div>
        <Title title={title}/>
        <Author author={authors && authors.length > 0 ? authors[0] : ''}/>
      </div>
    );
  }
}

export default Book;
