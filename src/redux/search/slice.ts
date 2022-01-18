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
    searchAddress: (state, action) => {
      state.query = action.payload;
    },
    setRelatedAddress: (state, action) => {
      state.related = [...state.related, ...action.payload];
    },
    setInitialAddress: (state, action) => {
      state.related = action.payload;
    },
  },
});

export const { searchAddress, setRelatedAddress, setInitialAddress } = searchSlice.actions;

export default searchSlice.reducer;
