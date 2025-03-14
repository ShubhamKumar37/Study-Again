import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 0,
};

const courseSlice = createSlice({
    name: "courseStep",
    initialState,
    reducers: {
        nextStep: (state) => {
            state.step = state.step + 1;
        },
        prevStep: (state) => {
            state.step = state.step - 1;
        },
    },
});

export const { nextStep, prevStep } = courseSlice.actions;
export default courseSlice.reducer;