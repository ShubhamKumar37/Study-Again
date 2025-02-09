import React from "react";
import { TypeAnimation } from "react-type-animation";

const CodeAnimation = () => {
  return (
    <div className='flex w-full flex-row gap-3 border border-[#57575759] p-3 text-[13px] text-caribbeangreen-50'>
      <ul className='flex flex-col items-end'>
        {Array(13)
          .fill(0)
          .map((_, index) => (
            <li key={index}>{index + 1}</li>
          ))}
      </ul>
      <div>
        <TypeAnimation
          sequence={[
            `<!DOCTYPE html>
<html>
<head><title>Example</title>
<link rel="stylesheet" href="styles.css">
</head><body>
<h1><a href="/">Header</a></h1>
<nav><a href="one/">One</a>
<a href="two/">Two</a>
<a href="three/">Three</a></nav>
</body>
</html>`,
            3000, // Pause after typing
            "", // Clears text to start deleting
          ]}
          wrapper='pre' // Ensures correct formatting
          speed={70} // Typing speed
          deleteSpeed={50} // Speed at which it deletes
          repeat={Infinity} // Infinite loop
        />
      </div>
    </div>
  );
};

export default CodeAnimation;
