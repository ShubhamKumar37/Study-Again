import React, { useState } from "react";
import Logo1 from "../../assets/Logo/Logo-Full-Light.png";
import NavLinksList from "./NavLinksList";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../services/index.js";

const NavBar = () => {
  const { token } = useSelector((state) => state.auth);
  const { avatar } = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            <div className='cursor-pointer'>
              <img
                className={`rounded-full ${showDropdown ? "border-2 hover:border-white" : ""}`}
                width={40}
                height={40}
                src={avatar}
                alt='avatar'
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              />
              {showDropdown && (
                <div
                  className='absolute right-3 flex flex-col gap-2 rounded-md border border-richblack-700 bg-richblack-800 px-4 py-3 text-richblack-100'
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Link to={`/dashboard`}>Dashboard</Link>
                  <Link to={`/dashboard/my-profile`}>Profile</Link>
                  <div
                    onClick={() => {
                      dispatch(logoutUser(navigate));
                      setShowDropdown(false);
                    }}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
