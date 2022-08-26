import { createSlice } from '@reduxjs/toolkit';
import { logOutThunk } from 'redux/auth/authOperations';
import { getPeriodDataThunk } from './periodDataOperations';

const initialState = {
  expenses: {
    total: 0,
    expensesData: [],
  },
  incomes: {
    total: 0,
    incomesData: [],
  },

  isLoading: false,
  error: null,
};

const periodDataSlice = createSlice({
  name: 'periodData',
  initialState,

  extraReducers: {
    [getPeriodDataThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getPeriodDataThunk.fulfilled](state, { payload }) {
      state.expenses.total = payload.expenses.total;
      state.expenses.expensesData = [...payload.expenses.preparedData];
      state.incomes.total = payload.incomes.total;
      state.incomes.incomesData = [...payload.incomes.preparedData];
      state.isLoading = false;
    },
    [getPeriodDataThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [logOutThunk.fulfilled](state) {
      state.expenses.total = 0;
      state.expenses.expensesData = [];
      state.incomes.total = 0;
      state.incomes.incomesData = [];
    },
  },
});

export default periodDataSlice.reducer;
