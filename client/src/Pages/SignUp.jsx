  import React, { useEffect, useState} from 'react'
  import { Link, useNavigate } from 'react-router-dom' 
  import { motion } from 'framer-motion'
  import { Label, TextInput, Button, Alert ,Spinner } from 'flowbite-react'

  import {HiOutlineXCircle} from 'react-icons/hi'

  import axios from 'axios'


  function SignUp() {
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) =>{
      setFormData({ ...formData, [e.target.id]: e.target.value.trim()})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      if (!formData.username || !formData.email || !formData.password) {
        return setErrorMessage("Please fill out all fields." )
      }

      try {
        setLoading(true)
        setErrorMessage(null)

        const res = await axios.post('http://localhost:5000/api/auth/signup', formData) 

        if (res.status === 200) {
          setLoading(false)
          navigate('/login')
        }else{
          return setErrorMessage(res.message)
        }
        
      } catch (error) {
        console.log(error)

        if(error.response){
          setErrorMessage(error.response.data.message)
        }else{
          setErrorMessage(error.message)
        }
        setLoading(false)
      }

    }

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
            {
              errorMessage && (
                <Alert className='mb-5' color='failure' icon={HiOutlineXCircle}>
                  {errorMessage}
                </Alert>
            )
          }
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div>
                  <Label value='Your username' />
                  <TextInput type='text' placeholder='Enter your username' id='username' className='w-full' onChange={handleChange}/>
                </div>

                <div>
                  <Label value='Email' />
                  <TextInput type='email' placeholder='Enter your email' id='email' className='w-full' onChange={handleChange}/>
                </div>

                <div>
                  <Label value='Password' />
                  <TextInput type='password' placeholder='Enter your password' id='password' className='w-full' onChange={handleChange}/>
                </div>

                <Button gradientDuoTone="purpleToBlue" type='submit' disabled={loading}>
                    {
                      loading ? (
                        <>
                          <Spinner size='sm' />
                          <span className='pl-3'>Loading...</span>             
                        </>
                      ) : 'Sign Up'
                    }
                 </Button>
            </form>

            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to='/login' className='text-blue-500'>
                Login
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    );
  }

  export default SignUp
