import { configureStore } from '@reduxjs/toolkit'
import MobileReducer from "./mobile"
export const store = configureStore({
    reducer: {
        mobile: MobileReducer
    },
})