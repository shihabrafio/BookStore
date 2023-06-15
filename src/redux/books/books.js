import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
};

export const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7kYFUWenXnjBJNyIFqkh/books';
export const getBooks = createAsyncThunk('books/getBooks', async (thunk) => {
  try {
    const response = await axios(api);
    return response.data;
  } catch (error) {
    return thunk.rejectWithValue('something went wrong');
  }
});

export const postBooks = createAsyncThunk('books/postBooks', async (book, thunk) => {
  const bookObj = {
    item_id: uuid(),
    title: book[0],
    author: book[1],
    category: 'Action',
  };
  try {
    const response = await axios.post(api, bookObj);
    return response.data;
  } catch (error) {
    return thunk.rejectWithValue('something went wrong');
  }
});

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (id, thunk) => {
  try {
    const response = await axios.delete(`${api}/${id}`);
    return response.data;
  } catch (error) {
    return thunk.rejectWithValue('something went wrong');
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const id = action.payload;
      const newstate = { ...state };
      newstate.books = state.books.filter((book) => book.item_id !== id);
      return newstate;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getBooks.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      books: action.payload,
    }));
    builder.addCase(getBooks.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(postBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(postBooks.fulfilled, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(postBooks.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(deleteBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(deleteBooks.fulfilled, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(deleteBooks.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export const { removeBook } = bookSlice.actions;
export default bookSlice.reducer;
