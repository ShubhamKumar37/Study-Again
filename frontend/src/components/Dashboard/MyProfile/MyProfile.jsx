import React from "react";
import { YellowBtn } from "../../index.js";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const user = useSelector((state) => state.user.userData);
  const avatar = useSelector((state) => state.user.avatar);
  console.log("This is user data = ", user);
  const navigate = useNavigate();

  return (
    <div className='bg-gray-800 mx-auto w-[95%] rounded-lg p-[2rem] text-white shadow-md'>
      <h1 className='mb-6 text-3xl font-bold'>My Profile</h1>

      {/* Profile Info */}
      <div className='flex flex-col gap-[1rem]'>
        <div className='mb-8 flex items-center rounded-lg bg-richblack-800 p-4 shadow-md'>
          <img
            src={`${avatar}`}
            alt='User'
            className='h-20 w-20 rounded-full'
          />
          <div className='ml-4'>
            <p className='text-xl font-semibold'>
              {user?.firstName} {user?.lastName}
            </p>
            <p className='text-richblack-300'>{user?.email}</p>
          </div>
          <button
            onClick={() => navigate("/dashboard/setting")}
            className='ml-auto'
          >
            <YellowBtn
              text={
                <>
                  <FiEdit className='mr-2' />
                  <p>Edit</p>
                </>
              }
            />
          </button>
        </div>

        {/* About Section */}
        <div className='mb-8 flex flex-col gap-[1rem] rounded-lg bg-richblack-800 p-4 shadow-md'>
          <div className='mb-4 flex items-center justify-between'>
            <p className='text-lg font-semibold'>About</p>
            <button onClick={() => navigate("/dashboard/setting")}>
              <YellowBtn
                text={
                  <>
                    <FiEdit className='mr-2' />
                    <p>Edit</p>
                  </>
                }
              />
            </button>
          </div>
          <p className='w-[70%] text-sm text-richblack-300'>
            {user?.additionalDetails?.about ?? "Write something about yourself"}
          </p>
        </div>

        {/* Personal Details */}
        <div className='rounded-lg bg-richblack-800 p-4 shadow-md'>
          <div className='mb-4 flex items-center justify-between'>
            <p className='text-lg font-semibold'>Personal Details</p>
            <button onClick={() => navigate("/dashboard/setting")}>
              <YellowBtn
                text={
                  <>
                    <FiEdit className='mr-2' />
                    <p>Edit</p>
                  </>
                }
              />
            </button>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div>
              <p className='text-lg'>First Name</p>
              <p className='text-sm font-semibold text-richblack-300'>
                {user?.firstName}
              </p>
            </div>

            <div>
              <p className='text-lg'>Gender</p>
              <p className='text-sm font-semibold text-richblack-300'>
                {user?.additionalDetails?.gender ?? "Add gender"}
              </p>
            </div>

            <div>
              <p className='text-lg'>Last Name</p>
              <p className='text-sm font-semibold text-richblack-300'>
                {user?.lastName}
              </p>
            </div>

            <div>
              <p className='text-lg'>Phone number</p>
              <p className='text-sm font-semibold text-richblack-300'>
                {user?.additionalDetails?.contactNumber ?? "Add contact number"}
              </p>
            </div>

            <div>
              <p className='text-lg'>Date of Birth</p>
              <p className='text-sm font-semibold text-richblack-300'>
                {user?.additionalDetails?.dateOfBirth ?? "Add birthday"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
