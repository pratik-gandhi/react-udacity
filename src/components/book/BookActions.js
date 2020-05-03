import React from "react";

import shelfTypes from "../../common/ShelfTypes";

class ShelfChanger extends React.Component {
  
  shelves = Object.keys(shelfTypes)
    .filter((key) => shelfTypes.hasOwnProperty(key))
    .map((key) => shelfTypes[key]);

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={this.props.currentShelf ? this.props.currentShelf : shelfTypes.None.value}
          onChange={(event) => this.props.updateBook(event.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          {this.shelves.map((shelf) => (
            <option key={shelf.value} value={shelf.value}>
              {shelf.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
