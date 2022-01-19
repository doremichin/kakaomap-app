import { createSlice } from '@reduxjs/toolkit';

import { IAddressData, IRelatedAddress } from '../../interface/address.interface';

export interface CounterState {
    addressList: IAddressData[]
    selectAddress : IRelatedAddress
    initialized : boolean
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
  addressList: [],
  selectAddress: defaultSelectAddress,
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
    setSelectAddress: (state, { payload }) => {
      state.selectAddress = payload;
    },
    setInitialized: (state) => {
      state.initialized = true;
    },
  },
});

export const {
  setCurrentAddress, deleteCurrentAddress, setSelectAddress, setInitialized,
} = commonSlice.actions;

export default commonSlice.reducer;
