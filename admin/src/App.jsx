import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from '../src/Layout'
import Add from '../pages/Add'
import List from '../pages/List'
import Order from '../pages/Order'

const App = () => {


 

   const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path="add" element={<Add />} />
      <Route path="list" element={<List />} />
      <Route path="order" element={<Order />} />

      </Route>
    )
  )

  return (
    <div className='bg-gray-50 min-h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App