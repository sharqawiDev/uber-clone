import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "./user"
import UtilityReducer from "./utility"
export const store = configureStore({
    reducer: {
        user: UserReducer,
        utility: UtilityReducer
    },
})