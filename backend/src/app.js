import express from "express"
import dotenv from "dotenv"
import cookieparser from "cookie-parser"

dotenv.config();

const app = express();

// Use middlewares
app.use(express.json());
app.use(cookieparser());
app.use(express.static("public"));

// app.get("/", (_, res) => {
//     res.send("Welcome to home page");
// });


export {app};