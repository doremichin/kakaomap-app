import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    query: string
}

const initialState: CounterState = {
    query: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchAddress: (state,action ) => {
            console.log(state.query)
            console.log(action.payload)
            state.query = action.payload
        },
    },
})

export const { searchAddress } = searchSlice.actions

export default searchSlice.reducer
