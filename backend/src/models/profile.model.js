import mongoose from "mongoose"

const profileSchema = new mongoose.Schema(
    {
        gender: {
            type: String,
        },
        dob: {
            type: String,
        },
        about: {
            type: String,
            trim: true,
        },
        contactNumber: {
            type: Number,
            trim: true,
        }
    }
);

module.exports = mongoose.models.Profile || mongoose.model("Profile", profileSchema);