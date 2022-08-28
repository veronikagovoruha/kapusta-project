import { createSlice } from '@reduxjs/toolkit';
import { logInThunk, logOutThunk } from 'redux/auth/authOperations';
import { getCurrentUserThunk } from 'redux/userData/userDataOperations';
import {
  addExpenseTransactionThunk,
  addIncomeTransactionThunk,
  getExpenseTransactionThunk,
  getIncomeTransactionThunk,
  removeTransactionThunk,
} from './transactionsOperations';

const initialState = {
  expense: [],
  income: [],
  allTransactions: [],

  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transaction',
  initialState,

  extraReducers: {
    [addIncomeTransactionThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addIncomeTransactionThunk.fulfilled](state, { payload }) {
      state.income = [...state.income, payload.transaction];
      state.isLoading = false;
    },
    [addIncomeTransactionThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [addExpenseTransactionThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addExpenseTransactionThunk.fulfilled](state, { payload }) {
      state.expense = [...state.expense, payload.transaction];
      state.isLoading = false;
    },
    [addExpenseTransactionThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [getExpenseTransactionThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getExpenseTransactionThunk.fulfilled](state, { payload }) {
      state.expense = [...payload.expenses];
      state.isLoading = false;
    },
    [getExpenseTransactionThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [getIncomeTransactionThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getIncomeTransactionThunk.fulfilled](state, { payload }) {
      state.income = [...payload.incomes];
      state.isLoading = false;
    },
    [getIncomeTransactionThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [removeTransactionThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [removeTransactionThunk.fulfilled](state, { payload }) {
      state.income = state.income.filter(el => el._id !== payload);
      state.expense = state.expense.filter(el => el._id !== payload);
      state.isLoading = false;
    },
    [removeTransactionThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [logInThunk.fulfilled](state, { payload }) {
      state.allTransactions = payload.userData.transactions;
    },

    [logOutThunk.fulfilled](state) {
      state.expense = [];
      state.income = [];
      state.allTransactions = [];
    },

    [getCurrentUserThunk.fulfilled](state, { payload }) {
      state.allTransactions = payload.transactions;
    },
  },
});

export default transactionsSlice.reducer;
