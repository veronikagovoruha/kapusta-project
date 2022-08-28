import { createSlice } from '@reduxjs/toolkit';
import {
  getExpenseTransactionThunk,
  getIncomeTransactionThunk,
} from 'redux/transactions/transactionsOperations';

const initialState = {
  expense: {},
  income: {},
  
};

const monthStatsSlice = createSlice({
  name: 'transaction',
  initialState,

  extraReducers: {
    [getExpenseTransactionThunk.fulfilled](state, { payload }) {     
      state.expense = { ...payload.monthsStats };
    },

    [getIncomeTransactionThunk.fulfilled](state, { payload }) {
      state.income = { ...payload.monthsStats };
    },
  },
});

export default monthStatsSlice.reducer;
