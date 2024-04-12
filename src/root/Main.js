


import React, { useState } from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart';
import  { useLoaderData } from "react-router-dom"
import { addToDb } from '../Utilities/dataBase';
const Main = () => {    
    const data = JSON.parse(useLoaderData());
    const [carts, setCarts] = useState([]);


    
    // console.log(carts)
    const addProduct = (products) => {

        const newCart = [...carts, products]
        setCarts(newCart)
        addToDb(products.id)

    }

    return (
        <div className='  md:flex justify-center'>
            <Products
                     products={data}
                     addProduct = {addProduct}
            ></Products>
            
            
            <Cart
                cart = {carts}
            ></Cart>

        </div>
    );
};

export default Main;