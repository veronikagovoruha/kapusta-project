import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getExpenseCategoriesApi,
  getIncomeCategoriesApi,
} from 'services/categoriesApi';

export const getIncomeCategoriesThunk = createAsyncThunk(
  'categories/income',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getIncomeCategoriesApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getExpenseCategoriesThunk = createAsyncThunk(
  'categories/expense',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getExpenseCategoriesApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
