import { createSlice } from '@reduxjs/toolkit';
import { logInThunk, logOutThunk, registerThunk } from './authOperations';

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,

  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [registerThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [registerThunk.fulfilled](state) {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [registerThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [logInThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logInThunk.fulfilled](state, { payload }) {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logInThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [logOutThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logOutThunk.fulfilled](state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOutThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
