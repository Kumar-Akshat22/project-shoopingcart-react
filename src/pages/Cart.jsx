import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart() {

  const { cart } = useSelector((state)=>state); 
  const [totalAmount , setTotalAmount] = useState(0);

  useEffect(()=>{

    setTotalAmount( cart.reduce((acc , curr) => acc+curr.price , 0))

  } , [cart]);

  return (
    <div className='min-h-[80vh] max-w-6xl mx-auto flex justify-center items-center'>
      {
        cart.length > 0 ?
        (<div className='w-full flex items-center'>
          
          <div className='w-[60%] flex flex-col p-2'>
            {
              cart.map( (item , index) => (<CartItem key={item.id} item={item} itemIndex={index}/>))
            }
          </div>

          <div className='w-[40%] h-[100%] flex flex-col mt-5 jusitfy-between'>
            <div className='flex flex-col gap-5'>
              <div className='text-xl uppercase text-green-800 font-semibold'>Your Cart</div>
              <div className='uppercase text-4xl font-bold text-green-700 -mt-5'>Summary</div>
              <p className='text-xl'>
              <span className='font-semibold text-xl text-gray-700 mt-2'>Total Items: </span>{cart.length}
              </p>
            </div>

            <div className='w-full flex flex-col gap-5'>
              <p className='text-xl font-bold'><span className='font-semibold text-gray-700'>Total Amount:</span> <span>₹{totalAmount}</span></p>
              <button className='w-full p-4 border-2 border-green-600 bg-green-600 tracking-wider text-white rounded-lg font-bold hover:bg-purple-50 hover:text-green-700 transition duration-300'>Checkout Now</button>
            </div>
          </div>



        </div>) 
        :
        (<div className='flex flex-col justify-center items-center'>
          <h1 className='font-semibold text-xl text-gray-700 mb-2'>Your cart is empty!</h1>
          <NavLink to={"/"}>
            <button className='bg-green-600 p-3 px-10 border-2 border-green-600 tracking-wider uppercase text-white rounded-lg font-bold hover:bg-purple-50 hover:text-green-700 transition duration-300 ease-linear mt-4'>Shop Now</button>
          </NavLink>
        </div>)
        
      }
    </div>
  )
}

export default Cart