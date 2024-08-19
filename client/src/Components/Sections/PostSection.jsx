import React from 'react'
import { Avatar, Button, TextInput, Select} from 'flowbite-react'
import { FiSmile, FiImage, FiVideo, FiPieChart,  FiPenTool} from 'react-icons/fi'
import { BsPen } from 'react-icons/bs'

import Logo from '../../Assets/Logo/Logo.png'

// import post card
import PostCard from '../PostCard'
import SugessionSection from './SugessionSection'

function PostSection() {
  const postElements = [
    { label: 'Image', icon: <FiImage className="text-lg sm:text-md" /> },
    { label: 'Video', icon: <FiVideo className="text-lg sm:text-md" /> },
    { label: 'Poll', icon: <FiPieChart className="text-lg sm:text-md" /> },
  ]

  return (
    <div className="w-auto sm:w-full box-border overflow-x-hidden">

      {/* Post creation section */}
      <div className="rounded-md flex items-center justify-between p-4 border border-gray-200">
        <div className="flex items-center gap-4">
          <Avatar img={Logo} alt="user" rounded bordered color="blue" size='md'/>
          <span> What's on your mind <b className='text-blue-500'>Username</b></span>
        </div>

        <button className='bg-blue-500 w-[10rem] p-2 flex items-center justify-center gap-2 text-white rounded-md'>
          <BsPen/>
          Post
        </button>
      </div>

      {/* Post Section */}
      <div className='mt-10'>
        <PostCard/>
        <SugessionSection/>
      </div>

    </div>
  )
}

export default PostSection