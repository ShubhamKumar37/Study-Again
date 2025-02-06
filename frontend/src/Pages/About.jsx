import React from 'react'
import { AboutSection1, AboutSection2, AboutSection3, Quote } from '../components'

const About = () => {
    return (
        <div className='bg-richblack-900'>
            <div className='relative pt-[4rem] bg-[#161D29]'>
                <AboutSection1 />
            </div>

            <div className='border-b border-richblack-400 my-[2rem]'>
                <Quote />
            </div>

            <div className='w-9/12 mx-auto mt-[10rem]'>
                <AboutSection2 />
            </div>

            <div>
                <AboutSection3 />
            </div>

            <div>
                <h1 className='text-white text-center text-3xl font-bold'>Get in Touch</h1>
                <p className='text-white text-center text-lg font-bold'>We’d love to here for you, Please fill out this form.</p>

                {/* <ContactForm /> */}
            </div>
        </div>
    )
}

export default About