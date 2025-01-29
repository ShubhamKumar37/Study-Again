import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import './stylesheet.css'

const HomePage = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col '>
            {/* Section 1 */}
            <div className='w-full flex flex-col justify-center items-center'>
                <div className="group p-[4px] rounded-full bg-richblack-800 font-bold text-richblack-300 w-fit button-shadow-instructor">
                    <Link
                        to="/signup"
                        className="flex flex-row items-center gap-2 rounded-full px-7 py-[5px] transition-all duration-300 group-hover:bg-richblack-900"
                    >
                        Become an Instructor
                        <FiArrowRight className="sm:block hidden" />
                    </Link>
                </div>
            </div>


            {/* Section 2 */}


            {/* Section 3 */}


            {/* Footer */}
        </div >
    )
}

export default HomePage