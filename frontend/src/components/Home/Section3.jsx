import React from 'react'
import LearningLanguageSection from './LearningLanguageSection'
import { Link } from 'react-router-dom'
import { YellowBtn, BlackBtn } from "../index.js"
import { FiArrowRight } from 'react-icons/fi'
import "../../css/allCss.css"
import TimeLineSection from './TimeLineSection.jsx'

const Section3 = () => {
    return (
        <div className='w-full flex flex-col gap-[2rem]'>
            <div className="bg-pure-greys-5 text-richblack-700">
                <div className="home-page-bg-image h-[273px]">
                    <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">

                        <div className="h-[150px]">
                        </div>

                        <div className='flex flex-row gap-[2rem] mx-auto'>
                            <Link to="/signup">
                                <YellowBtn text={<>Explore Full Catalog {<FiArrowRight />}</>} />
                            </Link>
                            <Link to="/login">
                                <BlackBtn text={"Learn More"} />
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between gap-7">
                    <div className="flex flex-col sm:flex-row gap-5 justify-evenly my-10 mt-[100px]">
                        <div className="text-4xl font-semibold sm:w-[45%]">
                            Get the Skills you need for a
                            <span className='text1-gradient'>Job that is in Demand</span>
                        </div>
                        <div className="flex flex-col gap-10 sm:w-[45%]">
                            <div className="text-[16px]">
                                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>

                            <div className="w-fit flex mx-auto">
                                <Link to="/signup">
                                    <YellowBtn text={<>Learn More</>} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <TimeLineSection />

                </div>

            </div>

            <LearningLanguageSection />
        </div>
    )
}

export default Section3
