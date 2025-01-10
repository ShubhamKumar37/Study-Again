import { User } from "../models";
import { ApiError, asyncHandler } from "../utils";


const updateProfile = asyncHandler(async (req, res) => {
    const { firstName, lastName, gender, about, dob = null, contactNumber = null } = req.body;
    const userId = req.user._id;

    let dataUpdateValues = {};
    if(firstName) dataUpdateValues.firstName = firstName;
    if(lastName) dataUpdateValues.lastName = lastName;

    const updateduser = await User.findById(userId, {
        $set: dataUpdateValues
    });

    if(!updateduser) throw new ApiError(404, "User does not exist");

});

export { updateProfile };