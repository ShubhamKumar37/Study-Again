import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Input, YellowBtn } from "../index.js";

const LoginForm = ({ role }) => {
  const methods = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const submitLoginForm = (data) => {
    data.role = role;
    console.log("This is the data of login form = ", data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitLoginForm)}
          className='flex flex-col gap-6'
        >
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

          <YellowBtn text={"Login"} />
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
