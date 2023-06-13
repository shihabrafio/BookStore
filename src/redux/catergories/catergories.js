import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: '',
  },
  reducers: {
    checkCategory: (state) => ({
      ...state,
      category: 'Under construction',
    }),
  },
});

export const { checkCategory } = categorySlice.actions;
export default categorySlice.reducer;
