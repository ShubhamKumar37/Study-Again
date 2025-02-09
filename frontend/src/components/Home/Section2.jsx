import React from "react";
import "../../css/allCss.css";
import { Link } from "react-router-dom";
import { BlackBtn, YellowBtn } from "../index.js";
import { FiArrowRight } from "react-icons/fi";
import CodeAnimation from "./CodeAnimation.jsx";
import ExploreSection from "./ExploreSection.jsx";

const Section2 = () => {
  return (
    <div className='mx-auto flex w-11/12 flex-col gap-[4rem] p-[3rem] py-[5rem]'>
      <div className='flex flex-row justify-between'>
        <div className='flex w-[45%] flex-col gap-[2rem]'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[36px] font-[400] leading-[1.2]'>
              Unlock your{" "}
              <span className='text1-gradient'>coding potential</span> with our
              online courses.
            </h1>
            <p className='text-[16px] font-[500] text-[#838894]'>
              Our courses are designed and taught by industry experts who have
              years of experience in coding and are passionate about sharing
              their knowledge with you.
            </p>
          </div>
          <div className='flex flex-row gap-[2rem]'>
            <Link to='/signup'>
              <YellowBtn text={<>Try it Yourself {<FiArrowRight />}</>} />
            </Link>
            <Link to='/login'>
              <BlackBtn text={"Learn More"} />
            </Link>
          </div>
        </div>
        <div className='relative w-[45%]'>
          <div
            className={`absolute top-6 left-[5%] z-0 h-[157.05px] w-[230.95px] rounded-full bg-gradient-to-r from-[#15C9FB] to-[#47A5C5] opacity-30 bg-blend-screen shadow-2xl blur-3xl`}
          ></div>
          <CodeAnimation />
        </div>
      </div>
      <div className='flex flex-row-reverse justify-between'>
        <div className='flex w-[45%] flex-col gap-[2rem]'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[36px] font-[400] leading-[1.2]'>
              Start <span className='text1-gradient'>coding in seconds</span>
            </h1>
            <p className='text-[16px] font-[500] text-[#838894]'>
              Go ahead, give it a try. Our hands-on learning environment means
              you'll be writing real code from your very first lesson.
            </p>
          </div>
          <div className='flex flex-row gap-[2rem]'>
            <Link to='/signup'>
              <YellowBtn text={<>Continue Lesson {<FiArrowRight />}</>} />
            </Link>
            <Link to='/login'>
              <BlackBtn text={"Learn More"} />
            </Link>
          </div>
        </div>
        <div className='relative w-[45%]'>
          <div
            className={`absolute top-6 left-[5%] z-0 h-[157.05px] w-[230.95px] rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#FFA500] opacity-30 bg-blend-screen shadow-2xl blur-3xl`}
          ></div>
          <CodeAnimation />
        </div>
      </div>

      <div className='z-10 mb-[-9rem] flex flex-col gap-[2rem]'>
        <div className='flex flex-col items-center gap-[0.7rem]'>
          <h2 className='text-[36px] font-[500]'>
            Unlock the <span className='text1-gradient'>Power of Code </span>
          </h2>
          <p className='mt-[-8px] text-richblack-200'>
            Learn to Build Anything You Can Imagine
          </p>
        </div>

        <div>
          <ExploreSection />
        </div>
      </div>
    </div>
  );
};

export default Section2;
