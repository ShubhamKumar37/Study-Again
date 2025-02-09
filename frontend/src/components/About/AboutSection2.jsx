import React from "react";
import Banner1 from "../../assets/Images/Instructor.png";
import "../../css/allCss.css";

const AboutSection2 = () => {
  return (
    <div className='flex w-full flex-col gap-20 text-white'>
      <div className='flex justify-between gap-20'>
        <div className='w-96'>
          <h2 className='Color-Text-1 text-3xl font-bold'>
            Our Founding Story
          </h2>
          <p className='text-sm text-richblack-200'>
            Our e-learning platform was born out of a shared vision and passion
            for transforming education. It all began with a group of educators,
            technologists, and lifelong learners who recognized the need for
            accessible, flexible, and high-quality learning opportunities in a
            rapidly evolving digital world.
          </p>
          <p className='text-sm text-richblack-200'>
            As experienced educators ourselves, we witnessed firsthand the
            limitations and challenges of traditional education systems. We
            believed that education should not be confined to the walls of a
            classroom or restricted by geographical boundaries. We envisioned a
            platform that could bridge these gaps and empower individuals from
            all walks of life to unlock their full potential.
          </p>
        </div>
        <div className='flex w-96 items-center'>
          <img src={Banner1} alt='Banner1' className='w-80 object-contain' />
        </div>
      </div>
      <div className='flex flex-row justify-between gap-20'>
        <div className='flex w-96 flex-col'>
          <h2 className='Color-Text-2 text-3xl font-bold'>Our Vision</h2>
          <p className='text-sm text-richblack-200'>
            With this vision in mind, we set out on a journey to create an
            e-learning platform that would revolutionize the way people learn.
            Our team of dedicated experts worked tirelessly to develop a robust
            and intuitive platform that combines cutting-edge technology with
            engaging content, fostering a dynamic and interactive learning
            experience.
          </p>
        </div>
        <div className='flex w-96 flex-col'>
          <h2 className='Color-Text-3 text-3xl font-bold'>Our Mission</h2>
          <p className='text-sm text-richblack-200'>
            Our mission goes beyond just delivering courses online. We wanted to
            create a vibrant community of learners, where individuals can
            connect, collaborate, and learn from one another. We believe that
            knowledge thrives in an environment of sharing and dialogue, and we
            foster this spirit of collaboration through forums, live sessions,
            and networking opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
