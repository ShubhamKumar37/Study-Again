import React from 'react'

const Quote = () => {
    return (
        <div className='w-11/12 mx-auto text-lg sm:text-2xl text-center flex items-center border-b mb-[2rem] '>
            <p className='text-white w-[80%] mx-auto leading-7'>
                <span className='text-[2rem] text-richblack-300'>" </span>
                We are passionate about revolutionizing the way we learn. Our innovative platform
                <span className="text-[#14D2FB]">combines technology,</span>
                <span className="text-[#F67822]">expertise,</span>
                and community to create an
                <span className="text-[#F2A916]">unparalleled educational experience.</span>
                <span className='text-[2rem] text-richblack-300'>"</span>
            </p>
        </div>
    )
}

export default Quote