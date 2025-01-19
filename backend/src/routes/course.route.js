import { Router } from "express";
import { auth, isInstructor } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { createCourse, createSection, createSubSection, deleteCourse, deleteSection, deleteSubSection, getAllCourses, getAllSection, getCourseDetail, updateCourse, updateSection, updateSubSectionText, updateSubSectionVideo } from "../controllers/index.js";

const courseRouter = Router();

// Course routes
courseRouter.get("/", getAllCourses); // Working
courseRouter.get("/:courseId", getCourseDetail); // Working
courseRouter.delete("/:courseId", auth, isInstructor, deleteCourse);
courseRouter.put("/", auth, isInstructor, upload.single("thumbnail"), updateCourse);
courseRouter.post("/", auth, isInstructor, upload.single("thumbnail"), createCourse); // Working

// Section routes
courseRouter.get("/section/:courseId", getAllSection);
courseRouter.post("/section/:courseId", auth, isInstructor, createSection);
courseRouter.put("/section/:sectionId", auth, isInstructor, updateSection);
courseRouter.delete("/section/:courseId", auth, isInstructor, deleteSection);

// SubSection routes
courseRouter.put("/subsection", auth, isInstructor, updateSubSectionText);
courseRouter.delete("/subsection/:sectionId", auth, isInstructor, deleteSubSection);
courseRouter.post("/subsection/:sectionId", auth, isInstructor, upload.single("videoFile"), createSubSection);
courseRouter.put("/subsection/:subSectionId", auth, isInstructor, upload.single("videoFile"), updateSubSectionVideo);


export { courseRouter };