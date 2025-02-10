import React from "react";
import Logo1 from "../../assets/Logo/Logo-Full-Light.png";
import NavLinksList from "./NavLinksList";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../services/index.js";

const NavBar = () => {
  const { token } = useSelector((state) => state.auth);
  const { avatar, userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log("This is user data = ", userData);
  // console.log("This is token = ", token);
  // console.log("This is avatar = ", avatar);

  return (
    <div className='mx-auto flex w-11/12 flex-row items-center justify-between p-[1rem]'>
      <div>
        <img src={Logo1} loading='lazy' alt='Web-Logo' />
      </div>

      <NavLinksList />

      <div>
        {!token ? (
          <div>
            <Link
              to={"/login"}
              className='rounded-md border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100'
            >
              <button>Login</button>
            </Link>
            <Link
              to={"/signup"}
              className='ml-5 rounded-md border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100'
            >
              <button>Signup</button>
            </Link>
          </div>
        ) : (
          <div className='flex flex-row gap-3'>
            <div>
              <img
                className='rounded-full'
                width={40}
                height={40}
                src={avatar}
                alt='avatar'
                loading='lazy'
              />
            </div>
            <div>
              <button
                onClick={() => dispatch(logoutUser(navigate))}
                className='ml-5 rounded-md border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100'
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
