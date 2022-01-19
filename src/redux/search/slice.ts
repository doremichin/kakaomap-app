import { createSlice } from '@reduxjs/toolkit';

import { IRelatedAddress } from '../../interface/address.interface';

export interface CounterState {
    query: string
    related : IRelatedAddress[]
}

const initialState: CounterState = {
  query: '',
  related: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchAddress: (state, { payload }) => {
      state.query = payload;
    },
    setRelatedAddress: (state, { payload }) => {
      state.related = [...state.related, ...payload];
    },
    setInitialAddress: (state, { payload }) => {
      state.related = payload;
    },
  },
});

export const { searchAddress, setRelatedAddress, setInitialAddress } = searchSlice.actions;

export default searchSlice.reducer;
