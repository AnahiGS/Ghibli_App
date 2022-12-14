import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import AboutPage from './AboutPage'
import { HomePage } from './HomePage'
import LoginPage from './LoginPage'
import Navbar from './Navbar'
import {UserProvider} from './context/UserProvider'

const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <hr/>

      <Navbar/>


      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='/*' element={<Navigate to="/about
        "/>}/>
      </Routes>
    </UserProvider>
  )
}

export default MainApp