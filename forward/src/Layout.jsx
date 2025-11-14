import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

function Layout() {
  return (
    <>
    <Navbar />
    <SearchBar />
    <Outlet />
    <Footer />

    </>
  )
}

export default Layout