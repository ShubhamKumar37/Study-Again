import React from 'react'
import "../../css/allCss.css"

const YellowBtn = ({ text }) => {
    return (
        <button className='px-[24px] py-[12px] bg-[#FFD60A] text-black rounded-[8px] button-shadow-yellow'>
            {text}
        </button>
    )
}



export default YellowBtn