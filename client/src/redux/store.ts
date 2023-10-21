import { configureStore } from '@reduxjs/toolkit';
import { dealsSlice } from './api';

export const store = configureStore({
  reducer: {
    [dealsSlice.reducerPath]: dealsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dealsSlice.middleware),
});
