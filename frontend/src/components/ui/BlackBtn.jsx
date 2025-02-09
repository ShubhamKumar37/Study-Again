import React from "react";
import "../../css/allCss.css";

const BlackBtn = ({ text }) => {
  return (
    <button className='button-shadow-black flex flex-row items-center gap-[7px] rounded-[8px] bg-[#161D29] px-[24px] py-[12px] text-white transition-all hover:scale-[1.03]'>
      {text}
    </button>
  );
};

export default BlackBtn;
