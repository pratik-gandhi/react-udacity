import React from "react";

class SearchBar extends React.Component {
  state = {
    query: "",
  };

  updateQuery = (e) => {
    const query = e.target.value;  
    this.setState(() => ({
      query: query,
    }));
    this.props.search(query)
  };

  render() {
    return (
      <div className="search-books-bar">
        <div className="close-search" onClick={() => this.props.closeSearch()}>
          Close
        </div>
        <div className="search-books-input-wrapper">
          <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={this.updateQuery} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
