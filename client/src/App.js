import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'

function App() {

  return (
    <Router>
      <Main/>
    </Router>
  )
}


const Main = () => {
  const path = useLocation()
  const showNavbar = !['/login', '/sign-up'].includes(path.pathname)
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
