import React from "react";
import Image1 from "../../assets/Images/Know_your_progress.png";
import Image2 from "../../assets/Images/Compare_with_others.png";
import Image3 from "../../assets/Images/Plan_your_lessons.png";
import "../../css/allCss.css";
import YellowBtn from "../ui/YellowBtn";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const LearningLanguageSection = () => {
  return (
    <div className='relative bg-[#F9F9F9] py-[5rem] pt-[10rem] text-black'>
      <div className='relative mx-auto flex w-11/12 flex-col items-start gap-[1.5rem] sm:items-center'>
        <div className='flex flex-col gap-2 sm:text-center'>
          <div className='font-inter text-[36px] font-bold'>
            Your swiss knife for{" "}
            <span className='text2-gradient'>Learning any language</span>
          </div>
          <div className='text-center'>
            <p className='w-[80%] text-[16px] font-medium sm:mx-auto'>
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
            </p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row'>
          <img
            src={Image1}
            alt='know-your-progress'
            className='relative object-contain sm:left-[7rem] sm:w-[33%]'
          />
          <img
            src={Image2}
            alt='compare-with-other'
            className='relative object-contain sm:left-1 sm:w-[33%]'
          />
          <img
            src={Image3}
            alt='plan-your-leassons'
            className='relative object-contain sm:right-[7.5rem] sm:w-[33%]'
          />
        </div>

        <div className='mx-auto -mt-5'>
          <Link to='/signup'>
            <YellowBtn text={<>Continue Lesson {<FiArrowRight />}</>} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
