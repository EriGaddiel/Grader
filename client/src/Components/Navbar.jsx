import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Avatar, Button, TextInput} from 'flowbite-react'

// Icons 
import {FiBell, FiMoon, FiHome,FiCompass,FiMessageCircle,FiBookOpen,FiUsers} from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'

import { motion } from 'framer-motion'

import Logo from '../Assets/Logo/Logo.png'

function NavBar() {
  const [activeLink, setActiveLink] = useState('/')

  const links = [
    { path: '/', label: 'Home', icon: <FiHome className='text-lg' /> },
    { path: '/explore', label: 'Explore', icon: <FiCompass className='text-lg' /> },
    { path: '/chats', label: 'Chats', icon: <FiMessageCircle className='text-lg' /> },
    { path: '/repository', label: 'Repository', icon: <FiBookOpen className='text-lg' /> },
    { path: '/group', label: 'Groups', icon: <FiUsers className='text-lg' /> },
  ]

  return (
    <Navbar className='border-b-2 p-2' fluid>

      {/* Logo */}
      <Navbar.Brand>
        <Link to='/' className='flex'>
          <img src={Logo} className="mr-3 h-8 sm:h-12" alt="Grader logo"/>
          <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500">Grader</span>
        </Link>
      </Navbar.Brand>

      {/* Search Bar */}
      <TextInput type='text' placeholder='Search ...' className='hidden md:inline'  rightIcon={AiOutlineSearch} sizing='sm'/>

      <div className='relative flex items-center gap-2 sm:gap-4 md:order-2'>
          <AiOutlineSearch className='text-gray-500 cursor-pointer inline md:hidden'/>
          <div className="relative">
              <FiBell />
              <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
          </div>
          <Button className='w-10 h-5 flex flex-col items-end' color='gray' bordered pill>
              <FiMoon className='bg-blue-500 p-1 text-xl rounded-2xl text-white' />
          </Button>
          <Avatar img={Logo} alt="user" rounded bordered color="blue" />
          {/* <Navbar.Toggle/> */}
     </div>

      {/* Menu Items */}
      <Navbar.Collapse>
      {links.map((link) => (
        <Navbar.Link key={link.path} className="relative">
          <Link
            to={link.path}
            className={`flex items-center justify-center p-2 transition-colors duration-500 ${
              activeLink === link.path ? 'text-blue-500 bg-gray-100 rounded-full' : 'text-gray-700'
            }`}
            onClick={() => setActiveLink(link.path)} // Update active link on click
          >
            {link.icon}

            {activeLink === link.path && (
              <motion.span
                className="ml-2 whitespace-nowrap"
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5 },
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                  transition: { duration: 0.5 },
                }}
              >
                {link.label}
              </motion.span>
            )}
          </Link>
        </Navbar.Link>
      ))}
    </Navbar.Collapse>
      

      {/* <MenuDropDown/> */}
    </Navbar>
  )
}

export default NavBar