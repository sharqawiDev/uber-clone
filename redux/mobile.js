import { createSlice } from '@reduxjs/toolkit'

export const MobileSlice = createSlice({
    name: 'mobile',
    initialState: {
        mobileNumber: ""
    },
    reducers: {
        setMobile: (state, action) => {
            state.mobileNumber = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setMobile } = MobileSlice.actions

export default MobileSlice.reducer