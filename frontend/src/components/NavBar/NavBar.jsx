import React from 'react'
import Logo1 from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from '../../data/navbar-links';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-row justify-between items-center p-[1rem]'>
            <div>
                <img src={Logo1} loading='lazy' alt='Web-Logo' />
            </div>

            <ul className='flex flex-row gap-[1rem]'>
                {
                    NavbarLinks.map((item, index) => {
                        if (item.title === "Catalog") {
                            return (
                                <li key={index}>
                                    {item.title}
                                </li>
                            )
                        }

                        return (
                            <li key={index}>
                                <NavLink to={item.path} className={({ isActive }) => `${isActive ? "text-white" : "text-richblack-300"}`}>
                                    <button>{item.title}</button>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default NavBar