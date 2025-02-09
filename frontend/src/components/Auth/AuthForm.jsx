import React from "react";
import { LoginForm, SignupForm } from "../index.js";

const AuthForm = ({ type, role }) => {
  return (
    <div className='w-[85%]'>
      {type === true ? <LoginForm role={role} /> : <SignupForm role={role} />}
    </div>
  );
};

export default AuthForm;
