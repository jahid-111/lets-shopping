


import React from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart';
import  { useLoaderData } from "react-router-dom"
const Main = () => {    
    const data = JSON.parse(useLoaderData());

    return (
        <div className=' flex justify-center items-center'>
            <Products
                     products={data}
            ></Products>
            
            
            
            <Cart></Cart>

        </div>
    );
};

export default Main;