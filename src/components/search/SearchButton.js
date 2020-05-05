import React from "react";
import { Link } from "react-router-dom";
import URLPaths from "../../common/URLPaths";

const SearchButton = () => (
  <div className="open-search">
    <Link to={URLPaths.SEARCH}>Add a book</Link>
  </div>
);

export default SearchButton;
