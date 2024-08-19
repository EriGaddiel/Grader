import React from 'react'
import SugessionCard from '../SugessionCard'

import './section.css'

function SugessionSection() {
  return (
    <div className='w-ful flex items-center gap-2 overflow-scroll hide-scrollbar py-4'>
        <SugessionCard />
        <SugessionCard />
        <SugessionCard />
        <SugessionCard />
        <SugessionCard />
        <SugessionCard />
        <SugessionCard />
    </div>
  )
}

export default SugessionSection
