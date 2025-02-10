import { userAuthApis } from "../apis.js";
import { apiCall } from "../apiConnector";
import { toastHandler } from "../../utils/toastHandler.js";
import {
  setAvatar,
  setSignupData,
  setToken,
  setUserData,
} from "../../redux/slices/index.js";

const { LOGIN_USER, SENDOTP_USER, LOGOUT_USER, SIGNUP_USER } = userAuthApis;

// Incomplete
export const loginUser = (credentials, navigate) => {
  return async (dispatch) => {
    try {
      const res = apiCall("put", LOGIN_USER, credentials);
      const response = await toastHandler(
        res,
        "Logging in...",
        "Logged in successfully",
        "Fail to login"
      );

      if (response.status === 200) {
        dispatch(setToken(response?.data?.data?.token));
        dispatch(setUserData(response?.data?.data));
        dispatch(setAvatar(response?.data?.data?.image));
      }
      navigate("/");
    } catch (error) {
      console.log("Error occur while fetching user (getUser.js) :: ", error);
    }
  };
};

export const sendOtp = (userData, navigate) => {
  return async (dispatch) => {
    const res = apiCall("post", SENDOTP_USER, { email: userData.email });
    await toastHandler(
      res,
      "Sending OTP...",
      "OTP send successfully",
      "Fail to send OTP"
    );

    dispatch(setSignupData(userData));
    navigate("/verify-email");
  };
};

export const signupUser = (userData, navigate) => {
  return async (dispatch) => {
    const res = apiCall("post", SIGNUP_USER, userData);
    const response = await toastHandler(
      res,
      "Signing up...",
      "Signed up successfully",
      "Fail to signup"
    );

    if (response.status === 200) {
      dispatch(setSignupData(null));
      console.log("This is the signup response = ", response);
    }
    navigate("/login");
  };
};

export const logoutUser = (navigate) => {
  return async (dispatch) => {
    const res = apiCall("put", LOGOUT_USER);
    const response = await toastHandler(
      res,
      "Logging out...",
      "Logged out successfully",
      "Fail to logout"
    );

    if (response.status === 200) {
      dispatch(setToken(null));
      dispatch(setUserData(null));
      dispatch(setAvatar(null));
    }

    navigate("/");
  };
};
