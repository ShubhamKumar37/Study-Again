import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Input, YellowBtn } from "../components";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FormProvider, useForm } from "react-hook-form";
import { apiCall } from "../services/apiConnector";
import { toastHandler } from "../utils/toastHandler";
import { userAuthApis } from "../services/apis";

const ChangePassword = ({ flag }) => {
  const methods = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setConfirmShowPassword(!confirmShowPassword);

  let passToken = location.pathname.split("/");
  passToken = passToken[passToken.length - 1];

  const submitHandler = async (data) => {
    if (flag === false) {
      if (data.password !== data.confirmPassword) {
        return toast.error("Password doesn't match");
      }
      const res = apiCall(
        "put",
        `${userAuthApis.PASSWORD_RESET_USER}/${passToken}`,
        data
      );
      const response = await toastHandler(
        res,
        "Changing Password...",
        "Password changed successfully",
        "Fail to change Password"
      );
      navigate("/login");
    }
  };

  return (
    <div className='flex h-screen w-screen justify-center bg-richblack-900 p-5 pt-[4rem]'>
      <div className='flex flex-col gap-3 text-white'>
        <h1 className='text-2xl font-bold'>Choose New Password</h1>
        <p className='text-richblack-200'>
          Almost done. Enter your new password and your all set.
        </p>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submitHandler)}
            className='flex flex-col gap-3'
          >
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

            <YellowBtn text='Submit' />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ChangePassword;
