import React, { useState } from "react";
import data from "../../data/homepage-explore.js";
import ExploreCards from "./ExploreCards.jsx";

const ExploreSection = () => {
  const [navIndex, setNavIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  const changeIndex = (index) => {
    setNavIndex(index);
  };

  const changeCardIndex = (index) => {
    setCardIndex(index);
  };

  return (
    <div className='flex w-full flex-col gap-[2rem]'>
      <ul className='mx-auto flex w-[80%] flex-row justify-between gap-2 rounded-full bg-richblack-800 p-2 px-[2rem] text-richblack-100'>
        {data.map((item, index) => {
          return (
            <li
              onClick={() => changeIndex(index)}
              className={`cursor-pointer rounded-full p-2 px-5 transition-all ${navIndex === index ? "bg-richblack-900 text-white" : "hover:bg-richblack-900"}`}
              key={index}
            >
              {item.tag}
            </li>
          );
        })}
      </ul>
      <div className='flex gap-[1.5rem]'>
        {data[navIndex].courses.map((item, index) => {
          return (
            <div
              className='w-[33%]'
              onClick={() => changeCardIndex(index)}
              key={index}
            >
              <ExploreCards course={item} active={index === cardIndex} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
