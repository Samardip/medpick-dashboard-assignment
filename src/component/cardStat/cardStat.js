import React from 'react'
import LinearBar from '../../common/linearBar/linearBar'

export const CardStat = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
    <div className='flex gap-6'>
      <div className='w-[60%]'>
        <img src="../assests/card.png" alt="card" />
      </div>
      <div className='flex flex-col gap-4 items-center border border-black rounded-[8px] px-8 pt-4 pb-8 h-[90%]'>
        <div className='font-semibold'>Balance Details</div>
        <div className='flex flex-col gap-2'>
          <div className='font-bold text-xl text-custom-bar-color-1'>
            Rs 10,00,000
          </div>
          <div className='text-sm text-gray-400  text-center'>
            Current balance
          </div>
        </div>
        <div>
          <div className='font-bold text-xl text-custom-bar-color-2'>
            Rs 2,00,000
          </div>
          <div className='text-sm text-gray-400 text-center'>
            Today's spent
          </div>
        </div>
      </div>
    </div>
    <div className='flex flex-col gap-3 w-[100%]  ml-[25px]'>
      <div className='w-[55%]'>
      <LinearBar progess={10} barColor={'rgba(25, 123, 189, 1)'} barBackground={'#bdbdbdb8'} height={'10px'}/>
      </div>
      <div className='flex justify-between w-[55%]'>
        <div className='text-gray-400'>
          Weekly payment limit
        </div>
        <div className='font-bold'>
          Rs. 5,00,000
        </div>
      </div>
    </div>
  </div>
  )
}
