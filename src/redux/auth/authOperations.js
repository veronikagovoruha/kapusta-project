import { createAsyncThunk } from '@reduxjs/toolkit';
import { logInApi, logOutApi, registerApi, refreshTokenApi } from 'services/authApi';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registerApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const refreshToken = createAsyncThunk(
  'auth/refresh',
  async (cb, { rejectWithValue, getState, dispatch }) => {
    try {
      const {sid, refreshToken} = getState().auth;
      const data = await refreshTokenApi(sid, refreshToken);
      setTimeout(() => {
        dispatch(cb());
      }, 0);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await logInApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logOutApi();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
