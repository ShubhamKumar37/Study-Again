import React from "react";
import { YellowBtn } from "../index.js";
import InstructorImage from "../../assets/Images/Instructor.png";
import { FaArrowRight } from "react-icons/fa";
import "../../css/allCss.css";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <div className='mx-auto my-[7rem] flex w-11/12 flex-col gap-[4rem] text-white'>
      <div className='flex flex-col-reverse justify-center gap-[3rem] sm:flex-row'>
        <div className='object-contain sm:w-[42%]'>
          <img
            src={InstructorImage}
            alt='instructor-png'
            className='instructor-shadow'
          />
        </div>

        <div className='flex flex-row items-center sm:w-[47%]'>
          <div className='flex flex-col gap-[3rem]'>
            <div className='flex flex-col gap-3'>
              <h2 className='w-[80%] text-5xl font-semibold sm:text-[36px] sm:leading-[35px]'>
                {" "}
                Become an <span className='text1-gradient'>instructor</span>
              </h2>
              <p className='w-[93%] text-sm font-semibold text-richblack-400'>
                Instructors from around the world teach millions of students on
                StudyNotion. We provide the tools and skills to teach what you
                love.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto w-fit'>
        <Link to={"/signup"}>
          <YellowBtn
            text={
              <>
                Start Teaching Today <FaArrowRight />
              </>
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default Section4;
