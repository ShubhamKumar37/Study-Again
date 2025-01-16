import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { createComment, deleteComment, getAllComment, getAllCommentCourse, getAverageRating, updateComment } from "../controllers/index.js";

const commentRouter = Router();

commentRouter.post("/:courseId", auth, createComment);
commentRouter.get("/avg-rating/:courseId", getAverageRating);
commentRouter.get("/:courseId", getAllCommentCourse);
commentRouter.get("/", getAllComment);
commentRouter.put("/:commentId", auth, updateComment);
commentRouter.delete("/", auth, deleteComment);

export { commentRouter };