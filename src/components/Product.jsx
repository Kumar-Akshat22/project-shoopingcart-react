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
    <div>
        <div>{product.title}</div>
        <div>
            <p>{product.description}</p>
        </div>

        <div>
            <img src={product.image}></img>
        </div>

        <div>
            <p>{product.price}</p>
        </div>

        {
            cart.some((p) => p.id === product.id) ? (<button onClick={removeFromCart}>Remove Item</button>) : (<button onClick={addToCart}>Add to Cart</button>)
        }
    </div>
  )
}

export default Product