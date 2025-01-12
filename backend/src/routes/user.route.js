import { Router } from "express";
import {
    sendOtp, signupUser, loginUser, changePassword,
    resetPasswordToken, resetPassword, logoutUser
} from "../controllers/index.js";
import { auth } from "../middlewares/auth.middleware.js";


const userRouter = Router();


userRouter.put("/login", loginUser);
userRouter.post("/signup", signupUser);
userRouter.put("/logout", auth, logoutUser);
userRouter.post("/sendotp", sendOtp);


userRouter.put("/password-change", auth, changePassword);
userRouter.put("/password-token", resetPasswordToken);
userRouter.put("/password-reset/:token", resetPassword);




export { userRouter };