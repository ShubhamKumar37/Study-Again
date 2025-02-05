import { userAuthApis } from "../apis.js";
import { apiCall } from "../apiConnector";
import { toastHandler } from "../../utils/toastHandler.js";

const { LOGIN_USER, SENDOTP_USER } = userAuthApis;


// Incomplete
export const loginUser = (credentials, navigate) => {
    return async (dispatch) => {
        try {

            const response = await apiCall("put", LOGIN_USER, credentials);
        }
        catch (error) {
            console.log("Error occur while fetching user (getUser.js) :: ", error);
        }
    }
}

export const sendOtp = (email, navigate) => {
    return async (dispatch) => {
        const res = apiCall("post", SENDOTP_USER, { email });
        const response = await toastHandler(res, "Sending OTP...", "OTP send successfully", "Fail to send OTP");
        if (response) console.log("This is otp sending response = ", response.data.data);
    }
}