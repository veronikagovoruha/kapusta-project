import { createSlice } from '@reduxjs/toolkit';
import {
  getExpenseCategoriesThunk,
  getIncomeCategoriesThunk,
} from './categoriesOperations';

const initialState = {
  expense: [],
  income: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [getIncomeCategoriesThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getIncomeCategoriesThunk.fulfilled](state, { payload }) {
      state.income = [...payload];
      state.isLoading = false;
    },
    [getIncomeCategoriesThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [getExpenseCategoriesThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getExpenseCategoriesThunk.fulfilled](state, { payload }) {
      state.expense = [...payload];
      state.isLoading = false;
    },
    [getExpenseCategoriesThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default categoriesSlice.reducer;
