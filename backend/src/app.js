import express from "express"
import dotenv from "dotenv"
import cookieparser from "cookie-parser"

dotenv.config();

const app = express();

// Use middlewares
app.use(express.json());
app.use(cookieparser());
app.use(express.static("public"));

import { userRouter, profileRouter, paymentRouter, courseRouter, commentRouter } from "./routes/index.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/comment", commentRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/payment", paymentRouter);

app.get("/", (_, res) => {
    res.send("Welcome to home page");
});


export { app };