import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPeriodDataApi } from 'services/periodDataApi';

export const getPeriodDataThunk = createAsyncThunk(
  'transagtion/periodData',
  async (period, { rejectWithValue }) => {
    try {
      const data = await getPeriodDataApi(period);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
