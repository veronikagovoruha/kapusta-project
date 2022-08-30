import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from 'redux/error/errorHandler';
import {
  getExpenseCategoriesApi,
  getIncomeCategoriesApi,
} from 'services/categoriesApi';

export const getIncomeCategoriesThunk = createAsyncThunk(
  'categories/income',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await getIncomeCategoriesApi();
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: getIncomeCategoriesThunk }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export const getExpenseCategoriesThunk = createAsyncThunk(
  'categories/expense',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await getExpenseCategoriesApi();
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: getExpenseCategoriesThunk }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
