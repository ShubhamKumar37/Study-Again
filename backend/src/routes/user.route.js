import { Router } from "express";
import {
    sendOtp, signupUser, loginUser, changePassword,
    resetPasswordToken, resetPassword, logoutUser
} from "../controllers/index.js";
import { auth } from "../middlewares/auth.middleware.js";


const userRouter = Router();

userRouter.put("/", loginUser); // Working
userRouter.post("/", signupUser); // Working
userRouter.put("/logout", auth, logoutUser); // Working
userRouter.post("/sendotp", sendOtp); // Working


userRouter.put("/password-change", auth, changePassword);
userRouter.put("/password-token", resetPasswordToken);
userRouter.put("/password-reset/:token", resetPassword);




export { userRouter };