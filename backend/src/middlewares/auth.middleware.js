import { ApiError } from "../utils/ApiError.util";
import { asyncHandler } from "../utils/asyncHandler.util";
import jwt from "jsonwebtoken";


const auth = asyncHandler(async (req, _, next) => {
    const token = req.cookies.token || req.body.token || req.header("Authorisation").replace("Bearer ", "");

    if (!token) throw new ApiError(400, "Token is missing");

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) throw new ApiError(403, "There is a issue in token as a error occur while decoding token");

    req.user = decode;
    next();
});

const isStudent = asyncHandler(async (req, _, next) => {
    if (req.user.accountType !== "Student") throw new ApiError(402, "You are not student");
    next();
});

const isAdmin = asyncHandler(async (req, _, next) => {
    if (req.user.accountType !== "Admin") throw new ApiError(402, "You are not Admin");
    next();
});

const isInstructor = asyncHandler(async (req, _, next) => {
    if (req.user.accountType !== "Instructor") throw new ApiError(402, "You are not Instructor");
    next();
});


export { auth, isStudent, isAdmin, isInstructor };