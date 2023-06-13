import { createSlice } from '@reduxjs/toolkit';
import initialbooks from './initialbooks';

const bookSlice = createSlice({
  name: 'books',
  initialState: initialbooks,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [
        {
          item_id: action.payload.item_id,
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload.item_id),
    }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
