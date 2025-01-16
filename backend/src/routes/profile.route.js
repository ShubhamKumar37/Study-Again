import { Router } from "express";
import { updateProfile, getUserDetails, getStudentEnrolledCourse, updateProfilePicture } from "../controllers/index.js"
import { auth } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const profileRouter = Router();

profileRouter.get("/details", auth, getUserDetails);
profileRouter.put("/update", auth, updateProfile);
profileRouter.get("/course-enrolled", auth, getStudentEnrolledCourse);
profileRouter.put("/update-pp", auth, upload.single("userImage"), updateProfilePicture);


export { profileRouter };