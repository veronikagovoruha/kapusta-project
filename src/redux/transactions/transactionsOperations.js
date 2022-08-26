import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addExpenseTransactionApi,
  addIncomeTransactionApi,
  getExpenseTransactionApi,
  getIncomeTransactionApi,
} from 'services/transactionsApi';

export const addIncomeTransactionThunk = createAsyncThunk(
  'transaction/addIncome',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await addIncomeTransactionApi(transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getIncomeTransactionThunk = createAsyncThunk(
  'transaction/getIncome',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getIncomeTransactionApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addExpenseTransactionThunk = createAsyncThunk(
  'transaction/addExpense',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await addExpenseTransactionApi(transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getExpenseTransactionThunk = createAsyncThunk(
  'transaction/getExpense',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getExpenseTransactionApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeTransactionThunk = createAsyncThunk(
  'transaction/remove',
  async (id, { rejectWithValue }) => {
    try {
      await getExpenseTransactionApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
