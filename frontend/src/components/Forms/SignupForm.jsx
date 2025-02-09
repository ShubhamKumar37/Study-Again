import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Input, MobileNumberInput, YellowBtn } from "../index.js";

const SignupForm = ({ role }) => {
  const methods = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setConfirmShowPassword(!confirmShowPassword);

  const submitSignupForm = (data) => {
    data.role = role;
    console.log("This is the data of login form = ", data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitSignupForm)}
          className='flex flex-col gap-6'
        >
          <div className='flex flex-row gap-2'>
            <Input
              type={"firstName"}
              placeholder={"Enter first Name"}
              name={"firstName"}
              label={
                <>
                  First Name
                  <sup className='text-[13px] text-[#F5004F]'>*</sup>
                </>
              }
            />
            <Input
              type={"lastName"}
              placeholder={"Enter last Name"}
              name={"lastName"}
              label={
                <>
                  Last Name
                  <sup className='text-[13px] text-[#F5004F]'>*</sup>
                </>
              }
            />
          </div>
          <Input
            type={"email"}
            placeholder={"Enter your email"}
            name={"email"}
            label={
              <>
                Email Address
                <sup className='text-[13px] text-[#F5004F]'>*</sup>
              </>
            }
          />

          <MobileNumberInput />

          <div className='relative'>
            <Input
              name={"password"}
              type={`${showPassword ? "text" : "password"}`}
              placeholder={"Enter your password"}
              label={
                <>
                  Password
                  <sup className='text-[13px] text-[#F5004F]'>*</sup>
                </>
              }
            />
            <span className='absolute right-4 top-[60%] z-10 cursor-pointer'>
              {showPassword ? (
                <IoMdEyeOff onClick={togglePassword} />
              ) : (
                <IoMdEye onClick={togglePassword} />
              )}
            </span>
          </div>
          <div className='relative'>
            <Input
              name={"confirmPassword"}
              type={`${confirmShowPassword ? "text" : "password"}`}
              placeholder={"Enter your confirm password"}
              label={
                <>
                  Confirm Password
                  <sup className='text-[13px] text-[#F5004F]'>*</sup>
                </>
              }
            />
            <span className='absolute right-4 top-[60%] z-10 cursor-pointer'>
              {confirmShowPassword ? (
                <IoMdEyeOff onClick={toggleConfirmPassword} />
              ) : (
                <IoMdEye onClick={toggleConfirmPassword} />
              )}
            </span>
          </div>

          <YellowBtn text={"Sign Up"} />
        </form>
      </FormProvider>
    </div>
  );
};

export default SignupForm;
