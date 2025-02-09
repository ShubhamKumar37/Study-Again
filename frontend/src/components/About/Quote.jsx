import React from "react";

const Quote = () => {
  return (
    <div className='mx-auto mb-[2rem] flex w-11/12 items-center border-b text-center text-lg sm:text-2xl'>
      <p className='mx-auto w-[80%] leading-7 text-white'>
        <span className='text-[2rem] text-richblack-300'>" </span>
        We are passionate about revolutionizing the way we learn. Our innovative
        platform
        <span className='text-[#14D2FB]'>combines technology,</span>
        <span className='text-[#F67822]'>expertise,</span>
        and community to create an
        <span className='text-[#F2A916]'>
          unparalleled educational experience.
        </span>
        <span className='text-[2rem] text-richblack-300'>"</span>
      </p>
    </div>
  );
};

export default Quote;
