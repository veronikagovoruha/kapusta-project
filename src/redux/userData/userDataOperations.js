import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUserBalance, getCurrentUserApi } from 'services/userApi';

export const getCurrentUserThunk = createAsyncThunk(
  'user/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.accessToken;

    if (!persistedToken) {
      return rejectWithValue();
    }

    try {
      const data = getCurrentUserApi(persistedToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUserBalanceThunk = createAsyncThunk(
  'user/balance',
  async (newBalance, { rejectWithValue }) => {
    try {
      const data = addUserBalance(newBalance);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
