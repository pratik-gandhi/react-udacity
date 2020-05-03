import React from "react";
import BookChanger from "./BookChanger";
import { Thumbnail, Author, Title } from "./BookDetails";

class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <Thumbnail url={`url(${this.props.url})`} />
          <BookChanger />
        </div>
        <Title title={this.props.title}/>
        <Author author={this.props.author}/>
      </div>
    );
  }
}

export default Book;
