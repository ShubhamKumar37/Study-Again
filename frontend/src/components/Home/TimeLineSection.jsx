import React from "react";
import Logo1 from "../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../assets/TimeLineLogo/Logo4.svg";
import TimeLineImage from "../../assets/Images/TimelineImage.png";
import "../../css/allCss.css";

const timeLineData = [
  {
    logo: Logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: Logo2,
    heading: "Responsibility",
    description: "Students will always be our top priority",
  },
  {
    logo: Logo3,
    heading: "Flexibility",
    description: "The ability to switch is an important skills",
  },
  {
    logo: Logo4,
    heading: "Solve the problem",
    description: "Code your way to a solution",
  },
];

const TimeLineSection = () => {
  return (
    <div className='my-[3rem] w-[90%]'>
      <div className='gap-15 flex flex-col justify-between lg:flex-row'>
        <div className='mx-auto flex flex-col pb-[5rem] lg:mx-6 lg:pb-[0rem]'>
          {timeLineData.map((item, index) => {
            return (
              <div className='relative flex flex-col' key={index}>
                <div className='flex flex-row items-center gap-3'>
                  <div className='flex h-[50px] w-[50px] flex-row items-center justify-center rounded-full bg-white'>
                    <img
                      src={item.logo}
                      alt='logo'
                      className='h-[30px] w-[30px]'
                    />
                  </div>

                  <div className=''>
                    <h2 className='text-[18px] font-semibold'>
                      {item.heading}
                    </h2>
                    <p className='text-base'>{item.description}</p>
                  </div>
                </div>
                {index !== timeLineData.length - 1 ? (
                  <div className='relative left-[1.5rem] my-2 h-12 border-l-[1px] border-dashed border-[#AFB2BF]'></div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>

        <div className='relative lg:w-[56%]'>
          <div className='absolute left-1/2 top-[25%] z-0 h-[50%] w-[100%] -translate-x-1/2 transform rounded-full bg-gradient-to-r from-[#68e8fe] via-[#65C7F7] to-[#0052D4] opacity-70 blur-[80px] lg:w-[120%]'></div>
          <div className='lg:hero-video-shadow relative z-10 object-cover'>
            <img src={TimeLineImage} alt='TimeLine' />

            <div className='absolute left-[5%] flex h-[10rem] w-[17rem] translate-y-[-50%] flex-col justify-between gap-1 bg-caribbeangreen-700 p-7 uppercase text-white sm:left-[14%] sm:h-fit sm:w-[25rem] sm:flex-row'>
              <div className='flex flex-row items-center gap-2 border-caribbeangreen-300 px-7 text-3xl font-bold sm:border-r'>
                <p>10</p>
                <p className='text-sm text-caribbeangreen-300'>
                  years of experience
                </p>
              </div>

              <div className='mx-auto h-[1px] w-[50%] bg-caribbeangreen-300 sm:hidden'></div>
              <div className='flex w-fit flex-row gap-4 px-5 text-3xl font-bold'>
                <p>250</p>
                <p className='text-sm text-caribbeangreen-300'>
                  types of courses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
