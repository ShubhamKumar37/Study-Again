import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  BlackBtn,
  Input,
  MobileNumberInput,
  SelectOption,
  TextArea,
  YellowBtn,
} from "../../index.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { profileApis } from "../../../services/apis.js";
import { toastHandler } from "../../../utils/toastHandler.js";
import { apiCall } from "../../../services/apiConnector.js";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../redux/slices/userSlice.js";

const Setting = () => {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { firstName, lastName } = user;
  const { gender, dob, contactNumber, about } = user.additionalDetails;

  const methods = useForm({
    defaultValues: {
      firstName,
      lastName,
      gender,
      dob: dob?.split("T")[0],
      contactNumber,
      about,
    },
  });

  const submitFormData = async (data) => {
    console.log("This is form data = ", data);
    const res = apiCall("put", profileApis.UPDATE_PROFILE, data);
    const response = await toastHandler(
      res,
      "Updating Profile.....",
      "Profile Updated Successfully",
      "Profile Update Failed"
    );
    if (response) {
      dispatch(setUserData(response.data.data));
      navigate("/dashboard/my-profile");
    }
    console.log(
      "This is the response of updating profile = ",
      response.data.data
    );
  };

  return (
    <div className='rounded-lg p-[2rem] shadow-md'>
      <div className=''>
        <h1>Setting</h1>
        <div className='flex flex-col gap-2'>
          {/* Change profile Data */}
          <div className='md:jsutify-center flex-col items-start gap-[1.5rem] rounded-xl bg-richblack-800 py-[1rem] px-[2rem] shadow-sm shadow-richblack-600'>
            <div>
              <h1 className='mb-4 text-lg font-bold text-white'>
                Profile Information
              </h1>
            </div>

            <div>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(submitFormData)}>
                  {/* First Name and Last Name */}
                  <div className='mb-4 flex flex-col gap-4 md:flex-row'>
                    <Input
                      type='text'
                      placeholder='First Name'
                      name='firstName'
                      label='First Name'
                      required={false}
                    />
                    <Input
                      type='text'
                      placeholder='Last Name'
                      name='lastName'
                      label='Last Name'
                      required={false}
                    />
                  </div>

                  {/* Gender and Date of Birth */}
                  <div className='mb-4 flex flex-col gap-4 md:flex-row'>
                    <SelectOption
                      label={"Gender"}
                      name={"gender"}
                      options={[
                        { value: "Male", label: "Male" },
                        { value: "Female", label: "Female" },
                        { value: "Other", label: "Other" },
                      ]}
                      required={false}
                    />
                    <Input
                      label='Date of Birth'
                      name='dob'
                      type='date'
                      required={false}
                      min='1900-01-01'
                      max={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  {/* Contact Number and About */}
                  <div className='mb-4 flex flex-col gap-4'>
                    <MobileNumberInput required={false} />

                    <TextArea label='About' name='about' required={false} />
                  </div>

                  {/* Buttons */}
                  <div className='flex flex-row justify-end gap-4'>
                    <Link to='/dashboard/my-profile'>
                      <BlackBtn text={"Cancel"} />
                    </Link>
                    <YellowBtn text={"Save"} />
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
