import React from "react";
import "../../css/allCss.css";

const YellowBtn = ({ text }) => {
  return (
    <button
      type='submit'
      className='button-shadow-yellow flex flex-row items-center justify-center gap-[7px] rounded-[8px] bg-[#FFD60A] px-[24px] py-[12px] text-black transition-all hover:scale-[1.03]'
    >
      {text}
    </button>
  );
};

export default YellowBtn;
