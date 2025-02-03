import React from 'react'
import { YellowBtn } from '../index.js'
import InstructorImage from "../../assets/Images/Instructor.png"
import { FaArrowRight } from "react-icons/fa"
import "../../css/allCss.css"
import { Link } from 'react-router-dom'

const Section4 = () => {
    return (
        <div className='w-11/12 mx-auto text-white flex flex-col my-[7rem] gap-[4rem]'>
            <div className='flex flex-col-reverse sm:flex-row gap-[3rem] justify-center'>
                <div className='sm:w-[42%] object-contain '>
                    <img src={InstructorImage} alt='instructor-png' className='instructor-shadow' />
                </div>

                <div className='flex flex-row items-center sm:w-[47%]'>
                    <div className='flex flex-col gap-[3rem]'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-5xl sm:text-[36px] font-semibold w-[80%] sm:leading-[35px]'> Become an <span className='text1-gradient'>instructor</span></h2>
                            <p className='text-sm font-semibold text-richblack-400 w-[93%]'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-fit mx-auto'>
                <Link to={"/signup"}>
                    <YellowBtn text={<>Start Teaching Today <FaArrowRight /></>} />
                </Link>
            </div>
        </div>
    )
}

export default Section4