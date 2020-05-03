import React from "react";
import { Link } from "react-router-dom";
import * as BooksApi from "../../api/BooksAPI";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import { useWhiteList, queryWhiteList } from "../../config/Config";

class BookSearch extends React.Component {
  maxResults = 50;

  state = {
    results: [],
  };

  search = (query) => {
    if (
      query &&
      (!useWhiteList || queryWhiteList.indexOf(query.toLowerCase()) > -1)
    ) {
      const currentResults = this.state.results
      BooksApi.search(query, this.maxResults).then((data) => {
        // Making sure the results have not changed
        // between the initial query and the
        // now 
        currentResults === this.state.results &&
        this.setState(() => ({
          results: data,
        }))
      });
    } else {
      this.setState(() => ({
        results: [],
      }));
    }
  };

  render() {
    return (
      <div>
        <div className="search-books">
          <SearchBar
            closeSearch={this.props.closeSearch}
            search={this.search}
          />
          <SearchResults
            results={this.state.results}
            updateBook={this.props.updateBook}
          />
        </div>
        {useWhiteList && this.state.results.length === 0 && (
          <div style={{ margin: "0px", padding: "10px", fontWeight: "bold" }}>
            Results will be displayed only if the search query matches one of
            the <Link to="/search-keywords">whitelisted keywords</Link>
          </div>
        )}
      </div>
    );
  }
}

export default BookSearch;
