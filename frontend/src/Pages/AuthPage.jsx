import React from 'react'
import { AuthRight } from '../components'
import Image1 from "../assets/Images/login.webp"

const AuthPage = ({ flag }) => {
    return (
        <div className='bg-richblack-900 '>
            <div className='w-10/12 h-screen mx-auto flex flex-row gap-[3rem] pt-[3rem] text-white'>
                <div className='lg:w-[50%] w-[90%] mx-auto flex flex-col gap-[1.5rem]'>
                    {flag && (
                        <div></div>
                    )}
                    {!flag && (
                        <div></div>
                    )}
                </div>

                <div className='lg:block hidden'>
                    <AuthRight banner={Image1} />
                    {/* <AuthRight banner={role === "Student" ? Image2 : (type === "login" ? Image1 : Image3)} /> */}
                </div>
            </div>
        </div>
    )
}

export default AuthPage