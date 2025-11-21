import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from "../components/Sidebar"
import Login from '../components/login'
import { ToastContainer } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const Layout = () => {

   const [token, setToekn] = useState('');
  return (
    <>
    <ToastContainer/>
    {token === ""
     ? <Login setToken={setToekn}/>
    : <> <Navbar/>
        <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vh,25px)] my-8 text-gray-600 text-base'>
                <Outlet />
            </div>
        </div>
        </>
        }
       
        
    </>
  )
}

export default Layout