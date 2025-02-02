import React from 'react'
import "../../css/allCss.css"
import { Link } from 'react-router-dom'
import { BlackBtn, YellowBtn } from '../index.js'
import { FiArrowRight } from 'react-icons/fi'
import CodeAnimation from './CodeAnimation.jsx'

const Section2 = () => {
    return (
        <div className="w-full flex flex-col p-[3rem] py-[5rem] gap-[4rem]">
            <div className='flex flex-row justify-between'>
                <div className='w-[45%] flex flex-col gap-[2rem]'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-[400] text-[36px] leading-[1.2]'>
                            Unlock your <span className='text1-gradient'>coding potential</span> with our online courses.
                        </h1>
                        <p className='font-[500] text-[#838894] text-[16px]'>
                            Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
                        </p>
                    </div>
                    <div className='flex flex-row gap-[2rem]'>
                        <Link to="/signup">
                            <YellowBtn text={<>Try it Yourself {<FiArrowRight />}</>} />
                        </Link>
                        <Link to="/login">
                            <BlackBtn text={"Learn More"} />
                        </Link>
                    </div>
                </div>
                <div className='w-[45%] relative'>
                    <div
                        className={`absolute top-6 w-[230.95px] h-[157.05px] rounded-full shadow-2xl blur-3xl bg-blend-screen left-[5%] opacity-30 z-0 bg-gradient-to-r from-[#15C9FB] to-[#47A5C5]`}
                    ></div>
                    <CodeAnimation />
                </div>
            </div>
            <div className='flex flex-row-reverse justify-between'>
                <div className='w-[45%] flex flex-col gap-[2rem]'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-[400] text-[36px] leading-[1.2]'>
                            Start <span className='text1-gradient'>coding in seconds</span>
                        </h1>
                        <p className='font-[500] text-[#838894] text-[16px]'>
                            Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
                        </p>
                    </div>
                    <div className='flex flex-row gap-[2rem]'>
                        <Link to="/signup">
                            <YellowBtn text={<>Continue Lesson {<FiArrowRight />}</>} />
                        </Link>
                        <Link to="/login">
                            <BlackBtn text={"Learn More"} />
                        </Link>
                    </div>
                </div>
                <div className='relative w-[45%]'>
                    <div
                        className={`absolute top-6 w-[230.95px] h-[157.05px] rounded-full shadow-2xl blur-3xl bg-blend-screen left-[5%] opacity-30 z-0 bg-gradient-to-r from-[#8A2BE2] to-[#FFA500]`}
                    ></div>
                    <CodeAnimation />
                </div>
            </div>
        </div>
    )
}

export default Section2