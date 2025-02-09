import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "../../css/allCss.css";
import { BlackBtn, YellowBtn } from "../index.js";
import Banner from "../../assets/Images/banner.mp4";

const Section1 = () => {
  return (
    <div className='mx-auto flex w-11/12 flex-col items-center gap-[3rem] bg-richblack-900 p-8'>
      <div className='flex flex-col items-center gap-[36px]'>
        <div className='button-shadow-instructor group w-fit rounded-full bg-richblack-800 p-[4px] font-bold text-richblack-300'>
          <Link
            to='/signup'
            className='flex flex-row items-center gap-2 rounded-full px-7 py-[5px] transition-all duration-300 group-hover:bg-richblack-900'
          >
            Become an Instructor
            <FiArrowRight className='hidden font-bold sm:block' />
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-[36px] font-[600]'>
            Empower Your Future with{" "}
            <span className='text1-gradient'>Coding Skills</span>
          </h1>
          <p className='text-center text-[16px] font-[500] text-[#838894]'>
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.{" "}
          </p>
        </div>

        <div className='flex flex-row gap-[1rem]'>
          <YellowBtn text='Learn More' />
          <BlackBtn text='Book a Demo' />
        </div>
      </div>

      <div className='relative flex w-9/12 flex-row'>
        <div className='absolute left-1/2 top-9 z-0 h-[50%] w-[50%] -translate-x-1/2 transform rounded-full bg-gradient-to-r from-[#9CECFB] via-[#65C7F7] to-[#0052D4] opacity-50 blur-[100px]'></div>
        <video
          autoPlay
          muted
          loop
          className='hero-video-shadow z-10 h-[500px] w-full object-cover'
        >
          <source src={Banner} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

export default Section1;
