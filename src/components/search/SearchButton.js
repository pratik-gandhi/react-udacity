import React from "react";
import { Link } from "react-router-dom";
import URLPaths from "../../common/URLPaths"

class SearchButton extends React.Component {
  render() {
    return (
      <div className="open-search">
        <Link to={URLPaths.SEARCH}>
          Add a book
        </Link>
      </div>
    );
  }
}

export default SearchButton;
