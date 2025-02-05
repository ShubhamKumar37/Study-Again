import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null,
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setUserDatata: (state, action) => {
            state.userData = action.payload
        },
        resetUserData: (state) => {
            state.userData = null
        }
    }
});

export const { setLoading, setUserDatata, resetUserData } = userSlice.actions;

export default userSlice.reducer;