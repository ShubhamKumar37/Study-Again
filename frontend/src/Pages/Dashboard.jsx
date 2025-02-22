import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <div className='text-white'>
          <Outlet />
        </div>
      </div>
    </div>)
}

export default Dashboard