import React, { useState } from 'react'
import { Card, Avatar, Carousel  } from 'flowbite-react'

import { BsThreeDotsVertical, BsHeartFill, BsChat, BsShare, BsBookmark} from 'react-icons/bs'
import Logo from '../Assets/Logo/Logo.png'

function PostCards() {
  return (
    <Card className='mb-10 sm:p-0'>

      {/* Top */}
      <div className='flex items-center justify-between'>
        <Avatar img={Logo} alt="user" rounded bordered color="blue" size='md'>
          <div className='space-y-1 font-medium dark:text-white'>
            <h1 className='text-sm'>UserName</h1>
            <div className='text-sm text-gray-500 dark:text-gray-400'>2 days ago</div>
          </div>
        </Avatar>

        <BsThreeDotsVertical/>
      </div>

      {/* Carousel */}
      <div className='h-54 sm:h-64 xl:h-80 2xl:h-96 mt-2'>

        <Carousel slide={false} className='shadow-none'>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        </Carousel>

      </div>


      {/* Like, Comment, Share and bookmark */}
      <div className="flex items-center justify-between text-xl mt-2">
      <div className="flex items-center gap-4 md:gap-6">
        <div className='flex gap-1 items-center'>
          <BsHeartFill />
          <span className=' text-sm font-sans'>120</span>
        </div>

        <div className='flex gap-1 items-center'>
          <BsChat />
          <span className=' text-sm font-sans'>120</span>
        </div>

        <div className='flex gap-1 items-center'>
          <BsShare />
          <span className=' text-sm font-sans'>120</span>
        </div>
      </div>
      <BsBookmark />
    </div>

      <div className='flex items-center gap-2 mt-2'>
        <Avatar.Group>
          <Avatar img={Logo} alt="user" rounded stacked/>
          <Avatar img={Logo} alt="user" rounded stacked/>
          <Avatar  alt="user" rounded stacked/>
          {/* <Avatar img={Logo} alt="user" rounded stacked/> */}
          <Avatar.Counter total={99} />
        </Avatar.Group>
        <p className='sm: text-sm'>Liked by <b>Username</b> and <b>1,339 others</b></p>
      </div>

      {/* post Caption */}
      <div>
        <p className='text-sm md:text-md'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Tenetur accusamus cupiditate officiis harum hic. Aliquam 
          at placeat necessitatibus ducimus quidem reiciendis odit perspiciatis 
          quas commodi expedita?
        </p>
      </div>

    </Card>
  )
}

export default PostCards
