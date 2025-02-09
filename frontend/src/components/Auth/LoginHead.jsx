import React from "react";

const LoginHead = ({ role }) => {
  return (
    <div className='flex flex-col gap-1'>
      <h1 className='text-4xl font-bold'>Welcome Back</h1>
      <div>
        <p className='w-[80%] text-[#AFB2BF]'>
          {role === "Student" ? (
            <>
              Build skills for today, tomorrow, and beyond.{" "}
              <span className='font-edu-sa text-blue-400'>
                Education to future-proof your career.
              </span>
            </>
          ) : (
            <>
              Discover your passions,
              <br />
              <span className='font-edu-sa text-blue-400'>Be Unstoppable</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginHead;
