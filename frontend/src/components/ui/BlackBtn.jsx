import React from 'react'
import "../../css/allCss.css"

const BlackBtn = ({ text }) => {
    return (
        <button className='px-[24px] py-[12px] bg-[#161D29] text-white rounded-[8px] button-shadow-black'>
            {text}
        </button>
    )
}


export default BlackBtn
