import { createSlice } from '@reduxjs/toolkit';
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
      console.log(payload);
      state.expenses.total = payload.expenses.expenseTotal;
      state.expenses.expensesData = [...payload.expenses.expensesData];
      state.incomes.total = payload.incomes.incomesTotal;
      state.incomes.incomesData = [...payload.incomes.incomesData];
      state.isLoading = false;
    },
    [getPeriodDataThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default periodDataSlice.reducer;
