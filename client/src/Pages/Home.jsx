import React from 'react'

// post section
import PostSection from '../Components/Sections/PostSection'
import ProfileCard from '../Components/ProfileCard'
import ShortcutCard from '../Components/ShortcutCard'
import ActivityCard from '../Components/ActivityCard'

function Home() {
  return (
    <div className='flex justify-between p-1 md:p-2 gap-5'>
      
      {/* User profile and  pin section */}
      <div className='w-1/4 xl:w-1/2 md:inline hidden'>
        <ProfileCard/>
        <ShortcutCard/>
      </div>

      {/* Post Section */}
      <PostSection/>

      {/* Notification, other elements */}
      <div className='w-1/4 xl:w-1/2 md:inline hidden'>
        <ActivityCard />
      </div> 

    </div>
  )
}

export default Home
