import { configureStore } from '@reduxjs/toolkit'
import searchReducer from "./search/slice";
import addressReducer from "./address/slice";

export const store = configureStore({
    reducer: {
        search : searchReducer,
        address : addressReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
