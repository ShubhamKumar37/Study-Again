import React from "react";

const RoleSlider = ({ role, setRole, roleData }) => {
  function changeRole(roleIndex) {
    setRole(roleData[roleIndex]);
  }

  return (
    <div className='w-fit rounded-full bg-richblack-800 py-1 px-[0.3rem]'>
      <ul className='flex flex-row items-center gap-[1.7rem]'>
        {roleData.map((item, index) => {
          return (
            <li
              onClick={() => changeRole(index)}
              className={`cursor-pointer rounded-full p-2 px-5 transition-all duration-300 ${roleData[index] === role ? "bg-richblack-900 text-white" : "text-richblack-300 hover:bg-richblack-700 hover:text-richblack-50"}`}
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RoleSlider;
