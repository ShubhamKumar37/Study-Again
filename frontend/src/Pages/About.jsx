import React from "react";
import {
  AboutSection1,
  AboutSection2,
  AboutSection3,
  ContactUsForm,
  Quote,
} from "../components";

const About = () => {
  return (
    <div className='bg-richblack-900'>
      <div className='relative bg-[#161D29] pt-[4rem]'>
        <AboutSection1 />
      </div>

      <div className='my-[2rem] border-b border-richblack-400'>
        <Quote />
      </div>

      <div className='mx-auto mt-[10rem] w-9/12'>
        <AboutSection2 />
      </div>

      <div>
        <AboutSection3 />
      </div>

      <div>
        <h1 className='text-center text-3xl font-bold text-white'>
          Get in Touch
        </h1>
        <p className='text-center text-lg font-bold text-white'>
          We’d love to here for you, Please fill out this form.
        </p>

        <ContactUsForm />
      </div>
    </div>
  );
};

export default About;
