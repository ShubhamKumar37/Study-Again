import React from 'react'
import { sidebarLinks } from '../../data/dashboard-links'
import SidebarLink from './SidebarLink';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../services';
import { VscSignOut } from 'react-icons/vsc';

const Sidebar = () => {
    const { user } = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <div className='flex w-[222px] flex-col border-r-[1px] border-r-richblack-300 border-b-[1px] border-b-richblack-300 h-fit bg-richblack-800 py-10 '>
                <div className='flex flex-col gap-2'>
                    {
                        sidebarLinks.map((item) => {
                            if (item.type && user?.accountType !== item.type) return null;

                            return (<SidebarLink iconName={item.icon} link={item} key={item.id} />)
                        })
                    }

                </div>

                <div className='mx-auto mt-6 h-[1px] w-10/12 bg-richblack-600'></div>

                <div className='flex flex-col mt-2'>
                    <SidebarLink
                        link={{ name: "Setting", path: "/dashboard/setting" }} iconName={"VscGear"}
                    />

                    <button onClick={() => dispatch(logoutUser(navigate))}>
                        <div className='relative px-7 py-2 ml-[3px]  text-sm font-medium bg-opacity-0 text-richblack-300 flex flex-row items-center'>
                            <VscSignOut className='mr-1' />
                            <>Logout</>
                        </div>

                    </button>

                </div>
            </div>

            {/* {confirmationModal && <ConfirmationModal modalData={confirmationModal} />} */}

        </div>
    )
}

export default Sidebar