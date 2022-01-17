import { createSlice } from '@reduxjs/toolkit'
import {IAddressData} from "../../interface/address.interface";

export interface CounterState {
    currentAddress: IAddressData[]
}

const initialState: CounterState = {
    currentAddress: [],
}

export const addressSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setCurrentAddress: (state,action ) => {
            state.currentAddress = action.payload
        },
    },
})

export const { setCurrentAddress } = addressSlice.actions

export default addressSlice.reducer
