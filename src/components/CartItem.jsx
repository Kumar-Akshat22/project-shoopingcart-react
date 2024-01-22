import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

function CartItem({item , itemIndex}) {

  const [readMore , setReadMore] = useState(false);
  const description = readMore ? item.description : `${item.description.substring(0,81)}....`;
  const dispatch = useDispatch();
  function removeFromCart(){

    dispatch(remove(item.id));
    toast.success("Item removed from Cart");
  
  }

  function readMoreToggle(){

    setReadMore(!readMore);
  }


  return (
    <div className='flex justify-between items-center p-5 mt-2 mb-2 mx-5'>

      <div className='flex items-center gap-5'>
        <div className='w-[30%]'>
          <img src={item.image} className='object-cover'></img>
        </div>

        <div className='w-[70%] ml-10 self-start space-y-5'>
          <h1 className='text-gray-700 font-medium text-xl'>{item.title}</h1>
          <p className='text-base text-slate-700 font-medium'>{description}
              <span onClick={readMoreToggle} className='text-slate-700 hover:cursor-pointer'>{readMore?'Show Less' : 'Read More'}</span>
          </p>
          <div className='flex items-center justify-between'>
            <p className='text-green-600 font-bold'>₹{item.price}</p>
            <div onClick={removeFromCart} className='bg-red-200 p-3 mr-3 rounded-full text-red-700 hover:cursor-pointer hover:bg-red-400 hover:text-white text-xl transition duration-300'>
              <MdDelete className=''/>
          </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItem