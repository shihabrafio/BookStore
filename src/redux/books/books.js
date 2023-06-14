import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import initialbook from './initialbooks';

const storedBooks = () => {
  const storedBooks = localStorage.getItem('Allbooks');
  const storedBooksArr = JSON.parse(storedBooks);

  if (storedBooks) {
    if (storedBooksArr.length !== 0) {
      return storedBooksArr;
    }
    return initialbook;
  }
  return initialbook;
};

const initialState = {
  books: storedBooks(),
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const bookTitle = action.payload[0];
      const bookAuthor = action.payload[1];
      const newBook = {
        item_id: uuid(),
        title: bookTitle,
        author: bookAuthor,
        category: 'Action',
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };
    },
    removeBook: (state, action) => {
      const id = action.payload;
      const newstate = { ...state };
      newstate.books = state.books.filter((book) => book.item_id !== id);
      return newstate;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
