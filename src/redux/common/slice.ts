import { createSlice } from '@reduxjs/toolkit';

import { IAddressData } from '../../interface/address.interface';

export interface CounterState {
    addressList: IAddressData[]
    initialized : boolean
}

const initialState: CounterState = {
  addressList: [],
  initialized: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCurrentAddress: (state, { payload }) => {
      state.addressList = payload;
    },
    deleteCurrentAddress: (state, { payload }) => {
      const address = state.addressList;
      state.addressList = address.filter((data) => data.id !== payload);
    },
    setInitialized: (state) => {
      state.initialized = true;
    },
  },
});

export const {
  setCurrentAddress, deleteCurrentAddress, setInitialized,
} = commonSlice.actions;

export default commonSlice.reducer;
