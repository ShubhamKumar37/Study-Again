import { Router } from "express";
import { updateProfile, getUserDetails, getStudentEnrolledCourse, updateProfilePicture } from "../controllers/index.js"
import { auth } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const profileRouter = Router();

profileRouter.get("/user-detail", auth, getUserDetails);
profileRouter.put("/update-profile", auth, updateProfile);
profileRouter.get("/student-enrolled", auth, getStudentEnrolledCourse);
profileRouter.put("/update-profile-picture", auth, upload.single("userImage"), updateProfilePicture);


export { profileRouter };