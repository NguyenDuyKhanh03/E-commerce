import React, { useEffect, useState } from 'react'
import HomeIcon from '../../assets/icons/home'
import SearchIcon from '../../assets/icons/search'
import Cartcon from '../../assets/icons/cart'
import ProfileIcon from '../../assets/icons/profile'
import DropdownIcon from '../../assets/icons/dropdown'

const UserTopbar = ({ className }) => {

    return (
        <div className={`flex flex-row items-center justify-between  ${className}`}>
            <div className='flex flex-row-reverse items-center gap-4'>
                <div className='text-[32px] font-semibold'>SHOP.CO</div>
                <div className='inline md:hidden' >
                    <HomeIcon />
                </div>
            </div>

            <div className='hidden md:flex flex-row md:gap-6'>
                <div className='flex flex-row items-center cursor-pointer gap-1'>
                    <div className='text-[16px[ font-[400px]'>Shop</div>
                    <DropdownIcon />
                </div>
                <div className='text-[16px[ font-[400px] cursor-pointer'>On Sale</div>
                <div className='text-[16px[ font-[400px] cursor-pointer'>New Arrivals</div>
            </div>

            <div className='flex flex-row items-center gap-3 md:gap-0'>
                <label className='input hidden bg-[#F0F0F0] border-none md:w-[545px] gap-3 rounded-[62px] md:mr-10 md:flex'>
                    <SearchIcon />
                    <input type="search" className="grow" placeholder="Search" />
                    <kbd className="kbd kbd-sm">⌘</kbd>
                    <kbd className="kbd kbd-sm">K</kbd>
                </label>
                <SearchIcon
                    className='md:hidden'
                    opacity={1}
                />
                <div className='md:mr-3.5 cursor-pointer'>
                    <Cartcon />
                </div>
                <ProfileIcon className='cursor-pointer' />
            </div>

        </div>
    )
}

export default UserTopbar