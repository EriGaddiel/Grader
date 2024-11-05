import React from 'react'

import { Avatar } from 'flowbite-react'
import Logo from '../Assets/Logo/Logo.png'

function ActivityCard() {
  return (
    <div className='max-w-md pt-10 rounded-md px-10'>
        <div className='flex items-center justify-between mb-2'>
            <h2 className='mb-1 text-md font-medium text-gray-900 dark:text-white'>Activities</h2>
            <span className='text-bold text-gray-400 cursor-pointer'>See all</span>
        </div>

        <div className='grid justify-start gap-4'>
            <div className='w-full flex items-center justify-between mb-2'>
                <div className='flex justify-between items-center gap-4'>
                    <Avatar alt="user" rounded color="blue" size='md'/>
                    <div className='flex flex-col justify-start'>
                        <span className='text-bold flex gap-1'>UserName <p className='text-gray-300 text'>Liked</p> </span>
                        <span className='flex gap-1'>your photo. <p className='text-gray-300'> 5m</p></span>
                    </div>
                </div>

                <div className='ml-20'>
                    <span className='text-blue-500'>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className='rounded-md bg-black max-w-15 max-h-20 object-contain' alt="..."/>
                    </span>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex gap-4'>
                    <Avatar alt="user" rounded color="blue" size='md'/>
                    <div className='flex flex-col justify-start'>
                        <span className='text-bold flex gap-1'>UserName <p className='text-gray-300 text'>Started</p> </span>
                        <span className='flex gap-1'>Following you. <p className='text-gray-300'> 5m</p></span>
                    </div>
                </div>

                <div className='pl-10'>
                    <span className='text-blue-500'>Follow</span>
                </div>
            </div>
        </div>
      
    </div>
    
  )
}

export default ActivityCard
