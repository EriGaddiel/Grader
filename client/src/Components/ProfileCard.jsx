import React from 'react'
import { Link } from 'react-router-dom'

import { Card, Avatar, Button} from 'flowbite-react'

function ProfileCard() {
  return (
    <div className='max-w-md pt-10 rounded-md'>
        <div className="flex flex-col items-center pb-10">
        <Avatar alt="user" rounded color="blue" size='lg'/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">UserName</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Example@doamin.com</span>

        <div className="mt-4 w-60 flex space-x-3 lg:mt-6 justify-between">
          <div className='mb-1 font-medium text-gray-900 dark:text-white flex flex-col items-center'>
              <h5 className='text-md'>100</h5>
              <span className='text-sm text-gray-400'>Posts</span>
          </div>
          <div className='mb-1 font-medium text-gray-900 dark:text-white flex flex-col items-center'>
              <h5 className='text-md'>100</h5>
              <span className='text-sm text-gray-400'>Followers</span>
          </div>
          <div className='mb-1 font-medium text-gray-900 dark:text-white flex flex-col items-center'>
              <h5 className='text-md'>100</h5>
              <span className='text-sm text-gray-400'>Following</span>
          </div>
        </div>
        
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <Button
            className="inline-flex w-60 items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            My profile
          </Button>
        </div>
      </div>
    </div>  
  )
}

export default ProfileCard
