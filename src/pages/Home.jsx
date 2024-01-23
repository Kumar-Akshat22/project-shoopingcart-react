import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner'

function Home() {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading , setLoading] = useState();
  const [products , setProducts] = useState([]);

  async function fetchProductData(){

    setLoading(true);

    try{

      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);

    }

    catch(error){

      console.log('Error in fetching the data');
      setProducts([]);

    }

    setLoading(false);
  }

  useEffect( ()=>{

    fetchProductData();

  },[])
  return (
    <div>
      {
        loading ? <Spinner /> : products.length === 0 ? <div className='flex justify-center items-center'>No Products found</div> : (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 gap-3 space-x-0 sm:space-x-5 min-h-[80vh]'>{products.map( (product) => (<Product key={product.id} product={product}></Product>))}</div>)
      }
    </div>
  )
}

export default Home;