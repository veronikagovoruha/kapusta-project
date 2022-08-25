import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addExpenseTransactionApi,
  addIncomeTransactionApi,
  getExpenseTransactionApi,
  getIncomeTransactionApi,
} from 'services/transactionsApi';

export const addIncomeTransactionThunk = createAsyncThunk(
  'transagtion/addIncome',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = addIncomeTransactionApi(transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getIncomeTransactionThunk = createAsyncThunk(
  'transagtion/getIncome',
  async (_, { rejectWithValue }) => {
    try {
      const data = getIncomeTransactionApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addExpenseTransactionThunk = createAsyncThunk(
  'transagtion/addExpense',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = addExpenseTransactionApi(transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getExpenseTransactionThunk = createAsyncThunk(
  'transagtion/getExpense',
  async (_, { rejectWithValue }) => {
    try {
      const data = getExpenseTransactionApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeTransactionThunk = createAsyncThunk(
  'transagtion/remove',
  async (id, { rejectWithValue }) => {
    try {
      getExpenseTransactionApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
