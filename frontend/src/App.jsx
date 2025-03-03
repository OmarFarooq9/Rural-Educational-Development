import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginPage from './pages/LoginPage'
import SigninForm from './pages/SigninPage'
import Home from './pages/Home'
import Assessment from './pages/Assessment'
import Attendance from './pages/Attendance'
import Contact from './pages/Contact'
import Registration from './pages/Registration'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  
  return (  
    <>
      <div className='font-mono px-6'>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/signin' element={<SigninForm/>}></Route>
            <Route path="/home/:id" element={<Home />} />
            <Route path="/assessment/:id" element={<Assessment />} />
            <Route path="/attendance/:id" element={<Attendance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
