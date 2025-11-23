import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import ShopContextProvider from './context/ShopContext.jsx'

function Layout() {
  return (
    <>
    
    <ToastContainer />
    <Navbar />
    <SearchBar />
    <Outlet />
    <Footer />
    
    </>
  )
}

export default Layout