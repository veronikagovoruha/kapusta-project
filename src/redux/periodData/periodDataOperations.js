import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPeriodDataApi } from 'services/periodDataApi';
import { errorHandler } from 'redux/error/errorHandler';

export const getPeriodDataThunk = createAsyncThunk(
  'transaction/periodData',
  async (period, { rejectWithValue, dispatch }) => {
    try {
      const data = await getPeriodDataApi(period);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: () => getPeriodDataThunk(period) }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
