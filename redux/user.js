import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        mobileNumber: "",
        name: "",
        email: ""
    },
    reducers: {
        setMobile: (state, action) => {
            state.mobileNumber = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setMobile, setName, setEmail } = UserSlice.actions

export default UserSlice.reducer