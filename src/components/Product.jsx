import React from 'react'

function Product({product}) {

    
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

        <button>
            <p>Add To Cart</p>
        </button>
    </div>
  )
}

export default Product