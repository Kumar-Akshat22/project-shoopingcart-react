import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

function CartItem({item , itemIndex}) {

  const dispatch = useDispatch();
  function removeFromCart(){

    dispatch(remove(item.id));
    toast.success("Item removed from Cart");
  
  }


  return (
    <div>

      <div>
        <div>
          <img src={item.image}></img>
        </div>

        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
              <MdDelete />
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default CartItem