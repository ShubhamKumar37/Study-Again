import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong, FaClockRotateLeft } from "react-icons/fa6";
import { sendOtp } from "../services";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { signupUser } from "../services/index.js";

const VerifyEmail = () => {
  const { signupData } = useSelector((state) => state.auth);
  const methods = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  function submitHandler(data) {
    const newData = { ...signupData, otp: data.OTP };
    dispatch(signupUser(newData, navigate));
  }

  return (
    <div className='flex flex-col justify-center bg-richblack-900'>
      <div className='mt-[6rem] ml-6 flex w-[27.5rem] flex-col items-start gap-[2rem] text-white sm:mx-auto sm:items-center'>
        <div className='flex w-[80%] flex-col items-start'>
          <h1 className='text-xl text-richblack-50'>Verify Email</h1>
          <p className='w-[80%] text-richblack-200'>
            A verification code has been sent to you. Enter code below
          </p>
        </div>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submitHandler)}
            className='flex flex-col items-start gap-4 text-black'
          >
            <Controller
              name='OTP'
              control={methods.control}
              defaultValue=''
              render={({ field }) => (
                <OTPInput
                  value={field.value}
                  onChange={field.onChange}
                  numInputs={6}
                  renderInput={(props) => <input {...props} placeholder='-' />}
                  inputStyle={{
                    width: "50px",
                    height: "40px",
                    borderRadius: "6px",
                    backgroundColor: "#161D29",
                    color: "white",
                    outline: "none",
                  }}
                  containerStyle={{
                    display: "flex",
                    gap: "0.7rem",
                  }}
                />
              )}
            />

            <button
              type='submit'
              className='button-shadow-yellow w-full rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black transition-all duration-200 hover:scale-95'
            >
              Verify Email
            </button>
          </form>
        </FormProvider>

        <div className='flex w-[80%] flex-col items-center justify-between gap-[2rem] sm:flex-row'>
          <Link to={"/login"} className='flex items-center gap-1'>
            <FaArrowLeftLong />
            <p>Back to Login</p>
          </Link>

          <button
            onClick={() => dispatch(sendOtp(signupData, navigate))}
            className='flex items-center gap-1 text-blue-300'
          >
            <FaClockRotateLeft />
            <p>Resend it</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
