import ShelfTypes from "../common/ShelfTypes";

export const getUpdatedBookList = (currentBookList, bookToUpdate) => {
  const shownBooks = currentBookList.filter(
    (book) => book.shelf !== ShelfTypes.None.value
  );
  return shownBooks.find((book) => book.id === bookToUpdate.id)
    ? shownBooks
    : [...shownBooks, bookToUpdate];
};

export const getShelf = (book, currentBooks) => {
  let shelf = ShelfTypes.None.value;

  if (currentBooks && currentBooks.length > 0) {
    const displayedBook = currentBooks.find((b) => b.id === book.id);
    if (displayedBook && displayedBook.shelf) {
      shelf = displayedBook.shelf;
    }
  }
  return shelf;
};
