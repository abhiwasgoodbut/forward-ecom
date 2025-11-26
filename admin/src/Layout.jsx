import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from "../components/Sidebar"
import Login from '../components/Login.jsx'
import { ToastContainer } from 'react-toastify';
import { TokenContext } from './context/Context.jsx'
import { useContext } from 'react'


export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'

const Layout = () => {

   const { token , setToken} = useContext(TokenContext);

  return (
    <>
    
    <ToastContainer/>
    {token === ""
     ? <Login setToken={setToken}/>
    : <> <Navbar setToken={setToken}/>
        <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vh,25px)] my-8 text-gray-600 text-base'>
                <Outlet  />
            </div>
        </div>
        </>
        }
       
        
    </>
  )
}

export default Layout