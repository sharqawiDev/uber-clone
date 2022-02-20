import { createSlice } from '@reduxjs/toolkit'

export const UtilitySlice = createSlice({
    name: 'utility',
    initialState: {
        LoaderVisible: false,
    },
    reducers: {
        showLoader: (state, action) => {
            state.LoaderVisible = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { showLoader } = UtilitySlice.actions

export default UtilitySlice.reducer