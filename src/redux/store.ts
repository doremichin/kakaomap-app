import { configureStore } from '@reduxjs/toolkit'
import searchReducer from "./search/slice";
import commonReducer from "./common/slice";

export const store = configureStore({
    reducer: {
        search : searchReducer,
        common : commonReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
