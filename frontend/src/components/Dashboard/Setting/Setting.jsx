import React, { useState } from "react";
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
import { setAvatar, setUserData } from "../../../redux/slices/userSlice.js";
import { FaFileUpload } from "react-icons/fa";
import toast from "react-hot-toast";

const Setting = () => {
  const [fileName, setFileName] = useState("Select");
  const [file, setFile] = useState(null);
  const user = useSelector((state) => state.user.userData);
  const avatar = useSelector((state) => state.user.avatar);
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

  function changeHandler(event) {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFile(file);
    }
    else {
      setFileName("Select");
      setFile(null);
    }
  }

  async function uploadUserImage(event) {
    event.preventDefault();

    if (!file) {
      toast.error("Image not selected");
      return;
    }
    const formData = new FormData();
    formData.append('userImage', file);
    console.log("This is the image = ", file);

    const res = apiCall("put", profileApis.UPDATE_PROFILE_PICTURE, formData);
    const response = await toastHandler(
      res,
      "Updating Profile Image.....",
      "Profile Image Updated Successfully",
      "Profile Image Update Failed"
    );
    if (response) {
      const newUser = { ...user };
      newUser.image = response.data.data.image;
      dispatch(setUserData(user));
      dispatch(setAvatar(response.data.data.image));
      navigate("/dashboard/my-profile");
    }
  }

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

          {/* Change Profile Picture */}
          <div className='bg-richblack-800 flex flex-col  md:flex-row items-start md:jsutify-center gap-[1.5rem] py-[1rem] px-[2rem] rounded-xl shadow-richblack-600 shadow-sm'>
            <div className='mx-auto md:mx-0'>
              <img
                src={avatar}
                alt="profile"
                className="w-[5rem] aspect-square rounded-full object-cover"
              />
            </div>
            <div className='flex flex-col justify-center items-center md:mx-0 ms:items-start gap-5 mx-auto'>
              <p>Change Profile Image</p>
              <div>
                {/* Select Image Button */}
                <form onSubmit={uploadUserImage} className='flex w-full gap-2 h-fit' encType="multipart/form-data">
                  <label className='relative text-center text-richblack-5 text-sm  h-fit text-[10px] px-6 py-3 rounded-md  bg-richblack-800 button-shadow-black transition-all duration-200 hover:scale-95 cursor-pointer'>
                    {fileName.length > 6 ? fileName.substring(0, 8) + "..." : fileName}

                    <input
                      type="file"
                      name='userImage'
                      className='absolute inset-0 w-full h-full opacity-0'
                      onChange={changeHandler}
                      style={{ cursor: 'pointer' }}
                      hidden
                    />
                  </label>

                  <button type='submit' className='w-full text-center text-sm px-6 py-1 rounded-md font-bold bg-yellow-50 text-black button-shadow-yellow transition-all duration-200 hover:scale-95'>
                    <div className='flex items-center justify-center gap-2' >
                      <p>Upload</p>
                      <FaFileUpload />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
