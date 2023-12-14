import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div>
    <Navbar />
    <div className="min-h-screen mt-16 max-w.screen overflow-hidden">
    <Outlet />
    </div>
    <Footer />
  </div>
  )
}

export default Main
