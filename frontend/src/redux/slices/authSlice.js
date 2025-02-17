import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : Cookie.get("token") || null,
  signupData: localStorage.getItem("signupData")
    ? JSON.parse(localStorage.getItem("signupData"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignupData: (state, action) => {
      state.signupData = action.payload;
      localStorage.setItem("signupData", JSON.stringify(action.payload));
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
  },
});

export const { setSignupData, setToken } = authSlice.actions;

export default authSlice.reducer;
