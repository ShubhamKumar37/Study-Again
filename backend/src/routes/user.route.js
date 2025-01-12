import { Router } from "express";
import {
    sendOtp, signupUser, loginUser, changePassword,
    resetPasswordToken, resetPassword, logoutUser

} from "../controllers/index.js";


const userRouter = Router();

userRouter.put("/login");
userRouter.post("/signup");
userRouter.put("/logout");
userRouter.post("/sendotp");


userRouter.put("/password-change");
userRouter.put("/password-token");
userRouter.put("/password-reset");


export { userRouter };