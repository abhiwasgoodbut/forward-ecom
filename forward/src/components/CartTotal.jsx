import React from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext.jsx';

function CartTotal() {

    const {currency, deliveryCharge, getCartAmount} = React.useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text={"TOTAL"} text2={ " Amount"}/>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency}{getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between '>
                <p>Shopping fee</p>
                <p>{currency}{deliveryCharge}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryCharge}
                </b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal