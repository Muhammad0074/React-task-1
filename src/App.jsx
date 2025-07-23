import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Layout from './Components/Layout'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound'



function App() {

  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '', element: <Home /> },
        { path: '/home', element: <Navigate to={'/'}/> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}> </RouterProvider>
    </>
  )
}

export default App
