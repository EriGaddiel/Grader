import React, { forwardRef } from 'react'
import { Modal, Button, Checkbox, Label, TextInput, Textarea, FileInput} from 'flowbite-react'

// Use forwardRef to allow the parent component to control focus
const PostToastCard = forwardRef(({ openModal, setOpenModal }) => {
  return (
    <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">Create your post</h3>


          {/* Post title input filed */}
          <div>

            <div className="mb-2 block">
              <Label  value="Post title" />
            </div>
            <TextInput type='text' placeholder="Type your post title here" />
          </div>

          {/*  Caption text area */}
          <div>
            <div className="mb-2 block">
              <Label value="Your Caption" />
            </div>
            <Textarea placeholder='Enter your post caption here ... ' className=' resize-none h-[10rem]' required />
          </div>


          {/* Public and private checkbox */}
          <div className="grid justify-between gap-4">
            <div className="flex items-center gap-2">
              <Checkbox id="public" />
              <div className='flex flex-col'>
                <Label htmlFor="public">Public</Label>
                <span className='text-sm text-gray-500'>Anyone on the internet can see your post.</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="private" />
              <div className='flex flex-col'>
                <Label htmlFor="private">Private</Label>
                <span className='text-sm text-gray-500'>Only your friends can see your post.</span>
              </div>
            </div>

          </div>

          {/* File input */}
          <div className="w-full">
            <div>
              <Label htmlFor="media" value="Upload file" />
           </div>
            <FileInput id="media"/>
          </div>

            <Button className='w-full bg-blue-700 text-white'>Post</Button>

        </div>
      </Modal.Body>
    </Modal>
  )
})

export default PostToastCard