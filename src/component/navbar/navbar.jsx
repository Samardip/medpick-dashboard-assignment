import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Navbar = () => {
  return (
    <div className="px-8 py-6 flex justify-between bg-white sticky top-0">
      <div className='flex items-center relative w-[65%]'>
        <SearchIcon className='absolute left-[7px] bottom-[14px] text-custom-orange' />
        <input
          placeholder={'Search here...'}
          className="bg-gray-50 h-[40px] w-[100%] px-4 pl-8 rounded-[6px]"
        />
      </div>
      <div className='flex justify-end gap-10 items-center w-[35%] px-6'>
        <div><img src="../assests/notification.png" alt="notification" className="w-[40px] h-[40px]" /></div>
        <div className='flex gap-4 items-center'>
          <div><img src="../assests/profilePic.png" alt="profilePic" className="w-[30px] h-[30px]" /></div>
          <div className='flex flex-col gap-2'>
            <div className='font-semibold'>Mohan</div>
            <div className='text-gray-400'>Manager</div>
          </div>
        </div>
        <div className='flex items-start h-[100%]'><KeyboardArrowDownIcon /></div>
      </div>
    </div>
  )
}
