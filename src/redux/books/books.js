import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [
        {
          id: action.payload.id,
          title: action.payload.title,
        },
      ],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload.id),
    }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
