import React from 'react'
import UserTopbar from '../menu/UserTopbar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='flex flex-col flex-[2_8] bg-[#FFF] h-screen'>
        <UserTopbar className='my-6 mx-4 md:mx-[100px]' />
        <Outlet />
    </div>
  )
}

export default UserLayout