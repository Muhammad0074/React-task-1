import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'


function App() {

  return (
    <>
    <Navbar />
    <Home />
    <Portfolio />
    <About />
    <Contact/>
    <Footer />
    </>
  )
}

export default App
