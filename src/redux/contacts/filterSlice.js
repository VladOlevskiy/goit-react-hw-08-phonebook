import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    foundedContact(state, action) {
      return action.payload;
    },
  },
});

export const { foundedContact } = filterSlice.actions;

export const getFilter = state => state.filter;
