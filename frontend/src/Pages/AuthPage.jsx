import React, { useState } from "react";
import {
  AuthForm,
  AuthRight,
  LoginHead,
  RoleSlider,
  SignupHead,
} from "../components";
import Image1 from "../assets/Images/login.webp";
import Image2 from "../assets/Images/signup.webp";
import Image3 from "../assets/Images/Instructor.png";

const AuthPage = ({ type }) => {
  const roleData = ["Student", "Instructor"];
  const [role, setRole] = useState("Student");

  return (
    <div className='bg-richblack-900'>
      <div className='mx-auto flex h-fit w-10/12 flex-row gap-[3rem] py-[3rem] text-white'>
        <div className='mx-auto flex w-[90%] flex-col gap-[1rem] lg:w-[50%]'>
          {type && <LoginHead role={role} />}
          {!type && (
            <>
              <SignupHead role={role} />
              <RoleSlider role={role} setRole={setRole} roleData={roleData} />
            </>
          )}

          <AuthForm type={type} role={role} />
        </div>

        <div className='hidden lg:block'>
          <AuthRight
            banner={
              role === "Student" ? Image2 : type === true ? Image1 : Image3
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
