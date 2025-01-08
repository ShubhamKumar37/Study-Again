import mongoose from "mongoose"

const profileSchema = new mongoose.Schema(
    {
        gender: {
            type: String,
        },
        dob: {
            type: Date,
        },
        about: {
            type: String,
            trim: true,
        },
        contactNumber: {
            type: Number,
            trim: true,
        }
    }, { timestamps: true }
);

export const Profile = mongoose.models.Profile || mongoose.model("Profile", profileSchema);