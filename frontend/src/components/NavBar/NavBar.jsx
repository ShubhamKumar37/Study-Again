import React from 'react'
import Logo1 from "../../assets/Logo/Logo-Full-Light.png";
import NavLinksList from './NavLinksList';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const isUserLogged = useSelector((state) => state.user.userData);
    console.log("This is user data = ", isUserLogged)

    return (
        <div className='w-11/12 mx-auto flex flex-row justify-between items-center p-[1rem]'>
            <div>
                <img src={Logo1} loading='lazy' alt='Web-Logo' />
            </div>

            <NavLinksList />

            <div>
                {
                    !isUserLogged && (
                        <div>
                            <Link to={'/login'} className='rounded-md text-richblack-100 bg-richblack-800 border border-richblack-700 px-[12px] py-[8px]'>
                                <button>Login</button>
                            </Link>
                            <Link to={'/signup'} className='ml-5 rounded-md text-richblack-100 bg-richblack-800 border border-richblack-700 px-[12px] py-[8px]'>
                                <button>Signup</button>
                            </Link>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default NavBar