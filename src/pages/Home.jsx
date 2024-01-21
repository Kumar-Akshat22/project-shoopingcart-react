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
        loading ? <Spinner /> : products.length === 0 ? <div>No Products found</div> : (<div>{products.map( (product) => (<Product key={product.id} product={product}></Product>))}</div>)
      }
    </div>
  )
}

export default Home;