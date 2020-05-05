import React from "react";
import ShelfChanger from "./BookActions";
import { Thumbnail, Author, Title } from "./BookDetails";

const Book = (props) => {
  const { title, authors, url, shelf, updateBook } = props;
  return (
    <div className="book">
      <div className="book-top">
        <Thumbnail url={`url(${url})`} />
        <ShelfChanger currentShelf={shelf} updateBook={updateBook} />
      </div>
      <Title title={title} />
      <Author author={authors && authors.length > 0 ? authors[0] : ""} />
    </div>
  );
};

export default Book;
