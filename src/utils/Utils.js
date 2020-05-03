import ShelfTypes from "../common/ShelfTypes";

export const getUpdatedBookList = (currentBookList, bookToUpdate) => {
  const shownBooks = currentBookList.filter(
    (book) => book.shelf !== ShelfTypes.None.value
  );
  return shownBooks.find((book) => book.id === bookToUpdate.id)
    ? shownBooks
    : [...shownBooks, bookToUpdate];
};
