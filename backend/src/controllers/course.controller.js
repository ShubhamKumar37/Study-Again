import { Category, Course, User } from "../models";
import { ApiError, ApiResponse, asyncHandler, cloudinaryUpload } from "../utils";


const createCourse = asyncHandler(async (req, res) => {
    const { courseName, courseDescription, whatYouWillLearn, price, categoryId, status = "Draft", instructions, tag } = req.body;
    const thumbnail = req.file.path;

    if (req.user.accountType !== "Instructor") throw new ApiError(403, "You are not instructor");
    if (!courseName || courseName.trim().length === 0) throw new ApiError(400, "Course name is not provided");
    if (!courseDescription || courseDescription.trim().length === 0) throw new ApiError(400, "Course description is not provided");
    if (!whatYouWillLearn || whatYouWillLearn.trim().length === 0) throw new ApiError(400, "What you will learn seciton is not provided");
    if (!price) throw new ApiError(400, "Price is not provided");
    if (!categoryId) throw new ApiError(400, "Category is not provided");
    if (!thumbnail) throw new ApiError(400, "Thumbnail is not provided");

    const categoryExist = await Category.findById(categoryId);
    if (!categoryExist) throw new ApiError(404, "Category does not exist");

    const uploadResponse = await cloudinaryUpload(thumbnail);

    const newCourse = await Course.create({
        courseName,
        courseDescription,
        whatYouWillLearn,
        price,
        category: categoryExist._id,
        thumbnail: uploadResponse.secure_url,
        instructor: req.user._id,
        status,
        instructions,
        tag: [tag],
    });

    const updateUserCourse = await User.findByIdAndUpdate(req.user._id, {
        $push: {
            courses: newCourse._id
        }
    });
    const updateCategory = await Category.findByIdAndUpdate(categoryId, {
        $push: {
            course: newCourse._id
        }
    });

    const allInfo = {
        newCourse, updateUserCourse, updateCategory
    };

    return res.status(200).json(
        new ApiResponse(200, "Course created successfully", allInfo)
    );
});

export { createCourse };