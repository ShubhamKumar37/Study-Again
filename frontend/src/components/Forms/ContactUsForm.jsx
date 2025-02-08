import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Input } from "../index.js";

const ContactUsForm = () => {

    const methods = useForm();
    const submitContactForm = (data) => {
        console.log(data);
    };

    return (
        <div className="text-white max-w-lg mx-auto py-10">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitContactForm)} className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* First Name Field */}
                        <Input
                            label={"First Name"}
                            type={"text"}
                            name={"firstName"}
                            required 
                        />
                        <Input
                            label={"Last Name"}
                            type={"text"}
                            name={"lastName"}
                            required 
                        />
                        {/* <label className="flex flex-col w-full">
                            <p className="mb-1 text-sm">First Name</p>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Enter first name"
                                className="p-2 bg-richblack-800 rounded-lg border-none focus:outline-none input-field-shadow"
                                {...register("firstName", { required: true })}
                            />
                            {errors.firstName && <span className="text-red-500 text-xs">Please enter your first name</span>}
                        </label> */}

                        {/* Last Name Field */}
                        {/* <label className="flex flex-col w-full">
                            <p className="mb-1 text-sm">Last Name</p>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Enter last name"
                                className="p-2 bg-richblack-800 rounded-lg border-none focus:outline-none input-field-shadow"
                                {...register("lastName", { required: true })}
                            />
                            {errors.lastName && <span className="text-red-500 text-xs">Please enter your last name</span>}
                        </label> */}
                    </div>

                    {/* Email Field */}
                    {/* <label className="flex flex-col">
                        <p className="mb-1 text-sm">Email Address</p>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            className="p-2 bg-richblack-800 rounded-lg border-none focus:outline-none input-field-shadow"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500 text-xs">Please enter a valid email address</span>}
                    </label> */}

                    {/* Phone Number Field */}
                    {/* <div>
                        <div className="mb-1 text-sm">
                            Phone Number <sup className="text-[#F5004F]">*</sup>
                        </div>
                        <label className="flex gap-6">
                            <select
                                name="countryCode"
                                className="p-2 bg-richblack-800 rounded-lg border-none focus:outline-none input-field-shadow"
                                style={{ width: "80px" }}
                                {...register("countryCode")}
                            >
                                {data.map((item, index) => (
                                    <option key={index} value={item.code}>
                                        {item.code} - {item.country}
                                    </option>
                                ))}
                            </select>
                            <input
                                className="w-full text-white p-2 bg-richblack-800 rounded-lg border-none focus:outline-none input-field-shadow"
                                type="tel"
                                name="phoneNo"
                                placeholder="1234 567890"
                                {...register("phoneNo", {
                                    required: true,
                                    maxLength: { value: 10, message: "Phone number must not exceed 10 digits" },
                                    minLength: { value: 8, message: "Phone number should be at least 8 digits" }
                                })}
                            />
                        </label>
                    </div> */}

                    {/* Message Field */}
                    {/* <label className="flex flex-col">
                        <p className="mb-1 text-sm">Message</p>
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="6"
                            className="p-2 bg-richblack-800 rounded-lg border-none focus:outline-none input-field-shadow"
                            {...register("message", { required: true })}
                        />
                        {errors.message && <span className="text-red-500 text-xs">Please enter your message</span>}
                    </label> */}

                    {/* Submit Button */}
                    {/* <YellowButton type={"submit"} >Send message</YellowButton> */}
                </form>

            </FormProvider>
        </div>
    )
}

export default ContactUsForm