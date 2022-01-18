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
        deleteCurrentAddress : (state,action ) => {
            const address = state.currentAddress
            state.currentAddress = address.filter((data) => data.id !== action.payload)
        },
    },
})

export const { setCurrentAddress , deleteCurrentAddress} = addressSlice.actions

export default addressSlice.reducer
