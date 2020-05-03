import React from "react";

import * as BooksApi from '../../api/BooksAPI'
import SearchResults from './SearchResults'
import SearchBar from './SearchBar'

class BookSearch extends React.Component {
  
  maxResults = 50

  state = {
    results: []
  }

  search = (query) => {
    if (query) {
      BooksApi.search(query, this.maxResults)
      .then(data => this.setState(() => ({
        results: data
      })))
    }
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar closeSearch={this.props.closeSearch} search={this.search}/>
        <SearchResults results={this.state.results} updateBook={this.updateBook}/>
      </div>
    );
  }
}

export default BookSearch;
