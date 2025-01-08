import mongoose from "mongoose";
import mailSender from "../utils/mailSender.util";

const OTPSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        otp: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            expires: Date.now() + 5 * 60,
        }
    }
);

async function sendVerficationEmail(email, otp) {
    try {
        return await mailSender(email, "OTP for account verification", otp);
    }
    catch (error) {
        console.log("This error occur in OTP Model ", Error);
        return null;
    }
}

OTPSchema.pre("save", async (next) => {
    await sendVerficationEmail(this.email, this.otp);
    next();
})

export const OTP = mongoose.models.OTP || mongoose.model("OTP", OTPSchema);