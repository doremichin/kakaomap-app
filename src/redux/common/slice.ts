import { createSlice } from '@reduxjs/toolkit'
import {IAddressData, IRelatedAddress, IRoadAddress} from "../../interface/address.interface";

export interface CounterState {
    AddressList: IAddressData[]
    SelectAddress : IRelatedAddress
}

const initialState: CounterState = {
    AddressList: [],
    SelectAddress : {
        address : '',
        address_name : '',
        address_type : '',
        road_address : {
            address_name : '',
            building_name : '',
            main_building_no : '',
            region_1depth_name : '',
            region_2depth_name : '',
            region_3depth_name : '',
            road_name : '',
            sub_building_no : '',
            underground_yn : '',
            x : '',
            y : '',
            zone_no : '',
        },
        x : 0,
        y : 0,
    }
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setCurrentAddress: (state,action ) => {
            state.AddressList = action.payload
        },
        deleteCurrentAddress : (state,action ) => {
            const address = state.AddressList
            state.AddressList = address.filter((data) => data.id !== action.payload)
        },
        setSelectAddress: (state,action ) => {
            state.SelectAddress = action.payload
        },
    },
})

export const { setCurrentAddress , deleteCurrentAddress , setSelectAddress} = commonSlice.actions

export default commonSlice.reducer
