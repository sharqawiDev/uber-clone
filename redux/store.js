import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "./user"
export const store = configureStore({
    reducer: {
        user: UserReducer
    },
})