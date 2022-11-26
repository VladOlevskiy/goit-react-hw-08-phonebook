import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from '../redux/filterSlice';
import { contactApi } from './contactsSlice';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});
