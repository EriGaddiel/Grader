import React from 'react'

import { Avatar } from 'flowbite-react'

function ShortcutCard() {
  return (
    <div className='max-w-md pt-10 rounded-md px-10'>
        <div className='flex items-center justify-between mb-2'>
            <h2 className='mb-1 text-md font-medium text-gray-900 dark:text-white'>Your shortcuts</h2>
            <span className='text-bold text-gray-400 cursor-pointer'>See all</span>
        </div>

        <div className='grid justify-start gap-4'>
            <Avatar alt="user" rounded color="blue" size='md'>
                <span className='text-bold'>UserName</span>
            </Avatar>
            <Avatar alt="user" rounded color="blue" size='md'>
                <span className='text-bold'>UserName</span>
            </Avatar>
            <Avatar alt="user" rounded color="blue" size='md'>
                <span className='text-bold'>UserName</span>
            </Avatar>
            <Avatar alt="user" rounded color="blue" size='md'>
                <span className='text-bold'>UserName</span>
            </Avatar>
        </div>
      
    </div>
  )
}

export default ShortcutCard
