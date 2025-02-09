import React from "react";

const SignupHead = ({ role }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold lg:text-4xl'>
        Join the StudyNotion for free
      </h1>
      <div className='min-h-[4rem]'>
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

export default SignupHead;
