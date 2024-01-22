import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

function Product({product}) {

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    function addToCart(){

        dispatch(add(product));
        toast.success("Item added to Cart");

    }

    function removeFromCart(){

        dispatch(remove(product.id));
        toast.success("Item removed from Cart");
    }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[0_3px_10px_rgb(0,0,0,0.2)] gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow-[0px_0px_95px_53px_#00000024]'>
        <div>
            <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{product.title}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{product.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>

        <div className='h-[180px]'>
            <img src={product.image} className='h-full w-full'></img>
        </div>

        <div className='w-full flex justify-between gap-11 mt-5'>

            <div>
                <p className='text-green-600 font-bold'>₹{product.price}</p>
            </div>

            {
                cart.some((p) => p.id === product.id) ? (<button onClick={removeFromCart} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>Remove Item</button>) : (<button onClick={addToCart} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase  hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>Add to Cart</button>)
            }
        </div>
    </div>
  )
}

export default Product