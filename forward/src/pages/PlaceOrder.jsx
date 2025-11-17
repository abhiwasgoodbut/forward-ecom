import React from 'react'
import Title from '../components/Title'
import Cart from './Cart'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function PlaceOrder() {

  const [method, setMethod] = React.useState('cod');

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div  className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text={'Delivery'} text2={" Information"}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='first name' />
          <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='last name' />
        </div>
        <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='email address' />
        
        <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='street' />
        <div className='flex gap-3'>
          <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='city' />
          <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='state' />
        </div>
         <div className='flex gap-3'>
          <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Zipcode' />
          <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
        <input className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
      </div>
      {/* right side */}
      <div className='mt-8 '>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

         <div className='mt-12'>
          <Title text={'PAYMENT'} text2={ ' MEATHOD'} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=> setMethod('stripe')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=> setMethod('razorpay')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=> setMethod('cod')} className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          
          <div className='w-full text-end mt-8'>
            <Link to={'/order'}>
              <button className='bg-black text-white px-16 py-3 text-sm'>Place Order</button>
            </Link>
          </div>
          
          
         </div>
      </div>
    </div>
  )
}

export default PlaceOrder