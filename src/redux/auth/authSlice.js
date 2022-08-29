import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUserThunk } from 'redux/userData/userDataOperations';
import { logInThunk, logOutThunk, registerThunk, refreshToken } from './authOperations';

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,

  isRegistered: false,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthInfo: (store, { payload }) => ({
        ...store,
        ...payload
      }),
  },

  extraReducers: {
    [registerThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [registerThunk.fulfilled](state) {
      state.isRegistered = true;
      state.isLoading = false;
    },
    [registerThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [refreshToken.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [refreshToken.fulfilled]: (state, { payload }) => {
      const { newAccessToken, newRefreshToken, newSid } = payload;
      state.isLoading = false;
      state.accessToken = newAccessToken;
      state.refreshToken = newRefreshToken;
      state.sid = newSid;
    },
    [refreshToken.rejected]: (state, { payload }) => {
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
      state.isRegistered = true;
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
      state.isRegistered = false;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOutThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [getCurrentUserThunk.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
    },
  },
});

export const { setAuthInfo } = authSlice.actions;

export default authSlice.reducer;
