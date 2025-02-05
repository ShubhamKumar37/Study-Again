import React, { useEffect } from 'react'
import { NavBar, Section1, Section2, Section3, Section4 } from '../components';
import { useDispatch } from 'react-redux';
import { sendOtp } from '../services/index.js';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const otpSendAlready = sessionStorage.getItem("otpSent");

        if (!otpSendAlready) {
            sessionStorage.setItem("otpSent", "true");
            dispatch(sendOtp("sk9818281820@gmail.com", navigate));
            setTimeout(() => {
                sessionStorage.removeItem("otpSent");
            }, 1000);
        }
    }, [dispatch, navigate]);

    return (
        <div className='flex flex-col '>
            <div className='bg-richblack-900'>
                <NavBar />
            </div>

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
    )
}

export default HomePage