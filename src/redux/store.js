import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import userDataReducer from './userData/userDataSlice';
import transactionsReducer from './transactions/transactionsSlice';
import categoriesReducer from './categories/categoriesSlice';
import monthStatsReducer from './monthStats/monthStatsSlice';
import periodDataReducer from './periodData/periodDataSlice';
import dynamicDataReducer from './dynamicData/dynamicDataReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    userData: userDataReducer,
    transactions: transactionsReducer,
    monthStats: monthStatsReducer,
    categories: categoriesReducer,
    periodData: periodDataReducer,
    dynamicData: dynamicDataReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
