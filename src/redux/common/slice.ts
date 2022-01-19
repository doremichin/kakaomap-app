import { createSlice } from '@reduxjs/toolkit';

import { IAddressData, IRelatedAddress } from '../../interface/address.interface';

export interface CounterState {
    addressList: IAddressData[]
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
  addressList: [],
  selectAddress: defaultSelectAddress,
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
  },
});

export const { setCurrentAddress, deleteCurrentAddress, setSelectAddress } = commonSlice.actions;

export default commonSlice.reducer;
