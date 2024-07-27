  import React, { useEffect, useState} from 'react'
  import {Link} from 'react-router-dom' 
  import { motion } from 'framer-motion'
  import {Label, TextInput, Button, Spinner} from 'flowbite-react'


  function SignUp() {
    return (
      <div className=" min-h-screen flex items-center justify-center">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5"> 

          {/* To the Left */}
          <motion.div 
            className='flex-1'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl text-blue-700 font-bold">Grader</h1>

            <p className="text-sm mt-5 text-[#868AA5]">
              Enhancing university interactions. Connect, collaborate, excel together with Grader
            </p>
          </motion.div>

          {/* To Right */}
          <motion.div 
            className='flex-1 dark:text-white'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            >
            <form className='flex flex-col gap-4'>
                <div>
                  <Label value='Your username' />
                  <TextInput type='text' placeholder='Enter your username' id='username' className='w-full'/>
                </div>

                <div>
                  <Label value='Email' />
                  <TextInput type='email' placeholder='Enter your email' id='email' className='w-full'/>
                </div>

                <div>
                  <Label value='Password' />
                  <TextInput type='password' placeholder='Enter your password' id='password' className='w-full'/>
                </div>

                <Button gradientDuoTone="purpleToBlue" type='submit'>
                  Sign Up
              </Button>
            </form>

            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to='/login' className='text-blue-500'>
                Sign In
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    );
  }

  export default SignUp
