import { Router } from "express";
import { auth, isInstructor } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { createCourse, createSection, createSubSection, deleteSection, deleteSubSection, getAllCourses, getAllSection, getCourseDetail, updateCourse, updateSection } from "../controllers/index.js";


const courseRouter = Router();

// Course routes
courseRouter.post("/", auth, isInstructor, upload.single("thumbnail"), createCourse);
courseRouter.put("/", auth, isInstructor, upload.single("thumbnail"), updateCourse);
courseRouter.get("/", getAllCourses);
courseRouter.get("/:courseId", getCourseDetail);

// Section routes
courseRouter.post("/section/:courseId", auth, isInstructor, createSection);
courseRouter.put("/section/:sectionId", auth, isInstructor, updateSection);
courseRouter.get("/section/:courseId", getAllSection);
courseRouter.delete("/section/:courseId", auth, isInstructor, deleteSection);

// SubSection routes
courseRouter.post("/subsection/:sectionId", auth, isInstructor, upload.single("videoFile"), createSubSection);
courseRouter.delete("/subsection/:sectionId", auth, isInstructor, deleteSubSection);
courseRouter.put("/subsection", auth, isInstructor, deleteSubSection);
courseRouter.put("/subsection/:subSectionId", auth, isInstructor, upload.single("videoFile"), deleteSubSection);

export { courseRouter };