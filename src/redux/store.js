import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './catergories/catergories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
