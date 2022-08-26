import { createSlice } from '@reduxjs/toolkit';
import { logInThunk, logOutThunk } from 'redux/auth/authOperations';
import {
  addExpenseTransactionThunk,
  addIncomeTransactionThunk,
} from 'redux/transactions/transactionsOperations';
import { addUserBalanceThunk, getCurrentUserThunk } from './userDataOperations';

const initialState = {
  email: null,
  balance: 0,
  id: null,

  isLoading: false,
  error: null,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  extraReducers: {
    [getCurrentUserThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getCurrentUserThunk.fulfilled](state, { payload }) {
      state.email = payload.email;
      state.balance = payload.balance;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [getCurrentUserThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [addUserBalanceThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addUserBalanceThunk.fulfilled](state, { payload }) {
      state.balance = payload.newBalance;
      state.isLoading = false;
    },
    [addUserBalanceThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [logInThunk.fulfilled](state, { payload }) {
      state.email = payload.userData.email;
      state.balance = payload.userData.balance;
      state.id = payload.userData.id;
    },

    [logOutThunk.fulfilled](state) {
      state.email = null;
      state.balance = 0;
      state.id = null;
    },

    [addIncomeTransactionThunk.fulfilled](state, { payload }) {
      state.balance = payload.newBalance;
    },

    [addExpenseTransactionThunk.fulfilled](state, { payload }) {
      state.balance = payload.newBalance;
    },
  },
});

export default userDataSlice.reducer;
