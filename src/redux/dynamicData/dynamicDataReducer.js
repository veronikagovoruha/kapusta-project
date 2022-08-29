import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addDynamicDate } from './dynamicDataActions';

const date = createReducer('', {
  [addDynamicDate]: (_, { payload }) => payload,
});

const dynamicDataReducer = combineReducers({
  date,
});

export default dynamicDataReducer;
