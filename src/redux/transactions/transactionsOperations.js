import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from 'redux/error/errorHandler';
import {
  addExpenseTransactionApi,
  addIncomeTransactionApi,
  getExpenseTransactionApi,
  getIncomeTransactionApi,
  removeTransactionApi,
} from 'services/transactionsApi';

export const addIncomeTransactionThunk = createAsyncThunk(
  'transaction/addIncome',
  async (transaction, { rejectWithValue, dispatch }) => {
    try {
      const data = await addIncomeTransactionApi(transaction);
      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: () => addIncomeTransactionThunk(transaction) }));
      return rejectWithValue(error.message);
    }
  }
);

export const getIncomeTransactionThunk = createAsyncThunk(
  'transaction/getIncome',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await getIncomeTransactionApi();
      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: getIncomeTransactionThunk }));
      return rejectWithValue(error.message);
    }
  }
);

export const addExpenseTransactionThunk = createAsyncThunk(
  'transaction/addExpense',
  async (transaction, { rejectWithValue, dispatch }) => {
    try {
      const data = await addExpenseTransactionApi(transaction);
      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: () => addExpenseTransactionThunk(transaction) }));
      return rejectWithValue(error.message);
    }
  }
);

export const getExpenseTransactionThunk = createAsyncThunk(
  'transaction/getExpense',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await getExpenseTransactionApi();
      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: getExpenseTransactionThunk }));
      return rejectWithValue(error.message);
    }
  }
);

export const removeTransactionThunk = createAsyncThunk(
  'transaction/remove',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await removeTransactionApi(id);
      return id;
    } catch (error) {
      dispatch(errorHandler({ error, cb: () => removeTransactionThunk(id) }));
      return rejectWithValue(error.message);
    }
  }
);
