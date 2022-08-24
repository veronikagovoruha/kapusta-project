import { createAsyncThunk } from '@reduxjs/toolkit';
import { logInApi, logOutApi, registerApi } from 'services/authApi';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const data = registerApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const data = logInApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      logOutApi();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);