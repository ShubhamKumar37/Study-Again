import React from "react";
import { Section1, Section2, Section3, Section4 } from "../components";

const HomePage = () => {
  return (
    <div className='flex flex-col'>
      {/* Section 1 */}
      <div className='bg-richblack-900'>
        <Section1 />
      </div>

      {/* Section 2 */}
      <div className='bg-richblack-900'>
        <Section2 />
      </div>

      {/* Section 3 */}
      <Section3 />

      {/* Section 4 */}
      <div className='bg-richblack-900'>
        <Section4 />
      </div>
    </div>
  );
};

export default HomePage;
