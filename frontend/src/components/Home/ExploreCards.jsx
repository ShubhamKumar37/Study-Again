import React from "react";
import { FaUsersLine } from "react-icons/fa6";
import { MdAccountTree } from "react-icons/md";
import "../../css/allCss.css";

const ExploreCards = ({ course, active }) => {
  return (
    <div
      className={`flex h-[17rem] cursor-pointer flex-col justify-between transition-all duration-300 ${active === true ? "explore-more-card-shadow bg-white text-black" : "bg-[#161D29]"}`}
    >
      <div className={`p-4`}>
        <h1
          className={`text-2xl font-bold ${active === true ? "text-black" : "text-richblack-5"}`}
        >
          {course.heading}
        </h1>

        <p className={`text-[#585D69]`}>{course.description}</p>
      </div>

      <div>
        <div className='h-1 w-full border-t border-dashed border-richblack-100'></div>
        <div
          className={`flex flex-row justify-between py-2 px-4 ${active === true ? "text-blue-400" : "text-[#747b8a]"}`}
        >
          <div className='flex flex-row items-center gap-1 text-lg font-bold'>
            <FaUsersLine />
            <p>{course.level}</p>
          </div>
          <div className='flex flex-row items-center gap-1'>
            <MdAccountTree />
            <p>{course.lessionNumber} Lessons</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCards;
