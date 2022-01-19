import { createSlice } from '@reduxjs/toolkit';

import { IRelatedAddress } from '../../interface/address.interface';

export interface CounterState {
    query: string
    related : IRelatedAddress[]
  selectAddress : IRelatedAddress
}

export const defaultSelectAddress = {
  address: '',
  address_name: '',
  address_type: '',
  road_address: {
    address_name: '',
    building_name: '',
    main_building_no: '',
    region_1depth_name: '',
    region_2depth_name: '',
    region_3depth_name: '',
    road_name: '',
    sub_building_no: '',
    underground_yn: '',
    x: '',
    y: '',
    zone_no: '',
  },
  x: 126.978652258309,
  y: 37.566826004661,
};

const initialState: CounterState = {
  query: '',
  related: [],
  selectAddress: defaultSelectAddress,

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
    setSelectAddress: (state, { payload }) => {
      state.selectAddress = payload;
    },
  },
});

export const {
  searchAddress, setRelatedAddress, setInitialAddress, setSelectAddress,
} = searchSlice.actions;

export default searchSlice.reducer;
