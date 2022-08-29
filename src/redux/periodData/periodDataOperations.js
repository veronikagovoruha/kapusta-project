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
      dispatch(errorHandler({ error, cb: () => { return getPeriodDataThunk(period) }}));
      return rejectWithValue(error.message);
    }
  }
);
