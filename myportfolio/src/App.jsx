import React from 'react'

import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Project from './components/Project'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useContext } from 'react';


const App = () => {
   
  return (
      <div 
>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Project/>}/>
      </Routes>
     <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

