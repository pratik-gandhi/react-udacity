import React from "react";
import { Throttle } from "react-throttle";

import { searchThrottle } from "../../config/Config";

class SearchBar extends React.Component {
  state = {
    query: "",
  };

  updateQuery = (e) => {
    console.log(e);
    const query = e.currentTarget.value;
    console.log(query)
    this.setState(() => ({
      query: query,
    }));
    console.log(`State ${this.state.query}`)
    this.props.search(query);
  };

  render() {
    return (
      <div className="search-books-bar">
        <div className="close-search" onClick={() => this.props.closeSearch()}>
          Close
        </div>
        <div className="search-books-input-wrapper">
          <Throttle time={searchThrottle} handler="onChange">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.updateQuery(e)}
            />
          </Throttle>
        </div>
      </div>
    );
  }
}

export default SearchBar;
