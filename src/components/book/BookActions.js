import React from "react";
import PropTypes from "prop-types";

import shelfTypes from "../../common/ShelfTypes";

const ShelfChanger = (props) => {
  const shelves = Object.keys(shelfTypes)
    .filter((key) => shelfTypes.hasOwnProperty(key))
    .map((key) => shelfTypes[key]);

  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={
          props.currentShelf ? props.currentShelf : shelfTypes.None.value
        }
        onChange={(event) => props.updateBook(event.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        {shelves.map((shelf) => (
          <option key={shelf.value} value={shelf.value}>
            {shelf.name}
          </option>
        ))}
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  currentShelf: PropTypes.string,
  updateBook: PropTypes.func.isRequired,
};

export default ShelfChanger;
