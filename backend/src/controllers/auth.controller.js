import { ApiError } from "../utils/ApiError.util.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { User } from "../models/user.model.js"
import { OTP } from "../models/otp.model.js"
import otpGenerator from "otp-generator"
import { ApiResponse } from "../utils/ApiResponse.util.js";
import { Profile } from "../models/profile.model.js";
import jwt from "jsonwebtoken";
import mailSender from "../utils/mailSender.util.js";

const cookieOptions = {
    httpOnly: true,
    secure: true,
    maxAge: Date.now() + 3 * 24 * 60 * 60 * 1000,
};

const sendOtp = asyncHandler(async (req, res) => {
    const { email } = req.body;

    if (!email) throw new ApiError(400, "Please provide a otp");

    const userExist = await User.findOne({ email: email });

    if (userExist) throw new ApiError(404, "User already exist");

    const otp = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
        digits: true
    });

    const createOtp = await OTP.create({
        email,
        otp
    });

    return res.status(200).json(
        new ApiResponse(200, "Otp has been created", createOtp)
    );

});

const signupUser = asyncHandler(async (req, res) => {
    const {
        firstName, lastName, email,
        password, confirmPassword,
        accountType, otp, contactNumber
    } = req.body;

    if (!firstName) throw new ApiError(400, "Please provide first name");
    if (!lastName) throw new ApiError(400, "Please provide last name");
    if (!email) throw new ApiError(400, "Please provide email");
    if (!password) throw new ApiError(400, "Please provide password");
    if (!confirmPassword) throw new ApiError(400, "Please provide confirm password");
    if (password !== confirmPassword) throw new ApiError(400, "Passwords do not match");
    if (!accountType) throw new ApiError(400, "Please provide account type");
    if (!otp) throw new ApiError(400, "Please provide otp");

    const validOtp = await OTP.findOne({ email, otp }).sort({ createdAt: -1 }).limit(1);
    if (!validOtp) throw new ApiError(400, "Invalid OTP");
    if (validOtp.otp !== otp) throw new ApiError(400, "Invalid OTP");

    const userExist = await User.findOne({ email });
    if (userExist) throw new ApiError(400, "User already exists");

    const newProfile = await Profile.create({
        gender: null,
        dob: null,
        about: null,
        contactNumber: contactNumber || null,
    });

    const newUser = await User.create({
        firstName,
        lastName,
        email,
        password,
        accountType,
        additionalDetails: newProfile._id,
        image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}_${lastName}`
    });

    return res.status(201).json(
        new ApiResponse(201, "User has been created", newUser)
    );
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email) throw new ApiError(400, "Please provide email");
    if (!password) throw new ApiError(400, "Please provide password");

    const userExist = await User.findOne({ email: email }).select("-password");
    if (!userExist) throw new ApiError(404, "User does not exist");

    if (!(await userExist.isPasswordCorrect(password))) throw new ApiError(403, "Incorrect password");

    const token = jwt.sign({
        _id: userExist._id,
        accountType: userExist.accountType,
        email: userExist.email
    }, process.env.JWT_SECRET, { expiresIn: "10h" });

    userExist.token = token;

    return res.cookie("token", token, cookieOptions).status(200).json(
        new ApiResponse(200, "User loggedIn successfully", userExist)
    );
});

const changePassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;
    const userId = req.user._id;

    if (!newPassword || newPassword.trim().length === 0) throw new ApiError(400, "New password is not provided properly");
    if (!confirmPassword || confirmPassword.trim().length === 0)
        throw new ApiError(400, "Confirm password is not provided properly");
    if (!oldPassword || oldPassword.trim().length === 0) throw new ApiError(400, "Confirm password is not provided properly");
    if (newPassword !== confirmPassword) throw new ApiError(400, "New password and confirm password do not match");

    const userExist = await User.findById(userId);
    if (!userExist) throw new ApiError(404, "User not found");

    if (!(await userExist.isPasswordCorrect(oldPassword))) throw new ApiError(403, "Old password is incorrect");

    userExist.password = newPassword;
    await userExist.save({ validateBeforeSave: true });
    userExist.password = undefined;

    // await mailSender(email, "Password changed successfully");

    return res.status(200).json(
        new ApiResponse(200, "Password changed successfully", userExist)
    );
});

export { sendOtp, signupUser, loginUser, changePassword };