import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUserBalance, getCurrentUserApi } from 'services/userApi';
import { errorHandler } from 'redux/error/errorHandler';

export const getCurrentUserThunk = createAsyncThunk(
  'user/refresh',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const state = getState();
    const persistedToken = state.auth.accessToken;

    if (!persistedToken) {
      return rejectWithValue();
    }

    try {
      const data = await getCurrentUserApi(persistedToken);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: getCurrentUserThunk }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export const addUserBalanceThunk = createAsyncThunk(
  'user/balance',
  async (newBalance, { rejectWithValue, dispatch }) => {
    try {
      const data = await addUserBalance(newBalance);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: () => addUserBalanceThunk(newBalance) }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
