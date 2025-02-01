import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import '../css/allCss.css'
import { BlackBtn, YellowBtn } from '../components';
import Banner from '../assets/Images/banner.mp4'

const HomePage = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col '>
            {/* Section 1 */}
            <div className='w-full flex flex-col items-center gap-[3rem]'>
                <div className='flex flex-col items-center gap-[36px]'>
                    <div className="group p-[4px] rounded-full bg-richblack-800 font-bold text-richblack-300 w-fit button-shadow-instructor">
                        <Link
                            to="/signup"
                            className="flex flex-row items-center gap-2 rounded-full px-7 py-[5px] transition-all duration-300 group-hover:bg-richblack-900"
                        >
                            Become an Instructor
                            <FiArrowRight className="sm:block hidden font-bold" />
                        </Link>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-10'>
                        <h1 className='text-[36px] font-[600] '>Empower Your Future with <span className='text1-gradient'>Coding Skills</span></h1>
                        <p className='text-[16px] font-[500] text-[#838894] text-center'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. </p>
                    </div>

                    <div className='flex flex-row gap-[1rem]'>
                        <YellowBtn text='Learn More' />
                        <BlackBtn text='Book a Demo' />
                    </div>
                </div>

                <div className='w-9/12 flex flex-row'>
                    <video autoPlay muted loop className='w-full h-[500px] object-cover hero-video-shadow'>
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>
            </div>


            {/* Section 2 */}


            {/* Section 3 */}


            {/* Footer */}
        </div >
    )
}

export default HomePage